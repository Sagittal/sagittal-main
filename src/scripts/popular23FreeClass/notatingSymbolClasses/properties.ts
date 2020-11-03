import {Index, Two3FreeClass} from "../../../general"
import {
    getSmallestSymbolSubsetId,
    SIZE_SORTED_SYMBOL_SUBSET_IDS,
    SymbolClassId,
    SymbolSubsetId,
} from "../../../sagittal"
import {computeNotatingSymbolClassIds} from "./notatingSymbolClassIds"
import {NotatingSymbolClassesProperties} from "./types"

const computeNotatingSymbolClassesProperties = (
    two3FreeClass: Two3FreeClass,
): NotatingSymbolClassesProperties => {
    const notatingSymbolClassIds = computeNotatingSymbolClassIds(two3FreeClass)

    const smallestSymbolSubsetIndices = notatingSymbolClassIds
        .map((symbolClassId: SymbolClassId): Index<SymbolSubsetId> => {
            // This used to not include Trojan, and the tables that have been shared on the forum reflect that.
            return SIZE_SORTED_SYMBOL_SUBSET_IDS
                .indexOf(getSmallestSymbolSubsetId(symbolClassId)) as Index<SymbolSubsetId>
        })

    return {
        notatingSymbolClassIds,
        notatingSymbolClassSmallestSymbolSubsetIndices: smallestSymbolSubsetIndices,
    }
}

export {
    computeNotatingSymbolClassesProperties,
}