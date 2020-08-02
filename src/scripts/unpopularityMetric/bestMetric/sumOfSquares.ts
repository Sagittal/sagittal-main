import { Count, doOnNextEventLoop, isUndefined } from "../../../general"
import { DebugTarget, saveDebugMessage } from "../debug"
import { bestMetricsForChunkCount } from "../globals"
import { Chunk } from "../solver"
import { computeSumOfSquaresForSubmetrics } from "../sumOfSquares"
import { SUM_OF_SQUARES_TO_BEAT } from "./constants"
import { computeMetricName } from "./metricName"
import { Sample } from "./scopeToSamples"
import { setSumOfSquaresAtSamplePoint } from "./setSumOfSquaresAtSamplePoint"
import { SumOfSquares, SumsOfSquares } from "./types"

const computeSumOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect = (sample: Sample, chunkCount: Count<Chunk>, indentation: string, sumsOfSquares: SumsOfSquares, index: number, onlyWinners: boolean): Promise<void> => {
    return doOnNextEventLoop(() => {
        const { submetrics, samplePoint } = sample

        let sumOfSquares
        try {
            sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)
        } catch (e) {
            saveDebugMessage(`error when computing sum of squares: ${e.message}`, DebugTarget.ERRORS)
        }

        setSumOfSquaresAtSamplePoint(sumOfSquares, sumsOfSquares, samplePoint)

        const metricName = computeMetricName(submetrics)
        if (
            !isUndefined(sumOfSquares) &&
            (
                !onlyWinners ||
                sumOfSquares <= SUM_OF_SQUARES_TO_BEAT
            ) &&
            (
                isUndefined(bestMetricsForChunkCount[ chunkCount ]) ||
                isUndefined(bestMetricsForChunkCount[ chunkCount ][ metricName ]) ||
                isUndefined(bestMetricsForChunkCount[ chunkCount ][ metricName ].sumOfSquares) ||
                sumOfSquares < (bestMetricsForChunkCount[ chunkCount ][ metricName ].sumOfSquares as SumOfSquares)
            )
        ) {
            bestMetricsForChunkCount[ chunkCount ] = bestMetricsForChunkCount[ chunkCount ] || {}
            bestMetricsForChunkCount[ chunkCount ][ metricName ] = { sumOfSquares, submetrics }
            if (sumOfSquares === 0) {
                computeSumOfSquaresForSubmetrics(submetrics)
                throw new Error("This sum-of-squares was 0. That's extremely unlikely and probably means there's a bug in the code and that to continue searching now would be a waste of time.")
            }

            saveDebugMessage(`${indentation}new best metric for chunk count ${chunkCount}: ${JSON.stringify(bestMetricsForChunkCount[ chunkCount ])}`, DebugTarget.NEW_BEST_METRIC)
        }
    }, index)
}

export {
    computeSumOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect,
}
