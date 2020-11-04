import {Io, LogTarget, Maybe, saveLog} from "../../../general"
import {CommaAnalysis, CommaClassId, computeMaybeCommaClassId} from "../../../sagittal"
import {computeCommaAnalyses, computeFindCommasSettings} from "../findCommas"
import {computeFindCommasOutput, readFindCommasOptions} from "../io"
import {applySharedJiPitchCommandSetup} from "./shared"

readFindCommasOptions()

applySharedJiPitchCommandSetup()

const findCommasSettings = computeFindCommasSettings()
const commaAnalyses: CommaAnalysis[] = computeCommaAnalyses(findCommasSettings)
const maybeCommaClassIds: Array<Maybe<CommaClassId>> = commaAnalyses
    .map((commaAnalysis: CommaAnalysis): Maybe<CommaClassId> => {
        return computeMaybeCommaClassId(commaAnalysis.pitch)
    })
const findCommasOutput: Io = computeFindCommasOutput(commaAnalyses, maybeCommaClassIds, findCommasSettings)
saveLog(findCommasOutput, LogTarget.FINAL)
