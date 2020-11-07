import {count, LogTarget, Min, saveLog, Score, stringify, Sum} from "../../general"
import {computeMetricScoreForMetricAndParameterSet} from "./metricScore"
import {computeComplexityParameterSets} from "./parameters"
import {ComplexityMetric, ComplexityMetricFamilyId, ComplexityParameterId, ComplexityParameterSet} from "./types"

// TODO: complexity - probably acceptable to eliminate this "ties" functionality as it is unlikely to ever tie
//  Though in its place won't you want essentially the local minima functionality?
//  Well actually we did get 11 ties for one of the metrics, but I still think local minima would be better now

const logComplexityParameterSetsForComplexityMetricFamilyWhichMinimizeItsScore = (
    [
        complexityMetricFamilyId,
        {metric, parameters},
    ]: [ComplexityMetricFamilyId, {metric: ComplexityMetric, parameters: ComplexityParameterId[]}],
): void => {
    saveLog(`\nRUNNING FOR COMPLEXITY METRIC FAMILY ${complexityMetricFamilyId}`, LogTarget.PROGRESS)

    const complexityParameterSets = computeComplexityParameterSets(parameters)
    const countComplexityParameterSetsForComplexityMetricFamily = count(complexityParameterSets)

    let minMetricScore = Infinity as Min<Sum<Score<ComplexityMetric>>>
    let complexityParameterSetsForComplexityMetricFamilyWhichMinimizeItsScore = [] as ComplexityParameterSet[]

    complexityParameterSets.forEach((complexityParameterSet: ComplexityParameterSet, index: number): void => {
        const metricScore = computeMetricScoreForMetricAndParameterSet(metric, complexityParameterSet)

        if (metricScore === minMetricScore) {
            complexityParameterSetsForComplexityMetricFamilyWhichMinimizeItsScore.push(complexityParameterSet)
        } else if (metricScore < minMetricScore) {
            minMetricScore = metricScore as Min<Sum<Score<ComplexityMetric>>>
            complexityParameterSetsForComplexityMetricFamilyWhichMinimizeItsScore = [complexityParameterSet]
        }

        saveLog(`Complexity parameter set (${index + 1}/${countComplexityParameterSetsForComplexityMetricFamily}): ${stringify(complexityParameterSet)} -> metric score ${metricScore}`, LogTarget.PROGRESS)
    })

    saveLog(`Complexity parameter sets for complexity metric family ${complexityMetricFamilyId} which minimize its metric score, all bringing it to ${minMetricScore} (count of ties ${count(complexityParameterSetsForComplexityMetricFamilyWhichMinimizeItsScore)}): ${stringify(complexityParameterSetsForComplexityMetricFamilyWhichMinimizeItsScore)}`, LogTarget.FINAL)
}

export {
    logComplexityParameterSetsForComplexityMetricFamilyWhichMinimizeItsScore,
}
