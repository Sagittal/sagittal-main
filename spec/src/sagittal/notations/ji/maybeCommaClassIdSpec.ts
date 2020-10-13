import { Id } from "../../../../../src/general"
import { Comma } from "../../../../../src/general/music/ji"
import { CommaClass } from "../../../../../src/sagittal"
import { computeMaybeCommaClassId } from "../../../../../src/sagittal/notations/ji"

describe("computeMaybeCommaClassId", (): void => {
    it("if the comma is a primary comma in the Sagittal JI notation, returns the comma class ID of the comma class with that primary comma", (): void => {
        const comma: Comma = { monzo: [-5, 1, 0, 0, 1] } as Comma

        const actual = computeMaybeCommaClassId(comma)

        const expected = 114 as Id<CommaClass>
        expect(actual).toEqual(expected)
    })

    it("returns nothing otherwise", (): void => {
        const comma: Comma = { monzo: [20, -12, -1, 2, 0, 0, 0, -1] } as Comma

        const actual = computeMaybeCommaClassId(comma)

        expect(actual).toBeUndefined()
    })
})