import { computeCentsFromPitch, Maybe, Zone } from "../../../general"
import { getSagittalComma } from "../getSagittalComma"
import { SagittalComma } from "../types"
import { formatLevel } from "./formatLevel"
import { isWithinLevel } from "./isWithinLevel"
import { LEVELS_BOUNDS } from "./levelsBounds"
import { Bound, JiSymbol, Level } from "./types"

const computeCaptureZone = (jiSymbol: JiSymbol, level: Level): Maybe<Zone> => {
    const levelBounds = LEVELS_BOUNDS[ level ]

    if (!isWithinLevel(jiSymbol.introducingLevel, level)) {
        throw new Error(`Symbol ${jiSymbol.ascii} is not present at the ${formatLevel(level)} level; it is not introduced until the ${formatLevel(jiSymbol.introducingLevel)} level.`)
    }

    const primaryComma = getSagittalComma(jiSymbol.primaryCommaId)

    const indexOfBoundJustAboveSymbolAtThisLevel = levelBounds.findIndex((bound: Bound): boolean => {
        return bound.cents > computeCentsFromPitch(primaryComma)
    })
    const indexOfBoundJustBelowSymbolAtThisLevel = indexOfBoundJustAboveSymbolAtThisLevel - 1

    const minCents = levelBounds[ indexOfBoundJustBelowSymbolAtThisLevel ]?.cents || 0
    const maxCents = levelBounds[ indexOfBoundJustAboveSymbolAtThisLevel ].cents

    return [minCents, maxCents] as Zone<SagittalComma>
}

export {
    computeCaptureZone,
}
