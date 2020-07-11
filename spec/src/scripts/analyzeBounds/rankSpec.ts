import { computeRank } from "../../../../src/scripts/analyzeBounds/rank"
import { Level } from "../../../../src/notations/ji/types"
import { AnalyzedEvent, EventType, EventRank } from "../../../../src/scripts/analyzeBounds/types"
import { Cents } from "../../../../src/utilities/types"

describe("computeRank", () => {
    it("returns the worst rank of any of the events in the history", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            {
                type: EventType.INA,
                level: Level.HIGH,
                position: 10.0 as Cents,
                rank: 1 as EventRank,
            },
            {
                type: EventType.SIZE,
                level: Level.ULTRA,
                position: 10.2 as Cents,
                rank: 3 as EventRank,
            },
            {
                type: EventType.MEAN,
                level: Level.EXTREME,
                position: 10.1 as Cents,
                rank: 2 as EventRank,
            },
        ] as AnalyzedEvent[]

        const result = computeRank(analyzedEvents)

        expect(result).toBe(3 as EventRank)
    })
})