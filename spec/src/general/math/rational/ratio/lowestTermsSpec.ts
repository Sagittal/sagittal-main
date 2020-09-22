import { Ratio } from "../../../../../../src/general/math/rational/ratio"
import { computeLowestTermsRatio } from "../../../../../../src/general/math/rational/ratio/lowestTerms"

describe("computeLowestTermsRatio", (): void => {
    it("returns the ratio in lowest terms", (): void => {
        const ratio = [99, 21] as Ratio

        const actual = computeLowestTermsRatio(ratio)

        const expected: Ratio = [33, 7] as Ratio
        expect(actual).toEqual(expected)
    })
})