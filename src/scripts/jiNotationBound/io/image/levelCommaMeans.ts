import { CentsPosition, Io, Px, subtract } from "../../../../general"
import { JiNotationLevel, SymbolLongAscii, unicodeFromAscii } from "../../../../sagittal"
import { JI_NOTATION_LEVELS_COMMA_MEANS } from "../../histories"
import { MEAN_COLOR } from "./colors"
import { JI_NOTATION_LEVEL_CENTERS } from "./levelHeights"
import { DASH_SIZE, HALF_TICK_SIZE } from "./sizes"
import { computeX } from "./x"

const visualizeJiNotationLevelCommaMeans = (): Io[] => {
    const jiNotationLevelCommaMeanElements: Io[] = [] as Io[]

    const jiNotationLevelCommaMeansEntries =
        Object.entries(JI_NOTATION_LEVELS_COMMA_MEANS) as Array<[JiNotationLevel, CentsPosition[]]>
    jiNotationLevelCommaMeansEntries.forEach((
        [jiNotationLevel, jiNotationLevelCommaMeans]: [JiNotationLevel, CentsPosition[]],
    ): void => {
        if (jiNotationLevel === JiNotationLevel.INSANE) {
            return
        }

        const centerY: Px = JI_NOTATION_LEVEL_CENTERS[ jiNotationLevel ]
        const topY: Px = subtract(centerY, HALF_TICK_SIZE)
        const bottomY: Px = subtract(centerY, HALF_TICK_SIZE)

        jiNotationLevelCommaMeans.forEach((jiNotationLevelCommaMean: CentsPosition): void => {
            const { cents, name } = jiNotationLevelCommaMean

            const formattedName = name?.split(" ")
                .map((ascii: string): string => unicodeFromAscii(ascii as SymbolLongAscii)).join("   ") || ""
            const positionX: Px = computeX(cents)

            jiNotationLevelCommaMeanElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${MEAN_COLOR}" x1="${positionX}" x2="${positionX}" y1="${topY}" y2="${bottomY}"/>\n` as Io)
            jiNotationLevelCommaMeanElements.push(`  <text fill="white" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${bottomY}" font-size="6px" font-family="Helvetica">${name}</text>\n` as Io) // For searchability by ascii
            jiNotationLevelCommaMeanElements.push(`  <text stroke="white" stroke-width="0.45em" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${bottomY}" font-size="10px" font-family="Bravura">${formattedName}</text>\n` as Io)
            jiNotationLevelCommaMeanElements.push(`  <text fill="${MEAN_COLOR}" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${bottomY}" font-size="10px" font-family="Bravura">${formattedName}</text>\n` as Io)
        })
    })

    return jiNotationLevelCommaMeanElements
}

export {
    visualizeJiNotationLevelCommaMeans,
}