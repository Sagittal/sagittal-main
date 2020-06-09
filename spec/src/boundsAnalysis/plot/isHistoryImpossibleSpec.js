const {computeIsHistoryImpossible} = require("../../../../src/boundsAnalysis/plot/isHistoryImpossible")

describe("computeIsHistoryImpossible", () => {
    it("returns false if the history has no events yet", () => {
        const events = []

        const result = computeIsHistoryImpossible(events)

        expect(result).toBe(false)
    })

    it("returns false if the history has an event but it is not impossible", () => {
        const events = [{type: "EDA"}]

        const result = computeIsHistoryImpossible(events)

        expect(result).toBe(false)
    })

    it("returns true if the history has an impossible event", () => {
        const events = [{type: "EDA"}, {type: "IMPOSSIBLE"}]

        const result = computeIsHistoryImpossible(events)

        expect(result).toBe(true)
    })
})