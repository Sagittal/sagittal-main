import { Cents } from "../../../../../src/general"
import { computeNeighborPositions } from "../../../../../src/scripts/jiNotationBound/boundedPositions/neighborPositions"
import { NeighborPositions } from "../../../../../src/scripts/jiNotationBound/boundedPositions/types"

describe("computeNeighborPositions", (): void => {
    it("returns the two positions in the list of sorted targets which are on either side of the position", (): void => {
        const position: Cents = 0.433 as Cents
        const targetPositions: Cents[] = [
            0.00,
            0.10,
            0.50,
            0.66,
        ] as Cents[]

        const actual = computeNeighborPositions(position, targetPositions)

        const expected = [
            0.10,
            0.50,
        ] as NeighborPositions
        expect(actual).toEqual(expected)
    })

    it("returns a position as undefined if there is no target on one side of the position", (): void => {
        const position: Cents = 0.7 as Cents
        const targetPositions: Cents[] = [
            0.00,
            0.10,
            0.50,
            0.66,
        ] as Cents[]

        const actual = computeNeighborPositions(position, targetPositions)

        const expected = [
            0.66,
            undefined,
        ] as NeighborPositions
        expect(actual).toEqual(expected)
    })
})