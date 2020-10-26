import {
    Accidental,
    Aim,
    Ascii,
    Compatible,
    computeAccidentalAscii,
    computeSagittalAscii,
    Flavor,
    Sagittal,
} from "../../../../../src/sagittal/accidental"
import {getArm} from "../../../../../src/sagittal/accidental/flacco/arm"
import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco/types"
import {getCore, Shafts} from "../../../../../src/sagittal/accidental/symbol"

describe("computeSagittalAscii", (): void => {
    it("given a sagittal, returns its ASCII representation", (): void => {
        const sagittal: Sagittal = {
            arm: getArm(ArmId.BIRD),
            core: getCore(HeadId.LEFT_SCROLL),
        }

        const actual = computeSagittalAscii(sagittal)

        const expected = "``)|" as Ascii
        expect(actual).toBe(expected)
    })

    it("converts 4 shafts up into an ex up", (): void => {
        const sagittal: Sagittal = {core: getCore(HeadId.LEFT_SCROLL_AND_BARB, Shafts.EX)}

        const actual = computeSagittalAscii(sagittal)

        const expected = ")/X" as Ascii
        expect(actual).toBe(expected)
    })

    it("converts 4 shafts down into an ex down", (): void => {
        const sagittal: Sagittal = {core: getCore(HeadId.ARC_AND_BOATHOOK, Shafts.EX, Aim.DOWN)}

        const actual = computeSagittalAscii(sagittal)

        const expected = "(Y~" as Ascii
        expect(actual).toBe(expected)
    })


    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const sagittal: Sagittal = {}

        const actual = computeSagittalAscii(sagittal)

        const expected = "(|//|)" as Ascii
        expect(actual).toBe(expected)
    })
})

describe("computeAccidentalAscii", (): void => {
    it("works for accidentals with a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            core: getCore(HeadId.LEFT_BARB),
            compatible: Compatible.SHARP,
        } as Accidental<Flavor.EVO>

        const actual = computeAccidentalAscii(accidental)

        const expected = "/|#" as Ascii
        expect(actual).toBe(expected)
    })

    it("works for accidentals with only a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            compatible: Compatible.FLAT,
        } as Accidental<Flavor.EVO>

        const actual = computeAccidentalAscii(accidental)

        const expected = "b" as Ascii
        expect(actual).toBe(expected)
    })
})