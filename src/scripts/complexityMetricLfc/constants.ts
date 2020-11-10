import {Comma, Ed, Parameter} from "../../general"
import {CommaClassId} from "../../sagittal"
import {ComplexityMetricLfcScriptGroupSettings} from "./types"

const INITIAL_COMPLEXITY_METRIC_LFC_SCRIPT_GROUP_SETTINGS: ComplexityMetricLfcScriptGroupSettings = {
    zoneCommaEntries: [] as Array<[CommaClassId, Comma[]]>,
    sosMode: false,
    complexitySearchEd: 11 as Ed<Parameter>,
}

const EXCLUDED_COMMAS: CommaClassId[] = [
    CommaClassId._11_P_4_k,
    CommaClassId._19_V_5_P_4_7_s,
]

const DEFAULT_COMPLEXITY_PARAMETER_VALUE = 1 as Parameter

export {
    INITIAL_COMPLEXITY_METRIC_LFC_SCRIPT_GROUP_SETTINGS,
    EXCLUDED_COMMAS,
    DEFAULT_COMPLEXITY_PARAMETER_VALUE,
}
