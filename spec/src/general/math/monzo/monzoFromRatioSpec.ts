import { computeMonzoFromRatio, Monzo, Ratio } from "../../../../../src/general"

describe("monzoFromRatio", (): void => {
    it("given a ratio in the form of an array of the numerator and denominator, returns it as a monzo", (): void => {
        const actual = computeMonzoFromRatio([4, 5] as Ratio)

        const expected = [2, 0, -1] as Monzo
        expect(actual).toEqual(expected)
    })

    it("works for 1/1", (): void => {
        const actual = computeMonzoFromRatio([1, 1] as Ratio)

        const expected = [] as Monzo
        expect(actual).toEqual(expected)
    })

    it("works for ratios where the numerator is 1", (): void => {
        const actual = computeMonzoFromRatio([1, 5] as Ratio)

        const expected = [0, 0, -1] as Monzo
        expect(actual).toEqual(expected)
    })

    it("works for ratios where the denominator is 1", (): void => {
        const actual = computeMonzoFromRatio([5, 1] as Ratio)

        const expected = [0, 0, 1] as Monzo
        expect(actual).toEqual(expected)
    })
})
