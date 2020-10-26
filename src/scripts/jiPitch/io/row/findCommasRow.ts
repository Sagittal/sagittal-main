import {Count, Exponent, Max, Maybe, Prime, Row} from "../../../../general"
import {CommaAnalysis, CommaClassId} from "../../../../sagittal"
import {computeNotatingCommasRow} from "./notatingCommasRow"
import {compute23FreeClassRow} from "./two3FreeClassRow"

const computeFindCommasRow = (
    commaAnalysis: CommaAnalysis,
    maybeCommaClassId: Maybe<CommaClassId>,
    maxMonzoLength: Max<Count<Exponent<Prime>>>,
): Row<{of: CommaAnalysis}> => {

    return [
        ...computeNotatingCommasRow(commaAnalysis, maybeCommaClassId, maxMonzoLength),
        ...compute23FreeClassRow(commaAnalysis.two3FreeClassAnalysis) as Row as Row<{of: CommaAnalysis}>,
    ] as Row<{of: CommaAnalysis}>
}

export {
    computeFindCommasRow,
}
