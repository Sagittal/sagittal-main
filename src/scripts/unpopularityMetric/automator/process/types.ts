import { SumOfSquares } from "../../sumOfSquares/types"
import { Combination, Count } from "../../../../utilities/types"
import { Sample } from "./samples/types"
import { Submetric } from "../../types"
import { Chunk } from "../types"

interface Metric {
    sumOfSquares: SumOfSquares,
    submetrics: Combination<Submetric>,
}

interface LocalMinimum extends Sample {
    sumOfSquares: SumOfSquares,
}

type RecursivelyFindUnpopularityMetricOptions = Partial<{
    depth: number,
    bestMetric: Metric,
    progressMessage: string,
    localMinimum: LocalMinimum,
    recurse: boolean,
    debug: boolean,
    chunkCount: Count<Chunk>,
}>

export {
    LocalMinimum,
    Metric,
    RecursivelyFindUnpopularityMetricOptions,
}
