import { ParameterValue } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares"
import { Resolution, Span } from "../../../../../../src/general"
import { computeDynamicParameterScope } from "../../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples/dynamicParameterScope"

describe("computeDynamicParameterScope", () => {
    const expectedDynamicParameterScope = {
        center: -1 as ParameterValue,
        span: 2 as Span<ParameterValue>,
        resolution: 20 as Resolution<ParameterValue>,
    }

    it("given a min and a max computes a dynamic parameter scope with the correct center, span, and resolution", () => {
        const min = -2 as ParameterValue
        const max = 0 as ParameterValue

        const result = computeDynamicParameterScope({ min, max })

        expect(result).toEqual(expectedDynamicParameterScope)
    })

    it("given a center and a span computes a dynamic parameter scope with the correct center, span, and resolution", () => {
        const center = -1 as ParameterValue
        const span = 2 as Span<ParameterValue>

        const result = computeDynamicParameterScope({ center, span })

        expect(result).toEqual(expectedDynamicParameterScope)
    })

    it("given a min and a span computes a dynamic parameter scope with the correct center, span, and resolution", () => {
        const min = -2 as ParameterValue
        const span = 2 as Span<ParameterValue>

        const result = computeDynamicParameterScope({ min, span })

        expect(result).toEqual(expectedDynamicParameterScope)
    })

    it("given a max and a span computes a dynamic parameter scope with the correct center, span, and resolution", () => {
        const max = 0 as ParameterValue
        const span = 2 as Span<ParameterValue>

        const result = computeDynamicParameterScope({ max, span })

        expect(result).toEqual(expectedDynamicParameterScope)
    })

    it("given a min and a center computes a dynamic parameter scope with the correct center, span, and resolution", () => {
        const min = -2 as ParameterValue
        const center = -1 as ParameterValue

        const result = computeDynamicParameterScope({ min, center })

        expect(result).toEqual(expectedDynamicParameterScope)
    })

    it("given a max and a center computes a dynamic parameter scope with the correct center, span, and resolution", () => {
        const max = 0 as ParameterValue
        const center = -1 as ParameterValue

        const result = computeDynamicParameterScope({ max, center })

        expect(result).toEqual(expectedDynamicParameterScope)
    })

    it("given only a min, errors", () => {
        const min = -2 as ParameterValue

        expect(() => computeDynamicParameterScope({ min })).toThrowError("Exactly 2 options should be provided from min, max, center, and span in order to compute a dynamic parameter scope; 1 provided (min -2)")
    })

    it("given only a max, errors", () => {
        const max = 0 as ParameterValue

        expect(() => computeDynamicParameterScope({ max })).toThrowError("Exactly 2 options should be provided from min, max, center, and span in order to compute a dynamic parameter scope; 1 provided (max 0)")
    })

    it("given only a max, errors", () => {
        const span = 2 as Span<ParameterValue>

        expect(() => computeDynamicParameterScope({ span })).toThrowError("Exactly 2 options should be provided from min, max, center, and span in order to compute a dynamic parameter scope; 1 provided (span 2)")
    })

    it("given only a max, errors", () => {
        const center = -1 as ParameterValue

        expect(() => computeDynamicParameterScope({ center })).toThrowError("Exactly 2 options should be provided from min, max, center, and span in order to compute a dynamic parameter scope; 1 provided (center -1)")
    })

    it("given more than two options, errors", () => {
        const min = -2 as ParameterValue
        const max = 0 as ParameterValue
        const center = -1 as ParameterValue
        const span = 2 as Span<ParameterValue>

        expect(() => computeDynamicParameterScope({ min, max, center, span })).toThrowError("Exactly 2 options should be provided from min, max, center, and span in order to compute a dynamic parameter scope; 4 provided (min -2, max 0, center -1, span 2)")
    })
})