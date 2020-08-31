import { ceil, Cents, computePx, Io, Px } from "../../../../general"
import { MAX_SINGLE_SHAFT_CENTS } from "../../../../sagittal"
import { MARGIN, Y_SCALE } from "./sizes"
import { computeX } from "./x"

const visualizeCents = () => {
    const cents: Cents[] = [...Array(ceil(MAX_SINGLE_SHAFT_CENTS)).keys()] as Cents[]

    const centElements: Io[] = []
    const centsY: Px = computePx(MARGIN, Y_SCALE)

    cents.forEach(cent => {
        const positionX = computeX(cent)

        centElements.push(`  <text stroke="white" stroke-width="0.45em" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centsY}" font-size="10px" font-family="Helvetica">${cent}¢</text>\n` as Io)
        centElements.push(`  <text fill="black" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centsY}" font-size="10px" font-family="Helvetica">${cent}¢</text>\n` as Io)
    })

    return centElements
}

export {
    visualizeCents,
}