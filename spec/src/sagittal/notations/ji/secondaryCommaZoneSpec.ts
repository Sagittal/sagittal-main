import { Cents, computeCentsFromPitch, Id } from "../../../../../src/general"
import { CommaClass } from "../../../../../src/sagittal"
import { computeSecondaryCommaZone } from "../../../../../src/sagittal/notations/ji"

describe("computeSecondaryCommaZone", (): void => {
    it("returns the min and max cents of where secondary commas are represented by the given JI Notation comma class, i.e. its capture zone at its introducing JI notation level", (): void => {
        const commaClassId: Id<CommaClass> = 81 as Id<CommaClass>

        const actual = computeSecondaryCommaZone(commaClassId)

        expect(computeCentsFromPitch(actual[ 0 ])).toBeCloseToTyped(37.309479 as Cents)
        expect(computeCentsFromPitch(actual[ 1 ])).toBeCloseToTyped(38.061940 as Cents)
    })

    it("another example, at the Extreme JI notation level", (): void => {
        const commaClassId: Id<CommaClass> = 82 as Id<CommaClass>

        const actual = computeSecondaryCommaZone(commaClassId)

        expect(computeCentsFromPitch(actual[ 0 ])).toBeCloseToTyped(38.061940 as Cents)
        expect(computeCentsFromPitch(actual[ 1 ])).toBeCloseToTyped(38.293157 as Cents)
    })

    it("another example, at the Medium JI notation level", (): void => {
        const commaClassId: Id<CommaClass> = 84 as Id<CommaClass>

        const actual = computeSecondaryCommaZone(commaClassId)

        expect(computeCentsFromPitch(actual[ 0 ])).toBeCloseToTyped(35.118091 as Cents)
        expect(computeCentsFromPitch(actual[ 1 ])).toBeCloseToTyped(40.260512 as Cents)
    })

    it("works for the initial comma class", (): void => {
        const commaClassId: Id<CommaClass> = 0 as Id<CommaClass>

        const actual = computeSecondaryCommaZone(commaClassId)

        expect(computeCentsFromPitch(actual[ 0 ])).toBeCloseToTyped(0.000000 as Cents)
        expect(computeCentsFromPitch(actual[ 1 ])).toBeCloseToTyped(2.740244 as Cents)
    })
})
