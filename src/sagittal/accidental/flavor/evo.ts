import {increment, Maybe, negative} from "../../../general"
import {CaptureZone} from "../../notations"
import {getFlacco} from "../flacco"
import {computeApotomeComplement, computeSagittalFromFlacco, flipSagittal, Shafts} from "../symbol"
import {getSymbolClass} from "../symbolClass"
import {Accidental, Compatible, Flavor} from "./types"

const computeEvoAccidentalFromCaptureZone = (captureZone: CaptureZone): Accidental<Flavor.EVO> => {
    const { symbolClassId, section: { negated, mirrored, shifted } } = captureZone

    const symbolClass = getSymbolClass(symbolClassId)
    const flacco = getFlacco(symbolClass.flaccoId)
    let sagittal = computeSagittalFromFlacco(flacco)

    let apotomeCount = 0
    if (mirrored) {
        const apotomeComplement = computeApotomeComplement(sagittal)
        if (apotomeComplement.core?.shafts === Shafts.DOUBLE) {
            sagittal = flipSagittal(sagittal)
            apotomeCount = increment(apotomeCount)
        } else {
            sagittal = apotomeComplement
        }
    }
    if (shifted) apotomeCount = increment(apotomeCount)
    if (negated) apotomeCount = negative(apotomeCount)
    const compatible: Maybe<Compatible> =
        apotomeCount === 1 ?
            Compatible.SHARP :
            apotomeCount === 2 ?
                Compatible.DOUBLE_SHARP :
                apotomeCount === -1 ?
                    Compatible.FLAT :
                    apotomeCount === -2 ?
                        Compatible.DOUBLE_FLAT :
                        undefined

    return {...sagittal, compatible} as Accidental<Flavor.EVO>
}

export {
    computeEvoAccidentalFromCaptureZone,
}