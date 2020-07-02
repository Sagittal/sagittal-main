const {SYMBOLS} = require("../../../../src/notations/ji/symbols")
const {computeSopfr} = require("../../../../src/utilities/comma/sopfr")
const {computeRoughMonzo} = require("../../../../src/utilities/comma/rough")
const {ACCURACY_THRESHOLD} = require("../../../../src/utilities/constants")

const AVERAGE_FIVE_ROUGH_SOPFR = 22.78523489932886

describe("averageFiveRoughSopfr", () => {
    it("is about 23", () => {
        const total = SYMBOLS.reduce(
            (totalFiveRoughSopfr, symbol) => {
                const monzo = symbol.primaryComma.monzo
                const fiveRoughMonzo = computeRoughMonzo(monzo, 5)
                const fiveRoughSopfr = computeSopfr(fiveRoughMonzo)

                return totalFiveRoughSopfr + fiveRoughSopfr
            },
            0,
        )

        expect(total / SYMBOLS.length).toBeCloseTo(AVERAGE_FIVE_ROUGH_SOPFR, ACCURACY_THRESHOLD)
    })
})
