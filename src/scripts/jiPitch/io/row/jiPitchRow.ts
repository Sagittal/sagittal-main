import { formatInteger, formatMonzo, formatNumber, formatRatio, Formatted, Row } from "../../../../general"
import { JiPitchAnalysis } from "../../../../sagittal"
import { jiPitchScriptGroupSettings } from "../../globals"
import { JiPitchField } from "../../types"

const computeJiPitchRow = (jiPitchAnalysis: JiPitchAnalysis): Row<{ of: JiPitchAnalysis }> => {
    const { cents, monzo, ratio, apotomeSlope, aas, ate } = jiPitchAnalysis

    const rows = [] as unknown[] as Row<{ of: JiPitchAnalysis }>

    if (!jiPitchScriptGroupSettings.excludedFields.includes(JiPitchField.RATIO)) {
        rows.push(formatRatio(ratio) as Formatted as Formatted<JiPitchAnalysis>)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(JiPitchField.MONZO)) {
        rows.push(formatMonzo(monzo) as Formatted as Formatted<JiPitchAnalysis>)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(JiPitchField.CENTS)) {
        rows.push(formatNumber(cents) as Formatted as Formatted<JiPitchAnalysis>)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(JiPitchField.APOTOME_SLOPE)) {
        rows.push(formatNumber(apotomeSlope) as Formatted as Formatted<JiPitchAnalysis>)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(JiPitchField.AAS)) {
        rows.push(formatNumber(aas) as Formatted as Formatted<JiPitchAnalysis>)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(JiPitchField.ATE)) {
        rows.push(formatInteger(ate) as Formatted as Formatted<JiPitchAnalysis>)
    }
    
    return rows 
}

export {
    computeJiPitchRow,
}
