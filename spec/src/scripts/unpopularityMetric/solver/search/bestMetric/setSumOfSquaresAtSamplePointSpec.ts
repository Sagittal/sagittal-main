import { setSumOfSquaresAtSamplePoint } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/setSumOfSquaresAtSamplePoint"
import { SumOfSquares, SumsOfSquares } from "../../../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"
import { SamplePoint } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples/types"

describe("setSumOfSquaresAtPoint", () => {
    it("saves the sum of squares at the sample point", () => {
        const sumsOfSquares: SumsOfSquares = []
        const sumOfSquares: SumOfSquares = 0.0045843033 as SumOfSquares
        const samplePoint = [2, 0, 3] as SamplePoint

        setSumOfSquaresAtSamplePoint(sumOfSquares, sumsOfSquares, samplePoint)

        const expectedSumsOfSquares = [
            undefined,
            undefined,
            [
                [undefined, undefined, undefined, sumOfSquares],
            ],
        ]
        expect(sumsOfSquares).toEqual(expectedSumsOfSquares)
    })
})