import { Combination, Filename, formatRatio, Io, LogTarget, Ratio, saveLog, stringify } from "../../../general"
import { LFC_SCRIPT_GROUP } from "../constants"
import { computeAntivotes, Submetric } from "../sumOfSquares"
import { applySharedLfcCommandSetup, load } from "./shared"

applySharedLfcCommandSetup({ defaultLogTargets: [LogTarget.ANTIVOTES] })

const submetrics = load("submetrics" as Filename) as Combination<Submetric>

const fiveRoughRatio: Ratio = [11, 7] as Ratio

const antivotes = computeAntivotes(fiveRoughRatio, submetrics)

saveLog(
    `${formatRatio(fiveRoughRatio)}\n${stringify(submetrics)}\n${antivotes}` as Io,
    LogTarget.ANTIVOTES,
    LFC_SCRIPT_GROUP,
)