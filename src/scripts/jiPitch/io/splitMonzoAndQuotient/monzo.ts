import {
    Count,
    Decimal,
    Exponent,
    formatIntegerDecimal,
    formatMonzo,
    Formatted,
    Io,
    ioSettings,
    Max,
    Monzo,
    parseInteger,
    Prime,
} from "../../../../general"
import { JiPitchAnalysis } from "../../../../sagittal"

const formatSplitMonzo = (
    monzo: Monzo,
    maxMonzoLength: Max<Count<Exponent<Prime>>>,
): Array<Formatted<JiPitchAnalysis>> => {
    const formattedMonzo = formatMonzo(monzo)

    let splitFormattedMonzo = formattedMonzo.split(/\s+/)
    splitFormattedMonzo.shift()             // Remove the "["
    splitFormattedMonzo.pop()               // Remove the "⟩"
    splitFormattedMonzo = splitFormattedMonzo.map((formattedPrimeExponent: string): Formatted<Decimal> => {
        return formatIntegerDecimal(parseInteger(formattedPrimeExponent as Io), { ...ioSettings, align: true })
    })
    splitFormattedMonzo.unshift("[")  // Put back the "["
    while (splitFormattedMonzo.length < maxMonzoLength + 1) { // +1 for the [
        splitFormattedMonzo.push("")
    }
    splitFormattedMonzo.push("⟩")           // Put back the "⟩"

    return splitFormattedMonzo as Array<Formatted> as Array<Formatted<JiPitchAnalysis>>
}

export {
    formatSplitMonzo,
}