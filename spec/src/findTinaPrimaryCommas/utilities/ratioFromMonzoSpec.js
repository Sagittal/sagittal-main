const {computeRatioFromMonzo} = require("../../../../src/findTinaPrimaryCommas/utilities/ratioFromMonzo")

describe("ratioFromMonzo", () => {
    it("converts a monzo into a two-element array representning the numerator and denominator", () => {
        const monzo = [-4, 9, -2, -2]

        const result = computeRatioFromMonzo(monzo)

        expect(result).toEqual([19683, 19600])
    })
})