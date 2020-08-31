import { colorize, Count, Io, Rank } from "../../../../../general"
import { rankBoundIndices } from "../../../analyzeBound"
import { AnalyzedEvent } from "../../../analyzedHistory"
import { BOUND_COLORS } from "../boundColors"
import { FORMATTED_RANK_NAMES } from "../rankNames"

const formatRankAnalysis = (rankCount: Count<Rank<AnalyzedEvent>>, rankIndex: number): Io => {
    const rankAnalysisText: Io = `${FORMATTED_RANK_NAMES[ rankIndex ].trim()} snap event was worst-ranked snap event:\n\ttotal: ${rankCount} bounds\n\tbounds: ${rankBoundIndices[ rankIndex ].join(", ")}` as Io
    const color = BOUND_COLORS[ rankIndex ]

    return colorize(rankAnalysisText, color)
}

export {
    formatRankAnalysis,
}