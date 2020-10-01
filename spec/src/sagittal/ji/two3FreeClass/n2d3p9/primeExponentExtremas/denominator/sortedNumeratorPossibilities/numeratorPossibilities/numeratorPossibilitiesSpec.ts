import { IntegerNumerator, Max, Prime } from "../../../../../../../../../../src/general/math"
import { N2D3P9 } from "../../../../../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9"
import { computeNumeratorPossibilitiesForDenominatorGivenMaxN2D3P9 } from "../../../../../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/numeratorPossibilities"

describe("computeNumeratorPossibilitiesForDenominatorGivenMaxN2D3P9", (): void => {
    it("returns the possibilities for the numerator (which will be used to calculate the possibilties for the denominator; hence starting at 7) given the max N2D3P9, along with their GPF", (): void => {
        const maxN2D3P9 = 6 as Max<N2D3P9>

        const actual = computeNumeratorPossibilitiesForDenominatorGivenMaxN2D3P9(maxN2D3P9)

        const expected = [
            { numerator: 7 as IntegerNumerator, gpf: 7 as Max<Prime> },
            { numerator: 11 as IntegerNumerator, gpf: 11 as Max<Prime> },
            { numerator: 13 as IntegerNumerator, gpf: 13 as Max<Prime> },
            { numerator: 17 as IntegerNumerator, gpf: 17 as Max<Prime> },
            { numerator: 19 as IntegerNumerator, gpf: 19 as Max<Prime> },
            { numerator: 23 as IntegerNumerator, gpf: 23 as Max<Prime> },
            { numerator: 25 as IntegerNumerator, gpf: 5 as Max<Prime> },
        ]
        expect(actual).toEqual(expected)
    })
})