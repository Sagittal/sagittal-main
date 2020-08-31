import { doOnNextEventLoop, Integer, Io, LogTarget, Ms, saveLog } from "../../../general"
import { Scope } from "../bestMetric"
import { LFC_SCRIPT_GROUP } from "../constants"
import { computeNextScope } from "./nextScope"
import { recursiveSearchScopeAndMaybeUpdateBestMetric } from "./recursiveBestMetric"
import { LocalMin, MetricTag, SearchLocalMinOptions } from "./types"

const searchNextLocalMin = (nextLocalMin: LocalMin, options: SearchLocalMinOptions): Promise<void> => {
    const {
        dynamicParameters,
        scope,
        metricTag,
        index,
        indentation,
        depth,
        nextLocalMinima,
        onlyWinners,
    } = options

    const nextDepth = depth + 1 as Integer
    const nextScope: Scope = computeNextScope(nextLocalMin.samplePoint, dynamicParameters, scope)
    const nextMetricTag = metricTag + `.${index + 1}/${(nextLocalMinima.length)}` as MetricTag
    saveLog(`  ${indentation}id ${nextMetricTag} - depth ${nextDepth}` as Io, LogTarget.PERFECT, LFC_SCRIPT_GROUP)

    return doOnNextEventLoop(async () => {
        try {
            await recursiveSearchScopeAndMaybeUpdateBestMetric(nextScope, {
                depth: nextDepth,
                metricTag: nextMetricTag,
                localMin: nextLocalMin,
                onlyWinners,
            })
        } catch (e) {
            saveLog(`error when searching: ${e.message}` as Io, LogTarget.ERRORS, LFC_SCRIPT_GROUP)
        }
    }, index as Ms)
}

export {
    searchNextLocalMin,
}