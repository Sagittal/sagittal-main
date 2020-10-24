import {
    computeAccidentalAscii,
    computeAccidentalSmiley,
    computeAccidentalUnicode,
} from "../../../../../src/sagittal/accidental"
import {computeEvoAccidentalFromCaptureZone} from "../../../../../src/sagittal/accidental/flavor/evo"
import {computeRevoAccidentalFromCaptureZone} from "../../../../../src/sagittal/accidental/flavor/revo"
import {CaptureZone} from "../../../../../src/sagittal/notations"
import {AccidentalExpectation} from "./types"

const computeAccidentalExpectation = (captureZone: CaptureZone): AccidentalExpectation => {
    const evoAccidental = computeEvoAccidentalFromCaptureZone(captureZone)
    const evo = {
        unicode: computeAccidentalUnicode(evoAccidental),
        ascii: computeAccidentalAscii(evoAccidental),
        smiley: computeAccidentalSmiley(evoAccidental),
    }

    const revoAccidental = computeRevoAccidentalFromCaptureZone(captureZone)
    const revo = {
        unicode: computeAccidentalUnicode(revoAccidental),
        ascii: computeAccidentalAscii(revoAccidental),
        smiley: computeAccidentalSmiley(revoAccidental),
    }

    return {
        // Todo: BLOCKED ON FLACOMBO, SECTION, NOTATION GENERATION (JUST TESTING)
        //  I think we could put the captureZone on here, and/or the Section
        evo,
        revo,
    }
}

export {
    computeAccidentalExpectation,
}
