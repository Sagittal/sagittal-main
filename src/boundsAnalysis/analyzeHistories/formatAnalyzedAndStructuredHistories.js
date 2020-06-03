const HEADER_ROW = [
    "index",
    "symbol",
    "bound ¢",
    "psbln-o", // possible non-overridden
    "min err",
    "ttl hst",
    "psbl hst",
].join("\t")

const formatAnalyzedAndStructuredHistories = (analyzedAndStructuredHistories, {datumIndex, summary = false} = {}) => {
    let formattedAnalyzedAndStructuredHistories
    if (summary) {
        const {
            bound: {
                extremeLevelLesserNeighborCommaSymbol,
                position,
            },
            analysis: {
                hasPossibleNonoverriddenHistory,
                minimumError,
                totalHistories,
                possibleHistories,
            },
        } = analyzedAndStructuredHistories
        formattedAnalyzedAndStructuredHistories = [
            datumIndex,
            extremeLevelLesserNeighborCommaSymbol,
            position.toPrecision(3),
            hasPossibleNonoverriddenHistory,
            typeof minimumError === "undefined" ? "n/a" : minimumError.toPrecision(3),
            totalHistories,
            possibleHistories,
        ].join("\t")
    } else {
        formattedAnalyzedAndStructuredHistories = JSON.stringify(analyzedAndStructuredHistories, null, 4)
            .replace(/\\\\/g, "\\")
    }

    return formattedAnalyzedAndStructuredHistories
}

module.exports = {
    HEADER_ROW,
    formatAnalyzedAndStructuredHistories,
}