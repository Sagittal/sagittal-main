import { Monzo } from "../../../general"
import {
    DEFAULT_MAX_AAS, 
    DEFAULT_MAX_ATE,
    DEFAULT_MAX_CENTS,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_MAX_PRIME_LIMIT,
    DEFAULT_MAX_TWO_THREE_FREE_COPFR,
    DEFAULT_MAX_TWO_THREE_FREE_SOPFR, 
    DEFAULT_MIN_CENTS,
} from "../../../sagittal"

const DEFAULT_FIND_COMMAS_SETTINGS = {
    max23FreeSopfr: DEFAULT_MAX_TWO_THREE_FREE_SOPFR,
    max23FreeCopfr: DEFAULT_MAX_TWO_THREE_FREE_COPFR,
    maxPrimeLimit: DEFAULT_MAX_PRIME_LIMIT,
    maxN2D3P9: DEFAULT_MAX_N2D3P9,
    minCents: DEFAULT_MIN_CENTS,
    maxCents: DEFAULT_MAX_CENTS,
    maxAas: DEFAULT_MAX_AAS,
    maxAte: DEFAULT_MAX_ATE,
}

const TWO_THREE_FREE_MONZO_BASE = [0, 0] as Monzo<{ rough: 5 }>

export {
    DEFAULT_FIND_COMMAS_SETTINGS,
    TWO_THREE_FREE_MONZO_BASE,
}
