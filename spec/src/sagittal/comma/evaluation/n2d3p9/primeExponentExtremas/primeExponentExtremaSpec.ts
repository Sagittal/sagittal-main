import { Exponent, Extrema, Integer, Max, Prime } from "../../../../../../../src/general"
import { N2D3P9 } from "../../../../../../../src/sagittal"
import { computePrimeExponentExtremaGivenMaxN2D3P3 } from "../../../../../../../src/sagittal/comma/evaluation/n2d3p9/primeExponentExtremas/primeExponentExtrema"

describe("computePrimeExponentExtremaGivenMaxN2D3P3", (): void => {
    it("returns the max exponent for the denominator as the min exponent and the max exponent of the numerator as the max exponent", (): void => {
        const prime = 5 as Prime
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computePrimeExponentExtremaGivenMaxN2D3P3(prime, maxN2D3P9)

        const expected = [-1, 2] as Extrema<Integer & Exponent<Prime>>
        expect(actual).toEqual(expected)
    })

    it("when mirrored is true, returns the denominator as the negative of the numerator", (): void => {
        const prime = 5 as Prime
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computePrimeExponentExtremaGivenMaxN2D3P3(prime, maxN2D3P9, { mirrored: true })

        const expected = [-2, 2] as Extrema<Integer & Exponent<Prime>>
        expect(actual).toEqual(expected)
    })
})
