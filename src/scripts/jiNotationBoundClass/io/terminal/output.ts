import {concat, Io} from "../../../../general"
import {JiNotationBoundClassAnalysis} from "../../boundClass"
import {computeJiNotationBoundClassAnalysesOutput} from "./boundClasses"
import {formatJiNotationLevelAnalyses} from "./level"
import {formatRankAnalyses} from "./rank"

const computeJiNotationBoundsOutput = (jiNotationBoundClassAnalyses: JiNotationBoundClassAnalysis[]): Io => {
    let output: Io = computeJiNotationBoundClassAnalysesOutput(jiNotationBoundClassAnalyses)
    output = concat(output, formatJiNotationLevelAnalyses())
    output = concat(output, formatRankAnalyses())

    return output
}

export {
    computeJiNotationBoundsOutput,
}
