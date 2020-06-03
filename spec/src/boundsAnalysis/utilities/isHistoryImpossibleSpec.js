const {isHistoryImpossible} = require("../../../../src/boundsAnalysis/utilities/isHistoryImpossible")

describe("isHistoryImpossible", () => {
    it("returns false if the history has no events yet", () => {
        const events = []

        const result = isHistoryImpossible(events)

        expect(result).toBe(false)
    })

    it("returns false if the history has an event but it is not impossible", () => {
        const events = [{type: "EDA"}]

        const result = isHistoryImpossible(events)

        expect(result).toBe(false)
    })

    it("returns true if the history has an impossible event", () => {
        const events = [{type: "EDA"}, {type: "impossible"}]

        const result = isHistoryImpossible(events)

        expect(result).toBe(true)
    })
})
