import { Ratio } from "../../../../src/general"
import { computeMonzoFromRatio, Monzo } from "../../../../src/general/music"

describe("monzoFromRatio", () => {
    it("given a ratio in the form of an array of the numerator and denominator, returns it as a monzo", () => {
        const result = computeMonzoFromRatio([4, 5] as Ratio)

        expect(result).toEqual([2, 0, -1] as Monzo)
    })

    it("works for 1/1", () => {
        const result = computeMonzoFromRatio([1, 1] as Ratio)

        expect(result).toEqual([] as Monzo)
    })

    it("works for ratios where the numerator is 1", () => {
        const result = computeMonzoFromRatio([1, 5] as Ratio)

        expect(result).toEqual([0, 0, -1] as Monzo)
    })

    it("works for ratios where the denominator is 1", () => {
        const result = computeMonzoFromRatio([5, 1] as Ratio)

        expect(result).toEqual([0, 0, 1] as Monzo)
    })
})