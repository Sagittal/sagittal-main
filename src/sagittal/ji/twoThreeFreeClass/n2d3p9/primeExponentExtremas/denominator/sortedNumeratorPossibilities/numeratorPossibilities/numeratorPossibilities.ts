import { computeGpf, Max, Numerator } from "../../../../../../../../general"
import { N2D3P9 } from "../../../../types"
import { computePossibleNumeratorsGivenMaxN2D3P9 } from "./possibleNumerators"
import { NumeratorPossibilityForDenominatorGivenMaxN2D3P9 } from "./types"

const computeNumeratorPossibilitiesForDenominatorGivenMaxN2D3P9 = (
    maxN2D3P9: Max<N2D3P9>,
): NumeratorPossibilityForDenominatorGivenMaxN2D3P9[] => {
    const possibleNumeratorsGivenMaxN2D3P9 = computePossibleNumeratorsGivenMaxN2D3P9(maxN2D3P9)

    return possibleNumeratorsGivenMaxN2D3P9
        .map((possibleNumerator: Numerator): NumeratorPossibilityForDenominatorGivenMaxN2D3P9 => {
            return {
                numerator: possibleNumerator,
                gpf: computeGpf(possibleNumerator),
            }
        })
}

export {
    computeNumeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
}