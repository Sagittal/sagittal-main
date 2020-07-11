import { LEVELS_SIZE_CATEGORY_BOUNDS } from "../snappablePositions"
import { LEVEL_BOTTOMS, LEVEL_TOPS } from "./levelHeights"
import { computeX } from "./x"
import { DASH_SIZE } from "./sizes"
import { SIZE_COLOR } from "./colors"
import { Level } from "../../../notations/ji/types"

const visualizeSizeCategoryBounds = () => {
    const sizeCategoryBounds = LEVELS_SIZE_CATEGORY_BOUNDS[ Level.MEDIUM ] // same at every level

    const sizeCategoryBoundElements: string[] = []

    sizeCategoryBounds.forEach(sizeCategoryBound => {
        const { name, position } = sizeCategoryBound

        const topEdgeY = LEVEL_TOPS[ Level.INSANE ]
        const bottomEdgeY = LEVEL_BOTTOMS[ Level.MEDIUM ]
        const centerY = (topEdgeY + bottomEdgeY) / 2

        const positionX = computeX(position)

        sizeCategoryBoundElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${SIZE_COLOR}" x1="${positionX}" x2="${positionX}" y1="${topEdgeY}" y2="${bottomEdgeY}" />\n`)
        sizeCategoryBoundElements.push(`  <text stroke="white" stroke-width="0.45em" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centerY}" font-size="10px" font-family="Helvetica">${name}</text>`)
        sizeCategoryBoundElements.push(`  <text fill="${SIZE_COLOR}" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centerY}" font-size="10px" font-family="Helvetica">${name}</text>`)
    })

    return sizeCategoryBoundElements
}

export {
    visualizeSizeCategoryBounds,
}