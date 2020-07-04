const {computeRatioSubmetricAntivotes} = require("../../../../../src/scripts/unpopularityMetric/antivotes/ratioSubmetricAntivotes")
const {computeSubmetricAntivotes} = require("../../../../../src/scripts/unpopularityMetric/antivotes/submetricAntivotes")

describe("computeRatioSubmetricAntivotes", () => {
    it("splits the ratio into numerator and denominator, computes their submetric antivotes separately, then adjusts the diminuator (the lesser of the two) by k", () => {
        const k = 0.46
        const fiveRoughRatio = [11, 7]
        const submetric = {k}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 0, 1], submetric) +
            k * computeSubmetricAntivotes([0, 0, 0, 1], submetric)
        )
    })

    it("works when the input ratio's denominator will be the numinator (the greater of the two)", () => {
        const k = 0.46
        const fiveRoughRatio = [25, 11] // 10:11
        const submetric = {k}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 0, 1], submetric) +
            k * computeSubmetricAntivotes([0, 0, 2], submetric)
        )
    })

    it("defaults k and j to 1", () => {
        const fiveRoughRatio = [5, 7]
        const submetric = {}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1, -1], submetric)
        )
    })

    it("supports deciding the numinator and diminuator by the input numerator and denominator", () => {
        const k = 0.46
        const fiveRoughRatio = [25, 11] // 10:11
        const numeratorIsNuminator = 1
        const submetric = {k, numeratorIsNuminator}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 2], submetric) +
            k * computeSubmetricAntivotes([0, 0, 0, 0, 1], submetric)
        )
    })

    it("works when k = 0 (and j = 1) therefore it only looks at the numinator", () => {
        const k = 0
        const fiveRoughRatio = [5, 7]
        const submetric = {k}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 1], submetric)
        )
    })

    it("works when j = 0 (and k = 1) therefore it only looks at the diminuator", () => {
        const j = 0
        const fiveRoughRatio = [5, 7]
        const submetric = {j}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1, 0], submetric)
        )
    })
})