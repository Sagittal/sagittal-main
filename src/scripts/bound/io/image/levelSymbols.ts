import { difference, Id, Io, Px, sum } from "../../../../general"
import { getJiSymbol, getSagittalComma, JiSymbol, Level, LEVELS_SYMBOL_IDS, SagittalComma } from "../../../../sagittal"
import { formatMina } from "../terminal"
import { LEVEL_CENTERS } from "./levelHeights"
import { DOT_SIZE, MINA_OFFSET, SYMBOL_OFFSET } from "./sizes"
import { computeX } from "./x"

const visualizeLevelSymbols = () => {
    const levelSymbolElements: Io[] = [] as Io[]

    const levelsSymbolIdsEntries = Object.entries(LEVELS_SYMBOL_IDS) as Array<[Level, Array<Id<JiSymbol>>]>
    levelsSymbolIdsEntries.forEach(([level, levelSymbolIds]: [Level, Array<Id<JiSymbol>>]) => {
        if (level === Level.INSANE) {
            return
        }

        const centerY: Px = LEVEL_CENTERS[ level ]
        const dotY: Px = difference(centerY, SYMBOL_OFFSET)
        const symbolY: Px = sum(centerY, SYMBOL_OFFSET)

        levelSymbolIds.forEach(levelSymbolId => {
            const levelSymbol: JiSymbol = getJiSymbol(levelSymbolId)
            const { primaryCommaId, ascii, unicode, mina } = levelSymbol
            const primaryComma: SagittalComma = getSagittalComma(primaryCommaId)

            const positionX: Px = computeX(primaryComma.cents)

            const adjustedUnicode = ascii === "/|~" ?
                unicode + "         " :
                ascii === ",,(|(" ? "         " + unicode : unicode

            levelSymbolElements.push(
                `  <circle stroke="black" cx="${positionX}" cy="${dotY}" r="${DOT_SIZE}" />\n` as Io,
            )
            levelSymbolElements.push(`  <text fill="white" text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="10px" font-family="Helvetica">${ascii}</text>\n` as Io) // For searchability by ascii
            levelSymbolElements.push(`  <text fill="black" text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="40px" font-family="Bravura">${adjustedUnicode}</text>\n` as Io)

            if (level === Level.EXTREME) {
                const minaY: Px = difference(symbolY, MINA_OFFSET)
                levelSymbolElements.push(`  <text text-anchor="middle" x="${positionX}" y="${minaY}" font-size="10px" font-family="Bravura">${formatMina(mina)}</text>\n` as Io)
            }
        })
    })

    return levelSymbolElements
}

export {
    visualizeLevelSymbols,
}