import { Combinations, Count } from "../../general"
import { Metric, Sample, Scope } from "./bestMetric"
import { Chunk, ParameterChunk, SolverStatus, SubmetricChunk } from "./solver"
import { DEFAULT_MAXIMUM_UNIT, DEFAULT_ONLY_TOP, DEFAULT_Z } from "./constants"

const scopesToSearch: Scope[] = [] as unknown as Scope[]

const solverStatus: SolverStatus = {
    chunkCount: 0 as Count<Chunk>,
    finishedPopulating: false,
    populatedScopeCount: 0 as Count<Scope>,
    searchedScopeCount: 0 as Count<Scope>,
    averageSamplesPerScope: 0 as Count<Sample>,
    sampleCount: 0 as Count<Sample>,
}

const bestMetrics: Record<string, Metric> = {}

const memoizedSubmetricChunkCombinations: Array<Combinations<SubmetricChunk>> = []
const memoizedParameterChunkCombinations: Array<Combinations<ParameterChunk>> = []

const unpopularityMetricSettings = {
    z: DEFAULT_Z,
    onlyTop: DEFAULT_ONLY_TOP,
    maximumUnit: DEFAULT_MAXIMUM_UNIT,
}

export {
    scopesToSearch,
    solverStatus,
    bestMetrics,
    memoizedSubmetricChunkCombinations,
    memoizedParameterChunkCombinations,
    unpopularityMetricSettings,
}
