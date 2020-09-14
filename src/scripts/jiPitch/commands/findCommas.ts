import { addTexts, Comma, LogTarget, NEWLINE, saveLog, sort } from "../../../general"
import { addMaybeJiSymbol, analyzeComma, CommaAnalysis } from "../../../sagittal"
import { computeCommas } from "../commas"
import { jiPitchScriptGroupSettings } from "../globals"
import {
    computeFindCommasTable,
    format23FreeClassSettings,
    formatSettings,
    parse23FreeClassSettings,
    readTwoThreeFreeClassOptions,
} from "../io"
import { applySharedPitchCommandSetup } from "./shared"

readTwoThreeFreeClassOptions()

applySharedPitchCommandSetup()

const twoThreeFreeClassSettings = parse23FreeClassSettings()

const commas = computeCommas({ ...jiPitchScriptGroupSettings, ...twoThreeFreeClassSettings })

const commasWithMaybeSymbols = commas.map(addMaybeJiSymbol)
const commaAnalyses = commasWithMaybeSymbols.map((comma: Comma): CommaAnalysis => {
    return analyzeComma(comma, jiPitchScriptGroupSettings.commaNameOptions)
})
if (jiPitchScriptGroupSettings.sortKey) {
    sort(commaAnalyses, { by: jiPitchScriptGroupSettings.sortKey })
}

saveLog(formatSettings(), LogTarget.ALL)
saveLog(addTexts(format23FreeClassSettings(twoThreeFreeClassSettings), NEWLINE), LogTarget.ALL)

saveLog(computeFindCommasTable(commaAnalyses), LogTarget.ALL)