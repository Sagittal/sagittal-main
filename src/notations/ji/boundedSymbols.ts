import { LEVELS_SYMBOLS } from "./levelsSymbols"
import { computeNeighborPositionIndices } from "./neighborPositionIndices"
import { Cents } from "../../utilities/types"
import { Level } from "./types"

const computeBoundedSymbols = (position: Cents, level: Level) => {
    const levelSymbols = LEVELS_SYMBOLS[ level ]

    const levelSymbolPositions = levelSymbols.map(levelSymbol => levelSymbol.primaryComma.position)

    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] = computeNeighborPositionIndices(position, levelSymbolPositions)

    return [
        levelSymbols[ lesserNeighborPositionIndex ] ? levelSymbols[ lesserNeighborPositionIndex ].ascii : "",
        levelSymbols[ greaterNeighborPositionIndex ] ? levelSymbols[ greaterNeighborPositionIndex ].ascii : "",
    ]
}

export {
    computeBoundedSymbols,
}