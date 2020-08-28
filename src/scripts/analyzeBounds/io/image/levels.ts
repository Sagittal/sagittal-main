import { Cents, IO } from "../../../../general"
import { LEVELS, MAX_POSITION } from "../../../../notations"
import { LEVEL_BOTTOMS } from "./levelHeights"
import { computeX } from "./x"

const visualizeLevels = () => {
    const levelElements: IO[] = []

    LEVELS.forEach(level => {
        const leftEdgeX = computeX(0 as Cents)
        const rightEdgeX = computeX(MAX_POSITION)
        const levelY = LEVEL_BOTTOMS[ level ]

        levelElements.push(`  <line stroke="black" x1="${leftEdgeX}" x2="${rightEdgeX}" y1="${levelY}" y2="${levelY}"/>\n` as IO)
    })

    return levelElements
}

export {
    visualizeLevels,
}