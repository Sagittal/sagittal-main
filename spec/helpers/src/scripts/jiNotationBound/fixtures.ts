import {
    Abs,
    Cents,
    Count,
    Decimal,
    EMPTY_MONZO,
    Id,
    Multiplier,
    Name,
    Pitch,
    Quotient,
    Rank,
    SQRT_SCALER,
    Sum,
    UNISON,
} from "../../../../../src/general"
import { NON_JI_PITCH_BASE_MONZO } from "../../../../../src/general/music/nonJi/constants"
import {
    Bound,
    BoundType,
    Ina,
    JiNotationBound,
    JiNotationLevel,
    Tina,
} from "../../../../../src/sagittal/notations/ji"
import { JiNotationBoundAnalysis } from "../../../../../src/scripts/jiNotationBound/bound"
import { BoundEventConsolidation } from "../../../../../src/scripts/jiNotationBound/consolidateHistories/types"
import { BoundEvent } from "../../../../../src/scripts/jiNotationBound/histories"
import { BoundEventAnalysis, BoundHistoryAnalysis, Score } from "../../../../../src/scripts/jiNotationBound/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"

const boundEventFixture: BoundEvent = {
    pitch: { monzo: NON_JI_PITCH_BASE_MONZO, scaler: SQRT_SCALER } as Pitch<{ rational: false }>,
    boundType: "" as BoundType,
    jiNotationLevel: "" as JiNotationLevel,
    name: "" as Name<Bound>,
}

const boundEventAnalysisFixture: BoundEventAnalysis = {
    ...boundEventFixture,
    distance: 0 as Abs<Cents>,
    inaDistance: 0 as Multiplier<Ina>,
    rank: 0 as Decimal<{ integer: true }> & Rank<BoundType>,
    exact: false,
}

const boundHistoryAnalysisFixture: BoundHistoryAnalysis = {
    boundEventAnalyses: [],
    pitch: { monzo: NON_JI_PITCH_BASE_MONZO, scaler: SQRT_SCALER } as Pitch<{ rational: false }>,
    rank: 0 as Decimal<{ integer: true }> & Rank<BoundType>,
    score: 0 as Score,
    totalDistance: 0 as Sum<Abs<Cents>>,
    exact: false,
    totalInaDistance: 0 as Sum<Multiplier<Ina>>,
    possible: false,
    tinaError: 0 as Multiplier<Tina>,
    initialPositionTinaDistance: 0 as Multiplier<Tina>,
}

const boundEventConsolidationFixture: BoundEventConsolidation = {
    ...boundEventFixture,
    isPossibleBoundHistoryMember: false,
    isBestPossibleBoundHistoryMember: false,
    rankOfBestRankedMemberHistory: 0 as Decimal<{ integer: true }> & Rank<BoundType>,
    rankOfBestRankedEventInAnyMemberHistory: 0 as Decimal<{ integer: true }> & Rank<BoundType>,
    nextBoundEvents: [] as Name<Bound>[],
    exact: false,
}

const jiNotationBoundFixture: JiNotationBound = {
    id: 0 as Id<JiNotationBound>,
    jiNotationLevels: [],
    pitch: {
        monzo: EMPTY_MONZO,
        scaler: [1, 1] as Quotient,
    } as Pitch<{ rational: false }>,
    boundType: BoundType.INA_MIDPOINT,
    name: "" as Name<Bound>,
}

const jiNotationBoundAnalysisFixture: JiNotationBoundAnalysis = {
    bestPossibleBoundHistoryAnalysis: boundHistoryAnalysisFixture,
    bestRank: RANKS[ BoundType.INA_MIDPOINT ],
    initialPosition: UNISON,
    initialPositionTinaDistance: 0 as Multiplier<Tina>,
    bestPossibleBoundHistoryTotalDistance: 0 as Cents,
    bestPossibleBoundHistoryTotalInaDistance: 0 as Sum<Multiplier<Ina>>,
    boundHistoryConsolidation: {},
    possibleBoundHistoryCount: 0 as Count<BoundHistoryAnalysis>,
}

export {
    boundEventFixture,
    boundEventAnalysisFixture,
    boundHistoryAnalysisFixture,
    boundEventConsolidationFixture,
    jiNotationBoundFixture,
    jiNotationBoundAnalysisFixture,
}
