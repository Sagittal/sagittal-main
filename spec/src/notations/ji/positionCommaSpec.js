const {computePositionComma} = require("../../../../src/notations/ji/positionComma")

describe("computePositionComma", () => {
    it("given a position, returns the comma with that position", () => {
        const position = 3.37801872846485

        const result = computePositionComma(position)

        expect(result).toEqual({
            introducingLevel: "HIGH",
            position: 3.37801872846485,
            ascii: ")|",
            unicode: "",
            mina: 7,
            monzo: [-9, 3, 0, 0, 0, 0, 0, 1],
            id: 7,
        })
    })

    it("does not fail if given an undefined position", () => {
        const position = undefined

        const result = computePositionComma(position)

        expect(result).toEqual(undefined)
    })
})