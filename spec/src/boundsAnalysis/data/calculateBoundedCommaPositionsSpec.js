const {calculateBoundedCommaPositions} = require("../../../../src/boundsAnalysis/data/calculateBoundedCommaPositions")

describe("calculateBoundedCommaPositions", () => {
    it("gives the positions of the commas immediately lesser and greater than the position at that level", () => {
        expect(calculateBoundedCommaPositions(9, "MEDIUM")).toEqual([
            5.7578022033852, // |(
            9.6879606428187, // )|(
        ])
    })

    it("when the position is greater than the greatest comma at the level, gives the position of the greatest comma for the lesser comma and undefined for the greater comma", () => {
        expect(calculateBoundedCommaPositions(68.4, "VERY_HIGH")).toEqual([
            67.2910616147857, // )|\\
            undefined,
        ])
    })
})