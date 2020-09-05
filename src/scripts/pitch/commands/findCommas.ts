import { program } from "commander"
import { CommandFlag, LogTarget, Max, Prime, saveLog } from "../../../general"
import {
    addMaybeJiSymbol,
    DEFAULT_MAX_FIVE_ROUGH_COPFR,
    DEFAULT_MAX_FIVE_ROUGH_SOPFR,
    DEFAULT_MAX_PRIME_LIMIT,
} from "../../../sagittal"
import { computeCommas } from "../commas"
import { PITCH_SCRIPT_GROUP } from "../constants"
import { pitchScriptGroupSettings } from "../globals"
import { computeFindCommasTable } from "../io"
import { applySharedPitchCommandSetup } from "./shared"

program
    .option(
        `-${CommandFlag.PRIME_LIMIT}, --max-prime-limit <maxPrimeLimit>`,
        "max prime limit",
        parseInt,
    )
    .option(
        `-${CommandFlag.FIVE_ROUGH_SOPFR}, --max-five-rough-sopfr <maxFiveRoughSopfr>`,
        "max 5-rough sopfr",
        parseInt,
    )
    .option(
        `-${CommandFlag.FIVE_ROUGH_COPFR}, --max-five-rough-copfr <maxFiveRoughCopfr>`,
        "max 5-rough copfr",
        parseInt,
    )

applySharedPitchCommandSetup()

const maxFiveRoughSopfr = program.maxFiveRoughSopfr || DEFAULT_MAX_FIVE_ROUGH_SOPFR
const maxFiveRoughCopfr = program.maxFiveRoughCopfr || DEFAULT_MAX_FIVE_ROUGH_COPFR
const maxPrimeLimit: Max<Max<Prime>> = program.maxPrimeLimit || DEFAULT_MAX_PRIME_LIMIT

const commas = computeCommas({
    ...pitchScriptGroupSettings,
    maxFiveRoughCopfr,
    maxFiveRoughSopfr,
    maxPrimeLimit,
})

const commasWithMaybeSymbols = commas.map(addMaybeJiSymbol)

saveLog(computeFindCommasTable(commasWithMaybeSymbols), LogTarget.ALL, PITCH_SCRIPT_GROUP)
