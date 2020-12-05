import {Comma, sort} from "../../../general"
import {analyzeComma, CommaAnalysis} from "../../../sagittal"
import {jiPitchScriptGroupSettings} from "../globals"
import {findCommas} from "./commas"
import {FindCommasOptions} from "./types"

const findCommaAnalyses = (findCommasOptions: Partial<FindCommasOptions> = {}): CommaAnalysis[] => {
    const commas = findCommas({...jiPitchScriptGroupSettings, ...findCommasOptions})

    const commaAnalyses = commas.map((comma: Comma): CommaAnalysis => {
        return analyzeComma(comma, jiPitchScriptGroupSettings.commaNameOptions)
    })

    if (jiPitchScriptGroupSettings.sortBy) {
        sort(commaAnalyses, {by: jiPitchScriptGroupSettings.sortBy})
    }

    return commaAnalyses
}

export {
    findCommaAnalyses,
}
