import { Id } from "../../general"
import { Ascii, SYMBOL_TO_UNICODE_MAP } from "../io"
import { analyzeComma } from "../ji"
import { getCommaClass } from "./commaClass"
import { getIntroducingJiNotationLevel, getMinaName } from "./ji"
import { getPrimaryComma } from "./primaryComma"
import { getRepresentativeSymbol } from "./representativeSymbolAscii"
import { getSmallestSymbolSubset } from "./smallestSymbolSubset"
import { CommaClass, CommaClassAnalysis } from "./types"

const analyzeCommaClass = (
    commaClassId: Id<CommaClass>,
): CommaClassAnalysis => {
    const commaClass = getCommaClass(commaClassId)
    const { primaryCommaId, ...otherCommaClassProperties } = commaClass

    const primaryComma = getPrimaryComma(commaClassId)
    const primaryCommaAnalysis = analyzeComma(primaryComma)

    const symbol = getRepresentativeSymbol(commaClassId)
    const ascii = symbol as string as Ascii
    const unicode = SYMBOL_TO_UNICODE_MAP[ symbol ]

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(commaClassId)

    const minaName = getMinaName(commaClassId)

    const smallestSymbolSubset = getSmallestSymbolSubset(commaClassId)

    return {
        ...otherCommaClassProperties,
        smallestSymbolSubset,
        minaName,
        ascii,
        unicode,
        introducingJiNotationLevel,
        primaryCommaAnalysis,
    }
}

export {
    analyzeCommaClass,
}
