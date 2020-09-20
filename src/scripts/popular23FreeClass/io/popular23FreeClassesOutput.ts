import {
    BLANK,
    Count,
    count,
    format23FreeClass,
    formatMonzo,
    formatNumber,
    formatTable,
    Formatted,
    Id,
    Io,
    ioSettings,
    isUndefined,
    JiPitch,
    Max,
    Ranked,
    Row,
    SPACE,
    sumTexts,
    Table,
    TwoThreeFreeClass,
} from "../../../general"
import { formatSymbolClass, N2D3P9, SymbolClass, SymbolLongAscii, SymbolSmiley } from "../../../sagittal"
import { popular23FreeClassesScriptGroupSettings } from "../globals"
import {
    Popular23FreeClass,
    Popular23FreeClassWithBestNotatingComma,
    Popular23FreeClassWithExactlyNotatingSymbolClasses,
} from "../types"
import {
    computePopular23FreeClassWithBestNotatingCommaHeaderRows,
    computePopular23FreeClassWithExactlyNotatingSymbolClassesHeaderRows,
} from "./headerRows"

const computePopular23FreeClassesOutput = (
    popular23FreeClasses: Array<Ranked<Popular23FreeClass>>,
    maxN2D3P9: Max<N2D3P9>,
): Io => {
    const table: Table<Popular23FreeClass> = popular23FreeClassesScriptGroupSettings.useBestNotatingCommas ?
        computePopular23FreeClassWithBestNotatingCommaHeaderRows() :
        computePopular23FreeClassWithExactlyNotatingSymbolClassesHeaderRows()
    const headerRowCount = count(table) as Count<Row<{ of: Popular23FreeClass, header: true }>>

    popular23FreeClasses.forEach((popular23FreeClass: Ranked<Popular23FreeClass>): void => {
        if (popular23FreeClassesScriptGroupSettings.useBestNotatingCommas) {
            const {
                rank: estimatedRank,
                bestNotatingCommaCents,
                bestNotatingCommaMonzo,
                bestNotatingCommaMaybeSymbolClassId,
            } = popular23FreeClass as Ranked<Popular23FreeClassWithBestNotatingComma>

            table.push([
                // TODO: I dunno, I can't tell... is being forced to do this worse than in test being forced to assert
                //  that they actually are TwoThreeFreeClass? maybe in test i should be forced to do it, because by that
                //  point in real life they would have the brand? in which case I should remove the other Omit< brands
                //  and maybe in test to preserve forcing myself to type assert all the properties, instead of asserting
                //  then on the whole object or array thereof, I should just actually add the brand
                //  which also gets me thinking again about whether the brands should be on enums per module
                //  I'm just a bit concerned about circular dependencies, so you'll want to try that out as a separate
                //  commit
                format23FreeClass(popular23FreeClass as JiPitch as TwoThreeFreeClass),
                estimatedRank,
                formatNumber(bestNotatingCommaCents),
                formatMonzo(bestNotatingCommaMonzo),
                isUndefined(bestNotatingCommaMaybeSymbolClassId) ?
                    BLANK :
                    formatSymbolClass(bestNotatingCommaMaybeSymbolClassId, ioSettings),
            ] as Row<{ of: Popular23FreeClassWithExactlyNotatingSymbolClasses, header: true }>)
        } else {
            const {
                n2d3p9,
                rank: estimatedRank,
                popularityRank: actualRank,
                exactlyNotatingSymbolClassSmallestJiNotationSymbolSubsetIndices,
                exactlyNotatingSymbolClassIds,
                votes,
            } = popular23FreeClass as Ranked<Popular23FreeClassWithExactlyNotatingSymbolClasses>

            table.push([
                format23FreeClass(popular23FreeClass as JiPitch as TwoThreeFreeClass),
                formatNumber(n2d3p9),
                exactlyNotatingSymbolClassIds.map(
                    (exactlyNotatingSymbolClassId: Id<SymbolClass>): Formatted<SymbolSmiley | SymbolLongAscii> => {
                        return formatSymbolClass(exactlyNotatingSymbolClassId, ioSettings)
                    },
                ).join(SPACE),
                exactlyNotatingSymbolClassSmallestJiNotationSymbolSubsetIndices.join(", "),
                estimatedRank,
                isUndefined(actualRank) ? "-" : actualRank,
                votes,
            ] as Row<{ of: Popular23FreeClass, header: true }>)
        }
    })

    const popular23FreeClassesOutput: Io = formatTable(table, { headerRowCount })

    if (popular23FreeClassesScriptGroupSettings.useKnown) {
        return popular23FreeClassesOutput
    } else {
        const popular23FreeClassesTableTitle =
            `count of results with N2D3P9 ≤ ${maxN2D3P9}: ${popular23FreeClasses.length}\n\n` as Io

        return sumTexts(popular23FreeClassesTableTitle, popular23FreeClassesOutput)
    }
}

export {
    computePopular23FreeClassesOutput,
}
