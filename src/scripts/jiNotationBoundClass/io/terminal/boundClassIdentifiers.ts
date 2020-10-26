import {computeCentsFromPitch, isUndefined} from "../../../../general"
import {
    Ascii,
    CommaClassId,
    computeSagittalAscii,
    getCommaClass,
    getMinaName,
    getRepresentativeSagittal,
    JiNotationBoundClassEntry,
    JiNotationLevel,
} from "../../../../sagittal"
import {computeBoundedCommaClassInfoPairs} from "./boundedCommaClassInfoPairs"
import {BOUNDED_COMMA_CLASS_ID_PAIRS} from "./levelBoundedCommaClasses"
import {BoundedCommaClassIdPairs, BoundedCommaClassInfoPairs, JiNotationBoundClassIdentifiers} from "./types"

const extractJiNotationBoundClassIdentifiers = (
    [boundClassId, {pitch}]: JiNotationBoundClassEntry,
): JiNotationBoundClassIdentifiers => {
    const boundedCommaClassIdPair = BOUNDED_COMMA_CLASS_ID_PAIRS.find(
        (boundedCommaClassIdPairs: BoundedCommaClassIdPairs): boolean => {
            return boundedCommaClassIdPairs.boundClassId === boundClassId
        })
    if (!boundedCommaClassIdPair) throw new Error(`Could not find bounded comma class ID pair for bound with ID ${boundClassId}`)

    const boundedCommaClassInfoPairs: BoundedCommaClassInfoPairs =
        computeBoundedCommaClassInfoPairs(boundedCommaClassIdPair)

    const [extremeLevelLesserBoundedCommaClassId, extremeLevelGreaterBoundedCommaClassId] =
        boundedCommaClassIdPair[JiNotationLevel.EXTREME]

    const extremeLevelLesserBoundedCommaClass = !isUndefined(extremeLevelLesserBoundedCommaClassId) &&
        getCommaClass(extremeLevelLesserBoundedCommaClassId)
    const formattedExtremeLevelLesserBoundedCommaClass = extremeLevelLesserBoundedCommaClass ?
        computeSagittalAscii(getRepresentativeSagittal(extremeLevelLesserBoundedCommaClassId as CommaClassId)) :
        "" as Ascii
    const lesserBoundedMinaName = extremeLevelLesserBoundedCommaClass ?
        getMinaName(extremeLevelLesserBoundedCommaClassId as CommaClassId) :
        undefined

    const extremeLevelGreaterBoundedCommaClass = !isUndefined(extremeLevelGreaterBoundedCommaClassId) &&
        getCommaClass(extremeLevelGreaterBoundedCommaClassId)
    const formattedExtremeLevelGreaterBoundedCommaClass = extremeLevelGreaterBoundedCommaClass ?
        computeSagittalAscii(getRepresentativeSagittal(extremeLevelGreaterBoundedCommaClassId as CommaClassId)) :
        "" as Ascii
    const greaterBoundedMinaName = extremeLevelGreaterBoundedCommaClass ?
        getMinaName(extremeLevelGreaterBoundedCommaClassId as CommaClassId) :
        undefined

    return {
        extremeLevelLesserBoundedCommaClass: formattedExtremeLevelLesserBoundedCommaClass,
        extremeLevelGreaterBoundedCommaClass: formattedExtremeLevelGreaterBoundedCommaClass,
        cents: computeCentsFromPitch(pitch),
        boundedCommaClassInfoPairs,
        lesserBoundedMinaName,
        greaterBoundedMinaName,
    }
}

export {
    extractJiNotationBoundClassIdentifiers,
}
