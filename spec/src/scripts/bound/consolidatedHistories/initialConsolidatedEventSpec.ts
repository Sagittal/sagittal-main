import { Cents, Integer, Name, Pitch, Rank } from "../../../../../src/general"
import { AnalyzedEvent } from "../../../../../src/scripts/bound/analyzedHistory"
import { computeInitialConsolidatedEvent } from "../../../../../src/scripts/bound/consolidatedHistories/initialConsolidatedEvent"
import { ConsolidatedEvent } from "../../../../../src/scripts/bound/consolidatedHistories/types"
import { EventType, HistoricalEvent } from "../../../../../src/scripts/bound/histories"
import { analyzedEventFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("computeInitialConsolidatedEvent", () => {
    let actual: ConsolidatedEvent
    const analyzedEvent: AnalyzedEvent = {
        ...analyzedEventFixture,
        type: EventType.INA,
        name: "12.5°58" as Name<Pitch>,
        rank: 4 as Rank<AnalyzedEvent, Integer>,
        cents: 43.343455 as Cents,
    }

    beforeEach(() => {
        actual = computeInitialConsolidatedEvent(analyzedEvent)
    })

    it("initializes the rank related fields to the worst rank (so that there's nowhere to go but up when updating them with data from the analyzed histories", () => {
        expect(actual.rankOfBestRankedEventInAnyMemberHistory).toBe(2 as Rank<AnalyzedEvent, Integer>)
        expect(actual.rankOfBestRankedMemberHistory).toBe(2 as Rank<AnalyzedEvent, Integer>)
    })

    it("strips off the rank that was created in the analyze step, replacing it with the rank measurements that are appropriate for the consolidated history", () => {
        expect((actual as HistoricalEvent as AnalyzedEvent).rank).toBeUndefined()
    })

    it("initializes to assume that it is not a member of a history which is possible (if one ever comes across which is possible, then it never goes back to being considered not possible)", () => {
        expect(actual.isPossibleHistoryMember).toBeFalsy()
    })

    it("initializes to assume that it is not a member of the best possible history (if one ever comes across which is possible, then it never goes back to being considered not possible)", () => {
        expect(actual.isBestPossibleHistoryMember).toBeFalsy()
    })

    it("initializes with an empty list of next events", () => {
        expect(actual.nextEvents).toEqual([])
    })

    it("preserves most of the original information from the original event", () => {
        expect(actual.type).toBe(analyzedEvent.type)
        expect(actual.level).toBe(analyzedEvent.level)
        expect(actual.name).toBe(analyzedEvent.name)
        expect(actual.cents).toBe(analyzedEvent.cents)
    })
})