import { computeAntivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/antivotes/antivotes"
import { computeSubmetricAntivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/antivotes/submetricAntivotes"
import { Parameter, Submetric, SubmetricType } from "../../../../../../src/scripts/unpopularityMetric/types"
import { Combination, Ratio } from "../../../../../../src/utilities/types"
import { Monzo } from "../../../../../../src/utilities/comma/types"
import { Antivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"
import { DynamicParameterValue } from "../../../../../../src/scripts/unpopularityMetric/automator/samples/types"

describe("computeAntivotes", () => {
    it("when k = 1 (default), and two 5-rough ratios have the same sopfr, but one has its primes all lopsided on one side, they still get ranked the same", () => {
        const balancedFiveRoughRatio: Ratio = [11, 7] as Ratio
        const lopsidedFiveRoughRatio = [77, 1] as Ratio
        const submetrics: Combination<Submetric> = [
            {
                [ Parameter.K ]: 1 as DynamicParameterValue,
            },
        ] as Combination<Submetric>

        const balancedResult = computeAntivotes(balancedFiveRoughRatio, submetrics)
        const lopsidedResult = computeAntivotes(lopsidedFiveRoughRatio, submetrics)

        expect(balancedResult).toBe(lopsidedResult)
    })

    it("when k < 1, two 5-rough ratios have the same sopfr, but one has its primes all lopsided on one side, it gets ranked worse", () => {
        const balancedFiveRoughRatio = [11, 7] as Ratio
        const lopsidedFiveRoughRatio = [77, 1] as Ratio
        const submetrics: Combination<Submetric> = [
            {
                [ Parameter.K ]: 0.9 as DynamicParameterValue,
            },
        ] as Combination<Submetric>

        const balancedResult = computeAntivotes(balancedFiveRoughRatio, submetrics)
        const lopsidedResult = computeAntivotes(lopsidedFiveRoughRatio, submetrics)

        expect(balancedResult).toBeLessThan(lopsidedResult)
    })

    it("applies weights to each submetric", () => {
        const fiveRoughRatio = [77, 1] as Ratio
        const submetrics = [
            {
                [ Parameter.WEIGHT ]: 0.5 as DynamicParameterValue,
            },
            {
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.SOAPF,
                [ Parameter.WEIGHT ]: 0.3 as DynamicParameterValue,
            },
        ] as Combination<Submetric>

        const result = computeAntivotes(fiveRoughRatio, submetrics)

        expect(result).toBe(
            0.5 * computeSubmetricAntivotes([0, 0, 0, 1, 1] as Monzo) as Antivotes +
            0.3 * computeSubmetricAntivotes([0, 0, 0, 1, 1] as Monzo, { withRepetition: false }) as Antivotes,
        )
    })

    it("should not return NaN", () => {
        const submetrics = [
            {
                [ Parameter.WEIGHT ]: 1 as DynamicParameterValue,
                [ Parameter.K ]: 0 as DynamicParameterValue,
                [ Parameter.A ]: 2 as DynamicParameterValue,
                [ Parameter.A_IS_BASE ]: true,
                [ Parameter.W ]: -6 as DynamicParameterValue,
                // [Parameter.X]: -2 as DynamicParameterValue,
                [ Parameter.Y ]: 0.14285714285714285 as DynamicParameterValue,
                // [Parameter.V]: -0.8571428571428572 as DynamicParameterValue,
                // [Parameter.T]: -1.6142857142857143 as DynamicParameterValue,
            },
        ] as Combination<Submetric>
        const fiveRoughRatio = [5, 1] as Ratio

        const result = computeAntivotes(fiveRoughRatio, submetrics)

        expect(result).not.toBeNaN()
    })
})