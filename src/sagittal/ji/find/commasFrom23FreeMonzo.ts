import {
    abs,
    Comma,
    computePlusOrMinusRange,
    computeRationalScamonFromRationalMonzo,
    Decimal,
    Exponent,
    isUndefined,
    Maybe,
    Monzo,
    Prime,
    shallowClone,
    THREE_PRIME_INDEX,
    TWO_PRIME_INDEX,
} from "../../../general"
import {analyzeComma, CommaAnalysis} from "../analyze"
import {
    DEFAULT_LOWER_BOUND,
    DEFAULT_MAX_AAS,
    DEFAULT_MAX_ATE,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_UPPER_BOUND,
} from "./constants"
import {computeRationalMonzoInZone} from "./monzoInZone"
import {CommasFrom23FreeMonzoOptions} from "./types"

const compute2FreeRationalMonzo = (
    two3FreeRationalMonzo: Monzo<{rational: true, rough: 5}>,
    threeExponent: Decimal<{integer: true}> & Exponent<3 & Prime>,
): Monzo<{rational: true, rough: 3}> => {
    const twoFreeRationalMonzo: Monzo<{rational: true, rough: 3}> =
        shallowClone(two3FreeRationalMonzo) as Monzo<{rational: true}> as Monzo<{rational: true, rough: 3}>
    twoFreeRationalMonzo[THREE_PRIME_INDEX] = threeExponent

    if (isUndefined(twoFreeRationalMonzo[TWO_PRIME_INDEX])) {
        twoFreeRationalMonzo[TWO_PRIME_INDEX] = 0 as Decimal<{integer: true}> & Exponent<Prime>
    }

    return twoFreeRationalMonzo
}

const computeCommasFrom23FreeRationalMonzo = (
    two3FreeRationalMonzo: Monzo<{rational: true, rough: 5}>,
    options?: CommasFrom23FreeMonzoOptions,
): Comma[] => {
    const {
        lowerBound = DEFAULT_LOWER_BOUND,
        upperBound = DEFAULT_UPPER_BOUND,
        maxAte = DEFAULT_MAX_ATE,
        maxAas = DEFAULT_MAX_AAS,
        maxN2D3P9 = DEFAULT_MAX_N2D3P9,
    } = options || {}

    const commas: Comma[] = []

    computePlusOrMinusRange(maxAte).forEach((threeExponent: Decimal<{integer: true}> & Exponent<3 & Prime>): void => {
        const twoFreeRationalMonzo = compute2FreeRationalMonzo(two3FreeRationalMonzo, threeExponent)
        const rationalMonzoInZone: Maybe<Monzo<{rational: true}>> =
            computeRationalMonzoInZone(twoFreeRationalMonzo, [lowerBound, upperBound])

        if (rationalMonzoInZone) {
            const comma = computeRationalScamonFromRationalMonzo(rationalMonzoInZone) as Comma

            const commaAnalysis: CommaAnalysis = analyzeComma(comma)
            if (
                abs(commaAnalysis.apotomeSlope) > maxAas ||
                commaAnalysis.two3FreeClassAnalysis.n2d3p9 > maxN2D3P9
            ) {
                return
            }

            commas.push(comma)
        }
    })

    return commas
}

export {
    computeCommasFrom23FreeRationalMonzo,
}