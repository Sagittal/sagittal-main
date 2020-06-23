const {computeCentsFromRatio} = require("../../../../src/utilities/comma/centsFromRatio")
const {ACCURACY_THRESHOLD} = require("../../../../src/utilities/constants")

describe("computeCentsFromRatio", () => {
    it("gives the cents value of a ratio", () => {
        const ratio = [3, 2]

        const result = computeCentsFromRatio(ratio)

        expect(result).toBeCloseTo(701.955001, ACCURACY_THRESHOLD)
    })
})