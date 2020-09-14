import { Monzo } from "../../general"
import {
    DEFAULT_JI_PITCH_SCRIPT_GROUP_MAX_N2D3P9,
    DEFAULT_MAX_AAS,
    DEFAULT_MAX_ATE,
    DEFAULT_MAX_CENTS,
    DEFAULT_MIN_CENTS,
    DEFAULT_SORT_KEY,
} from "../../sagittal"
import { JiPitchScriptGroupSettings } from "./types"

const INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS: JiPitchScriptGroupSettings = {
    minCents: DEFAULT_MIN_CENTS,
    maxCents: DEFAULT_MAX_CENTS,
    maxAte: DEFAULT_MAX_ATE,
    maxAas: DEFAULT_MAX_AAS,
    maxN2D3P9: DEFAULT_JI_PITCH_SCRIPT_GROUP_MAX_N2D3P9,
    sortKey: DEFAULT_SORT_KEY,
    commaNameOptions: {},
}

const TWO_THREE_FREE_MONZO_BASE = [0, 0] as Monzo<{ rough: 5 }>

export {
    INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS,
    TWO_THREE_FREE_MONZO_BASE,
}
