import { AnalyzedHistory } from "./types"

const computeBestPossibleHistory = (analyzedHistories: AnalyzedHistory[]): AnalyzedHistory => {
    let bestPossibleHistory: any = { score: Infinity }

    if (analyzedHistories.some(analyzedHistory => !analyzedHistory.exact)) {
        let exactHistories: AnalyzedHistory[] = []
        analyzedHistories.forEach(analyzedHistory => {
            if (analyzedHistory.exact) {
                exactHistories.push(analyzedHistory)
            }
        })
        if (exactHistories.length) return computeBestPossibleHistory(exactHistories)
    }

    analyzedHistories.forEach(analyzedHistory => {
        if (
            analyzedHistory.score < bestPossibleHistory.score ||
            (analyzedHistory.score === bestPossibleHistory.score && analyzedHistory.distance < bestPossibleHistory.distance)
        ) {
            bestPossibleHistory = analyzedHistory
        }
    })

    return bestPossibleHistory
}

export {
    computeBestPossibleHistory,
}