import { Metric } from "../../../../../src/scripts/lfc/bestMetric"
import * as bestMetrics from "../../../../../src/scripts/lfc/results/bestMetrics"
import { computeSumOfSquaresForSubmetrics } from "../../../../../src/scripts/lfc/sumOfSquares"

describe("best metrics", () => {
    it("verifies all of the best metrics", () => {
        const bestMetricsEntries: Array<[string, Metric]> = Object.entries(bestMetrics) as Array<[string, Metric]>

        bestMetricsEntries.forEach(([bestMetricName, bestMetric]) => {
            const sumOfSquares = computeSumOfSquaresForSubmetrics(bestMetric.submetrics)
            expect(bestMetric.sumOfSquares).toBe(sumOfSquares, `${bestMetricName} failed, has SoS ${bestMetric.sumOfSquares} but just computed ${sumOfSquares}`)
        })
    })
})