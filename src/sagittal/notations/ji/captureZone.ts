import { Id, ioSettings, Max, Maybe, Min, Num, numIsHigher, Zone } from "../../../general"
import { formatSymbolClass } from "../../io"
import { getPrimaryComma } from "../primaryComma"
import { PrimaryComma, SymbolClass } from "../types"
import { ABSOLUTE_LOWEST_BOUND } from "./constants"
import { formatJiNotationLevel } from "./formatLevel"
import { getIntroducingJiNotationLevel } from "./introducingJiNotationLevel"
import { isWithinJiNotationLevel } from "./isWithinLevel"
import { JI_NOTATION_LEVELS_BOUNDS } from "./levelsBounds"
import { JiNotationBound, JiNotationLevel } from "./types"

const computeCaptureZone = (
    symbolClassId: Id<SymbolClass>,
    jiNotationLevel: JiNotationLevel = JiNotationLevel.EXTREME,
): Maybe<Zone> => {
    const jiNotationLevelBounds = JI_NOTATION_LEVELS_BOUNDS[ jiNotationLevel ]

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(symbolClassId)
    if (!isWithinJiNotationLevel(introducingJiNotationLevel, jiNotationLevel)) {
        throw new Error(`JI Notation symbol class ${formatSymbolClass(symbolClassId, {
            ...ioSettings,
            align: false,
        })} is not present at the ${formatJiNotationLevel(jiNotationLevel)} JI notation level; it is not introduced until the ${formatJiNotationLevel(introducingJiNotationLevel)} JI notation level.`)
    }

    const primaryComma = getPrimaryComma(symbolClassId)

    const indexOfBoundJustAboveSymbolAtThisLevel = jiNotationLevelBounds
        .findIndex((jiNotationBound: JiNotationBound): boolean => {
            return numIsHigher(jiNotationBound, primaryComma)
        })
    const indexOfJiNotationBoundJustBelowSymbolClassAtThisLevel = indexOfBoundJustAboveSymbolAtThisLevel - 1

    const lowerBound =
        jiNotationLevelBounds[ indexOfJiNotationBoundJustBelowSymbolClassAtThisLevel ] as Num as Min<Num>
        || ABSOLUTE_LOWEST_BOUND // TODO: can probably improve this somehow
    const upperBound =
        jiNotationLevelBounds[ indexOfBoundJustAboveSymbolAtThisLevel ] as Num as Max<Num>

    return [lowerBound, upperBound] as Zone<PrimaryComma>
}

export {
    computeCaptureZone,
}
