import { Cents, Proportion } from "../../../../src/general"
import { ACCURACY_THRESHOLD } from "../../../../src/general/code"
import { Level } from "../../../../src/sagittal/notations/ji"
import { HIGHINA } from "../../../../src/sagittal/notations/ji/intervals"
import { computeEventInaDistance } from "../../../../src/scripts/analyzeBounds/eventInaDistance"
import { eventFixture } from "../../../helpers/src/scripts/analyzeBounds/fixtures"

describe("computeEventInaDistance", () => {
    it("returns the difference in position between the event and the previous event in the history", () => {
        const event = { ...eventFixture, cents: 5 as Cents, level: Level.HIGH }
        const history = [{ ...eventFixture, cents: 3 as Cents }, event]
        const index = 1

        const actual = computeEventInaDistance(event, index, history)

        const expected = 2 / HIGHINA as Proportion
        expect(actual).toBeCloseToTyped(expected, ACCURACY_THRESHOLD)
    })
})
