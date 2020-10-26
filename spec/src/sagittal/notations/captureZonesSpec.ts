import {SymbolClassId} from "../../../../src/sagittal/accidental"
import {BoundClassId} from "../../../../src/sagittal/bound"
import {CaptureZone} from "../../../../src/sagittal/notations"
import {computeCaptureZones} from "../../../../src/sagittal/notations/captureZones"
import {
    EXTREME_NOTATION,
    HIGH_NOTATION,
    MEDIUM_NOTATION,
    ULTRA_NOTATION,
} from "../../../../src/sagittal/notations/ji/notations"

describe("computeCaptureZones", (): void => {
    it("works for the Medium level", (): void => {
        const actual = computeCaptureZones(MEDIUM_NOTATION)

        const expectedN1A: CaptureZone[] = [].reverse()
        const expectedN1T: CaptureZone[] = [].reverse()
        const expectedN2A: CaptureZone[] = [].reverse()
        const expectedN2T: CaptureZone[] = [].reverse()

        const expectedP1A: CaptureZone[] = [
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.NULL,
                // CommaClassId: CommaClassId._1_u,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_7_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._7_11_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.LEFT_BARB,
                // CommaClassId: CommaClassId._1_5_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                // CommaClassId: CommaClassId._1_7_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.LEFT_ARC,
                // CommaClassId: CommaClassId._7_11_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._5_11_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_35_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
        ]
        const expectedP1T: CaptureZone[] = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_35_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._5_11_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.LEFT_ARC,
                // CommaClassId: CommaClassId._7_11_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                // CommaClassId: CommaClassId._1_7_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.LEFT_BARB,
                // CommaClassId: CommaClassId._1_5_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._7_11_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_7_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.NULL,
                // CommaClassId: CommaClassId._1_u,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
        ]
        const expectedP2A: CaptureZone[] = [
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.NULL,
                // CommaClassId: CommaClassId._1_u,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_7_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._7_11_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.LEFT_BARB,
                // CommaClassId: CommaClassId._1_5_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                // CommaClassId: CommaClassId._1_7_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.LEFT_ARC,
                // CommaClassId: CommaClassId._7_11_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._5_11_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_35_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
        ]
        const expectedP2T: CaptureZone[] = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_35_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._5_11_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.LEFT_ARC,
                // CommaClassId: CommaClassId._7_11_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                // CommaClassId: CommaClassId._1_7_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.LEFT_BARB,
                // CommaClassId: CommaClassId._1_5_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._7_11_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_7_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.NULL,
                // CommaClassId: CommaClassId._1_u,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
        ]

        const expected = [
            // ...expectedN2T,
            // ...expectedN2A,
            // ...expectedN1T,
            // ...expectedN1A,

            ...expectedP1A,
            ...expectedP1T,
            ...expectedP2A,
            ...expectedP2T,
        ] as CaptureZone[]
        expect(actual).toEqual(expected)
    })

    // tslint:disable-next-line:ban
    xit("works for the High level, which is of interest because involves the topmost capture zone being split in the manner that the apotome-centered zones are", (): void => {
        const actual = computeCaptureZones(HIGH_NOTATION)

        const expectedN1A = [].reverse()
        const expectedN1T = [].reverse()
        const expectedN2A = [].reverse()
        const expectedN2T = [].reverse()

        const expectedP1A = [] as unknown[] as CaptureZone[]
        const expectedP1T = [] as unknown[] as CaptureZone[]
        const expectedP2A = [] as unknown[] as CaptureZone[]
        const expectedP2T = [] as unknown[] as CaptureZone[]

        const expected = [
            // ...expectedN2T,
            // ...expectedN2A,
            // ...expectedN1T,
            // ...expectedN1A,

            ...expectedP1A,
            ...expectedP1T,
            ...expectedP2A,
            ...expectedP2T,
        ] as CaptureZone[]
        expect(actual).toEqual(expected)
    })

    // tslint:disable-next-line:ban
    xit("works for the Ultra level, which is of interest for the same reason as the High level but also introduces accents", (): void => {
        const actual = computeCaptureZones(ULTRA_NOTATION)

        const expectedN1A = [].reverse()
        const expectedN1T = [].reverse()
        const expectedN2A = [].reverse()
        const expectedN2T = [].reverse()

        const expectedP1A = [] as unknown[] as CaptureZone[]
        const expectedP1T = [] as unknown[] as CaptureZone[]
        const expectedP2A = [] as unknown[] as CaptureZone[]
        const expectedP2T = [] as unknown[] as CaptureZone[]

        const expected = [
            // ...expectedN2T,
            // ...expectedN2A,
            // ...expectedN1T,
            // ...expectedN1A,

            ...expectedP1A,
            ...expectedP1T,
            ...expectedP2A,
            ...expectedP2T,
        ] as CaptureZone[]
        expect(actual).toEqual(expected)
    })

    it("works for the Extreme level, and here's the main explanation: it can assemble the ±2 apotome sized areas divided into capture zones each with an accidental, from the given half apotome of bound and comma classes plus the given up-to-L|SS-bound's worth (single shaft max) of flaccos (all by ID)", (): void => {
        const actual = computeCaptureZones(EXTREME_NOTATION)

        const expectedN1A = [
            {
                boundClassId: BoundClassId.MINA_0,
                symbolClassId: SymbolClassId.NULL,
                // CommaClassId: CommaClassId._1_u,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_1,
                symbolClassId: SymbolClassId.WING,
                // CommaClassId: CommaClassId._1_455_n,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.BIRD,
                // CommaClassId: CommaClassId._65_77_n,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_5_n,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_4,
                symbolClassId: SymbolClassId.TICK,
                // CommaClassId: CommaClassId._5_s,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.WING_AND_TICK,
                // CommaClassId: CommaClassId._1_91_s,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_6,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_4375_s,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_7,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_s,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_8,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_SCROLL,
                // CommaClassId: CommaClassId._49_55_s,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_SCROLL,
                // CommaClassId: CommaClassId._385_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_10,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._11_13_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_11,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._31_11_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_12,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_7_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_343_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._1_85_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_15,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._1_1225_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._25_7_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_17,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._343_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._1_17_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_19,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._14641_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_20,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._7_11_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_21,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._275_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._49_13_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_23,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._1_8575_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._35_11_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                // CommaClassId: CommaClassId._1_143_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_26,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_5_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._11_23_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_28,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._7_125_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_29,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._245_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_30,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.WING_WITH_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._143_7_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_32,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._7_25_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_33,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._1225_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_34,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._23_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._1_169_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_36,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._11_49_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_37,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._11_31_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._17_7_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_39,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._91_5_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                // CommaClassId: CommaClassId._1_19_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_42,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._1_253_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_43,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._91_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_44,
                symbolClassId: SymbolClassId.LEFT_BARB,
                // CommaClassId: CommaClassId._1_5_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_45,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._875_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._25_13_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._19_25_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_48,
                symbolClassId: SymbolClassId.TICK_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._1_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._4375_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_49_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._77_5_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._125_13_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._19_5_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_51_SPLIT,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._13_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_52,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._1_35_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._77_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_54,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._11_65_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_55,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._65_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_56,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                // CommaClassId: CommaClassId._1_7_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_57,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._625_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.BIRD_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._11_13_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_59,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._325_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_60,
                symbolClassId: SymbolClassId.TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._5_7_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._3125_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_62,
                symbolClassId: SymbolClassId.WING_AGAINST_SCROLL_AND_ARC,
                // CommaClassId: CommaClassId._85_11_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                // CommaClassId: CommaClassId._19_7_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                // CommaClassId: CommaClassId._7_55_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_65,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                // CommaClassId: CommaClassId._55_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_BARB,
                // CommaClassId: CommaClassId._11_91_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_67,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC,
                // CommaClassId: CommaClassId._125_23_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_68,
                symbolClassId: SymbolClassId.LEFT_ARC,
                // CommaClassId: CommaClassId._7_11_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_69,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._13_17_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._17_25_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_71,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._7_247_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._25_49_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72_SPLIT,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._31_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_73,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._49_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.WING_WITH_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._17_5_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_75,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._11_23_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._1_11_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_WITH_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._245_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                // CommaClassId: CommaClassId._23_5_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_78_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._7_13_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_79,
                symbolClassId: SymbolClassId.WING_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._11_17_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_80,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._5_11_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.WING_WITH_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._1_1001_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                // CommaClassId: CommaClassId._23_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_83,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._91_25_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_84,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_125_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._35_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_86,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._17_7_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_87,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._91_5_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_88,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_89,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._175_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._5_13_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_91,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._49_17_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._13_19_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_93,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._77_25_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_94,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._25_13_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_95,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._13_5_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_96,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_175_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._37_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_98,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BARB_AND_ARC,
                // CommaClassId: CommaClassId._11_325_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_99,
                symbolClassId: SymbolClassId.WING_AGAINST_BARB_AND_ARC,
                // CommaClassId: CommaClassId._13_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_100,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_35_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.WING_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._125_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                // CommaClassId: CommaClassId._11_19_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_103,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._65_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_104,
                symbolClassId: SymbolClassId.TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_7_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._625_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105_SPLIT,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_5_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._17_11_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_107,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._5_23_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_108,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._7_275_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_109,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._85_11_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_111,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._65_7_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_112,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._1_49_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._1_31_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_113_SPLIT,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._55_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_91_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_115,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB,
                // CommaClassId: CommaClassId._595_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                // CommaClassId: CommaClassId._5_49_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: false,
                },
            },
        ].reverse()
        const expectedN1T = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                // CommaClassId: CommaClassId._5_49_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_115,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB,
                // CommaClassId: CommaClassId._595_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_91_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_113_SPLIT,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._55_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._1_31_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_112,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._1_49_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_111,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._65_7_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._85_11_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_109,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_108,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._7_275_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_107,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._5_23_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._17_11_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105_SPLIT,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_5_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._625_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_104,
                symbolClassId: SymbolClassId.TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_7_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_103,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._65_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                // CommaClassId: CommaClassId._11_19_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.WING_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._125_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_100,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_35_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_99,
                symbolClassId: SymbolClassId.WING_AGAINST_BARB_AND_ARC,
                // CommaClassId: CommaClassId._13_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_98,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BARB_AND_ARC,
                // CommaClassId: CommaClassId._11_325_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._37_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_96,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_175_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_95,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._13_5_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_94,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._25_13_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_93,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._77_25_M,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._13_19_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_91,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._49_17_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._5_13_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_89,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._175_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_88,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_87,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._91_5_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_86,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._17_7_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._35_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_84,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_125_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_83,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._91_25_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                // CommaClassId: CommaClassId._23_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.WING_WITH_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._1_1001_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_80,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._5_11_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_79,
                symbolClassId: SymbolClassId.WING_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._11_17_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_78_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._7_13_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                // CommaClassId: CommaClassId._23_5_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_WITH_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._245_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._1_11_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_75,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._11_23_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.WING_WITH_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._17_5_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_73,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._49_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72_SPLIT,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._31_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._25_49_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_71,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._7_247_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._17_25_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_69,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._13_17_S,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_68,
                symbolClassId: SymbolClassId.LEFT_ARC,
                // CommaClassId: CommaClassId._7_11_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_67,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC,
                // CommaClassId: CommaClassId._125_23_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_BARB,
                // CommaClassId: CommaClassId._11_91_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_65,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                // CommaClassId: CommaClassId._55_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                // CommaClassId: CommaClassId._7_55_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                // CommaClassId: CommaClassId._19_7_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_62,
                symbolClassId: SymbolClassId.WING_AGAINST_SCROLL_AND_ARC,
                // CommaClassId: CommaClassId._85_11_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._3125_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_60,
                symbolClassId: SymbolClassId.TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._5_7_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_59,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._325_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.BIRD_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._11_13_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_57,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._625_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_56,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                // CommaClassId: CommaClassId._1_7_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_55,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._65_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_54,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._11_65_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._77_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_52,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._1_35_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_51_SPLIT,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._13_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._19_5_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._125_13_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_49_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._77_5_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._4375_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_48,
                symbolClassId: SymbolClassId.TICK_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._1_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._19_25_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._25_13_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_45,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._875_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_44,
                symbolClassId: SymbolClassId.LEFT_BARB,
                // CommaClassId: CommaClassId._1_5_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_43,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._91_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_42,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._1_253_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                // CommaClassId: CommaClassId._1_19_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_39,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._91_5_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._17_7_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_37,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._11_31_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_36,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._11_49_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._1_169_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_34,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._23_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_33,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._1225_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_32,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._7_25_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.WING_WITH_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._143_7_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_30,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_29,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._245_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_28,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._7_125_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._11_23_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_26,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_5_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                // CommaClassId: CommaClassId._1_143_C,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._35_11_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_23,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._1_8575_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._49_13_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_21,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._275_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_20,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._7_11_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_19,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._14641_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._1_17_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_17,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._343_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._25_7_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_15,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._1_1225_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._1_85_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_343_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_12,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_7_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_11,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._31_11_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_10,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._11_13_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_SCROLL,
                // CommaClassId: CommaClassId._385_k,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_8,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_SCROLL,
                // CommaClassId: CommaClassId._49_55_s,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_7,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_s,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_6,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_4375_s,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.WING_AND_TICK,
                // CommaClassId: CommaClassId._1_91_s,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_4,
                symbolClassId: SymbolClassId.TICK,
                // CommaClassId: CommaClassId._5_s,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_5_n,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.BIRD,
                // CommaClassId: CommaClassId._65_77_n,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_1,
                symbolClassId: SymbolClassId.WING,
                // CommaClassId: CommaClassId._1_455_n,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_0,
                symbolClassId: SymbolClassId.NULL,
                // CommaClassId: CommaClassId._1_u,
                section: {
                    negated: true,
                    shifted: false,
                    mirrored: true,
                },
            },
        ].reverse()
        const expectedN2A = [
            {
                boundClassId: BoundClassId.MINA_0,
                symbolClassId: SymbolClassId.NULL,
                // CommaClassId: CommaClassId._1_u,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_1,
                symbolClassId: SymbolClassId.WING,
                // CommaClassId: CommaClassId._1_455_n,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.BIRD,
                // CommaClassId: CommaClassId._65_77_n,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_5_n,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_4,
                symbolClassId: SymbolClassId.TICK,
                // CommaClassId: CommaClassId._5_s,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.WING_AND_TICK,
                // CommaClassId: CommaClassId._1_91_s,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_6,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_4375_s,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_7,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_s,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_8,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_SCROLL,
                // CommaClassId: CommaClassId._49_55_s,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_SCROLL,
                // CommaClassId: CommaClassId._385_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_10,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._11_13_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_11,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._31_11_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_12,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_7_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_343_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._1_85_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_15,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._1_1225_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._25_7_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_17,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._343_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._1_17_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_19,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._14641_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_20,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._7_11_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_21,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._275_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._49_13_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_23,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._1_8575_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._35_11_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                // CommaClassId: CommaClassId._1_143_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_26,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_5_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._11_23_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_28,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._7_125_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_29,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._245_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_30,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.WING_WITH_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._143_7_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_32,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._7_25_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_33,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._1225_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_34,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._23_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._1_169_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_36,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._11_49_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_37,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._11_31_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._17_7_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_39,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._91_5_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                // CommaClassId: CommaClassId._1_19_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_42,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._1_253_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_43,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._91_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_44,
                symbolClassId: SymbolClassId.LEFT_BARB,
                // CommaClassId: CommaClassId._1_5_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_45,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._875_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._25_13_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._19_25_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_48,
                symbolClassId: SymbolClassId.TICK_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._1_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._4375_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_49_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._77_5_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._125_13_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._19_5_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_51_SPLIT,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._13_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_52,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._1_35_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._77_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_54,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._11_65_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_55,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._65_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_56,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                // CommaClassId: CommaClassId._1_7_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_57,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._625_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.BIRD_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._11_13_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_59,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._325_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_60,
                symbolClassId: SymbolClassId.TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._5_7_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._3125_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_62,
                symbolClassId: SymbolClassId.WING_AGAINST_SCROLL_AND_ARC,
                // CommaClassId: CommaClassId._85_11_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                // CommaClassId: CommaClassId._19_7_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                // CommaClassId: CommaClassId._7_55_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_65,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                // CommaClassId: CommaClassId._55_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_BARB,
                // CommaClassId: CommaClassId._11_91_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_67,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC,
                // CommaClassId: CommaClassId._125_23_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_68,
                symbolClassId: SymbolClassId.LEFT_ARC,
                // CommaClassId: CommaClassId._7_11_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_69,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._13_17_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._17_25_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_71,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._7_247_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._25_49_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72_SPLIT,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._31_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_73,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._49_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.WING_WITH_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._17_5_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_75,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._11_23_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._1_11_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_WITH_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._245_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                // CommaClassId: CommaClassId._23_5_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_78_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._7_13_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_79,
                symbolClassId: SymbolClassId.WING_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._11_17_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_80,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._5_11_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.WING_WITH_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._1_1001_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                // CommaClassId: CommaClassId._23_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_83,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._91_25_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_84,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_125_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._35_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_86,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._17_7_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_87,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._91_5_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_88,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_89,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._175_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._5_13_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_91,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._49_17_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._13_19_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_93,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._77_25_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_94,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._25_13_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_95,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._13_5_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_96,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_175_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._37_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_98,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BARB_AND_ARC,
                // CommaClassId: CommaClassId._11_325_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_99,
                symbolClassId: SymbolClassId.WING_AGAINST_BARB_AND_ARC,
                // CommaClassId: CommaClassId._13_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_100,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_35_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.WING_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._125_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                // CommaClassId: CommaClassId._11_19_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_103,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._65_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_104,
                symbolClassId: SymbolClassId.TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_7_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._625_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105_SPLIT,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_5_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._17_11_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_107,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._5_23_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_108,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._7_275_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_109,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._85_11_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_111,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._65_7_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_112,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._1_49_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._1_31_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_113_SPLIT,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._55_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_91_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_115,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB,
                // CommaClassId: CommaClassId._595_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                // CommaClassId: CommaClassId._5_49_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: false,
                },
            },
        ].reverse()
        const expectedN2T = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                // CommaClassId: CommaClassId._5_49_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_115,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB,
                // CommaClassId: CommaClassId._595_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_91_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_113_SPLIT,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._55_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._1_31_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_112,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._1_49_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_111,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._65_7_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._85_11_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_109,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_108,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._7_275_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_107,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._5_23_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._17_11_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105_SPLIT,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_5_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._625_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_104,
                symbolClassId: SymbolClassId.TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_7_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_103,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._65_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                // CommaClassId: CommaClassId._11_19_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.WING_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._125_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_100,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_35_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_99,
                symbolClassId: SymbolClassId.WING_AGAINST_BARB_AND_ARC,
                // CommaClassId: CommaClassId._13_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_98,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BARB_AND_ARC,
                // CommaClassId: CommaClassId._11_325_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._37_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_96,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_175_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_95,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._13_5_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_94,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._25_13_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_93,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._77_25_M,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._13_19_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_91,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._49_17_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._5_13_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_89,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._175_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_88,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_87,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._91_5_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_86,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._17_7_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._35_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_84,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_125_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_83,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._91_25_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                // CommaClassId: CommaClassId._23_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.WING_WITH_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._1_1001_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_80,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._5_11_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_79,
                symbolClassId: SymbolClassId.WING_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._11_17_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_78_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._7_13_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                // CommaClassId: CommaClassId._23_5_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_WITH_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._245_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._1_11_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_75,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._11_23_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.WING_WITH_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._17_5_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_73,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._49_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72_SPLIT,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._31_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._25_49_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_71,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._7_247_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._17_25_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_69,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._13_17_S,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_68,
                symbolClassId: SymbolClassId.LEFT_ARC,
                // CommaClassId: CommaClassId._7_11_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_67,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC,
                // CommaClassId: CommaClassId._125_23_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_BARB,
                // CommaClassId: CommaClassId._11_91_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_65,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                // CommaClassId: CommaClassId._55_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                // CommaClassId: CommaClassId._7_55_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                // CommaClassId: CommaClassId._19_7_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_62,
                symbolClassId: SymbolClassId.WING_AGAINST_SCROLL_AND_ARC,
                // CommaClassId: CommaClassId._85_11_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._3125_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_60,
                symbolClassId: SymbolClassId.TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._5_7_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_59,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._325_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.BIRD_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._11_13_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_57,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._625_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_56,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                // CommaClassId: CommaClassId._1_7_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_55,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._65_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_54,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._11_65_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._77_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_52,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._1_35_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_51_SPLIT,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._13_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._19_5_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._125_13_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_49_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._77_5_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._4375_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_48,
                symbolClassId: SymbolClassId.TICK_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._1_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._19_25_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._25_13_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_45,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._875_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_44,
                symbolClassId: SymbolClassId.LEFT_BARB,
                // CommaClassId: CommaClassId._1_5_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_43,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._91_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_42,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._1_253_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                // CommaClassId: CommaClassId._1_19_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_39,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._91_5_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._17_7_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_37,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._11_31_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_36,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._11_49_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._1_169_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_34,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._23_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_33,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._1225_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_32,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._7_25_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.WING_WITH_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._143_7_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_30,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_29,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._245_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_28,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._7_125_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._11_23_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_26,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_5_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                // CommaClassId: CommaClassId._1_143_C,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._35_11_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_23,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._1_8575_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._49_13_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_21,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._275_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_20,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._7_11_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_19,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._14641_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._1_17_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_17,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._343_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._25_7_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_15,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._1_1225_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._1_85_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_343_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_12,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_7_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_11,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._31_11_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_10,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._11_13_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_SCROLL,
                // CommaClassId: CommaClassId._385_k,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_8,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_SCROLL,
                // CommaClassId: CommaClassId._49_55_s,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_7,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_s,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_6,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_4375_s,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.WING_AND_TICK,
                // CommaClassId: CommaClassId._1_91_s,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_4,
                symbolClassId: SymbolClassId.TICK,
                // CommaClassId: CommaClassId._5_s,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_5_n,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.BIRD,
                // CommaClassId: CommaClassId._65_77_n,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_1,
                symbolClassId: SymbolClassId.WING,
                // CommaClassId: CommaClassId._1_455_n,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_0,
                symbolClassId: SymbolClassId.NULL,
                // CommaClassId: CommaClassId._1_u,
                section: {
                    negated: true,
                    shifted: true,
                    mirrored: true,
                },
            },
        ].reverse()

        const expectedP1A = [
            {
                boundClassId: BoundClassId.MINA_0,
                symbolClassId: SymbolClassId.NULL,
                // CommaClassId: CommaClassId._1_u,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_1,
                symbolClassId: SymbolClassId.WING,
                // CommaClassId: CommaClassId._1_455_n,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.BIRD,
                // CommaClassId: CommaClassId._65_77_n,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_5_n,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_4,
                symbolClassId: SymbolClassId.TICK,
                // CommaClassId: CommaClassId._5_s,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.WING_AND_TICK,
                // CommaClassId: CommaClassId._1_91_s,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_6,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_4375_s,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_7,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_s,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_8,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_SCROLL,
                // CommaClassId: CommaClassId._49_55_s,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_SCROLL,
                // CommaClassId: CommaClassId._385_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_10,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._11_13_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_11,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._31_11_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_12,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_7_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_343_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._1_85_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_15,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._1_1225_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._25_7_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_17,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._343_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._1_17_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_19,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._14641_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_20,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._7_11_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_21,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._275_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._49_13_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_23,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._1_8575_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._35_11_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                // CommaClassId: CommaClassId._1_143_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_26,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_5_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._11_23_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_28,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._7_125_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_29,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._245_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_30,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.WING_WITH_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._143_7_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_32,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._7_25_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_33,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._1225_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_34,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._23_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._1_169_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_36,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._11_49_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_37,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._11_31_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._17_7_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_39,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._91_5_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                // CommaClassId: CommaClassId._1_19_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_42,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._1_253_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_43,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._91_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_44,
                symbolClassId: SymbolClassId.LEFT_BARB,
                // CommaClassId: CommaClassId._1_5_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_45,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._875_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._25_13_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._19_25_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_48,
                symbolClassId: SymbolClassId.TICK_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._1_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._4375_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_49_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._77_5_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._125_13_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._19_5_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_51_SPLIT,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._13_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_52,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._1_35_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._77_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_54,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._11_65_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_55,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._65_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_56,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                // CommaClassId: CommaClassId._1_7_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_57,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._625_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.BIRD_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._11_13_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_59,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._325_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_60,
                symbolClassId: SymbolClassId.TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._5_7_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._3125_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_62,
                symbolClassId: SymbolClassId.WING_AGAINST_SCROLL_AND_ARC,
                // CommaClassId: CommaClassId._85_11_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                // CommaClassId: CommaClassId._19_7_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                // CommaClassId: CommaClassId._7_55_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_65,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                // CommaClassId: CommaClassId._55_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_BARB,
                // CommaClassId: CommaClassId._11_91_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_67,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC,
                // CommaClassId: CommaClassId._125_23_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_68,
                symbolClassId: SymbolClassId.LEFT_ARC,
                // CommaClassId: CommaClassId._7_11_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_69,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._13_17_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._17_25_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_71,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._7_247_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._25_49_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72_SPLIT,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._31_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_73,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._49_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.WING_WITH_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._17_5_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_75,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._11_23_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._1_11_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_WITH_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._245_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                // CommaClassId: CommaClassId._23_5_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_78_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._7_13_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_79,
                symbolClassId: SymbolClassId.WING_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._11_17_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_80,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._5_11_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.WING_WITH_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._1_1001_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                // CommaClassId: CommaClassId._23_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_83,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._91_25_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_84,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_125_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._35_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_86,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._17_7_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_87,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._91_5_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_88,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_89,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._175_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._5_13_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_91,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._49_17_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._13_19_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_93,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._77_25_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_94,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._25_13_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_95,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._13_5_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_96,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_175_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._37_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_98,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BARB_AND_ARC,
                // CommaClassId: CommaClassId._11_325_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_99,
                symbolClassId: SymbolClassId.WING_AGAINST_BARB_AND_ARC,
                // CommaClassId: CommaClassId._13_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_100,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_35_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.WING_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._125_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                // CommaClassId: CommaClassId._11_19_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_103,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._65_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_104,
                symbolClassId: SymbolClassId.TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_7_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._625_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105_SPLIT,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_5_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._17_11_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_107,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._5_23_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_108,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._7_275_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_109,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._85_11_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_111,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._65_7_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_112,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._1_49_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._1_31_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_113_SPLIT,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._55_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_91_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_115,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB,
                // CommaClassId: CommaClassId._595_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                // CommaClassId: CommaClassId._5_49_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: false,
                },
            },
        ]
        const expectedP1T = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                // CommaClassId: CommaClassId._5_49_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_115,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB,
                // CommaClassId: CommaClassId._595_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_91_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_113_SPLIT,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._55_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._1_31_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_112,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._1_49_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_111,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._65_7_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._85_11_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_109,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_108,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._7_275_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_107,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._5_23_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._17_11_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105_SPLIT,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_5_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._625_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_104,
                symbolClassId: SymbolClassId.TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_7_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_103,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._65_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                // CommaClassId: CommaClassId._11_19_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.WING_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._125_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_100,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_35_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_99,
                symbolClassId: SymbolClassId.WING_AGAINST_BARB_AND_ARC,
                // CommaClassId: CommaClassId._13_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_98,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BARB_AND_ARC,
                // CommaClassId: CommaClassId._11_325_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._37_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_96,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_175_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_95,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._13_5_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_94,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._25_13_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_93,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._77_25_M,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._13_19_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_91,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._49_17_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._5_13_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_89,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._175_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_88,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_87,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._91_5_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_86,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._17_7_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._35_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_84,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_125_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_83,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._91_25_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                // CommaClassId: CommaClassId._23_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.WING_WITH_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._1_1001_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_80,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._5_11_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_79,
                symbolClassId: SymbolClassId.WING_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._11_17_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_78_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._7_13_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                // CommaClassId: CommaClassId._23_5_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_WITH_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._245_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._1_11_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_75,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._11_23_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.WING_WITH_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._17_5_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_73,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._49_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72_SPLIT,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._31_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._25_49_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_71,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._7_247_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._17_25_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_69,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._13_17_S,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_68,
                symbolClassId: SymbolClassId.LEFT_ARC,
                // CommaClassId: CommaClassId._7_11_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_67,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC,
                // CommaClassId: CommaClassId._125_23_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_BARB,
                // CommaClassId: CommaClassId._11_91_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_65,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                // CommaClassId: CommaClassId._55_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                // CommaClassId: CommaClassId._7_55_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                // CommaClassId: CommaClassId._19_7_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_62,
                symbolClassId: SymbolClassId.WING_AGAINST_SCROLL_AND_ARC,
                // CommaClassId: CommaClassId._85_11_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._3125_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_60,
                symbolClassId: SymbolClassId.TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._5_7_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_59,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._325_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.BIRD_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._11_13_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_57,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._625_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_56,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                // CommaClassId: CommaClassId._1_7_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_55,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._65_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_54,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._11_65_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._77_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_52,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._1_35_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_51_SPLIT,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._13_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._19_5_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._125_13_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_49_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._77_5_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._4375_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_48,
                symbolClassId: SymbolClassId.TICK_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._1_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._19_25_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._25_13_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_45,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._875_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_44,
                symbolClassId: SymbolClassId.LEFT_BARB,
                // CommaClassId: CommaClassId._1_5_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_43,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._91_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_42,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._1_253_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                // CommaClassId: CommaClassId._1_19_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_39,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._91_5_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._17_7_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_37,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._11_31_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_36,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._11_49_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._1_169_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_34,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._23_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_33,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._1225_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_32,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._7_25_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.WING_WITH_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._143_7_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_30,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_29,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._245_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_28,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._7_125_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._11_23_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_26,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_5_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                // CommaClassId: CommaClassId._1_143_C,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._35_11_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_23,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._1_8575_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._49_13_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_21,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._275_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_20,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._7_11_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_19,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._14641_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._1_17_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_17,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._343_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._25_7_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_15,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._1_1225_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._1_85_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_343_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_12,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_7_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_11,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._31_11_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_10,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._11_13_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_SCROLL,
                // CommaClassId: CommaClassId._385_k,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_8,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_SCROLL,
                // CommaClassId: CommaClassId._49_55_s,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_7,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_s,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_6,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_4375_s,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.WING_AND_TICK,
                // CommaClassId: CommaClassId._1_91_s,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_4,
                symbolClassId: SymbolClassId.TICK,
                // CommaClassId: CommaClassId._5_s,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_5_n,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.BIRD,
                // CommaClassId: CommaClassId._65_77_n,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_1,
                symbolClassId: SymbolClassId.WING,
                // CommaClassId: CommaClassId._1_455_n,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_0,
                symbolClassId: SymbolClassId.NULL,
                // CommaClassId: CommaClassId._1_u,
                section: {
                    negated: false,
                    shifted: false,
                    mirrored: true,
                },
            },
        ]
        const expectedP2A = [
            {
                boundClassId: BoundClassId.MINA_0,
                symbolClassId: SymbolClassId.NULL,
                // CommaClassId: CommaClassId._1_u,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_1,
                symbolClassId: SymbolClassId.WING,
                // CommaClassId: CommaClassId._1_455_n,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.BIRD,
                // CommaClassId: CommaClassId._65_77_n,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_5_n,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_4,
                symbolClassId: SymbolClassId.TICK,
                // CommaClassId: CommaClassId._5_s,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.WING_AND_TICK,
                // CommaClassId: CommaClassId._1_91_s,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_6,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_4375_s,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_7,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_s,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_8,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_SCROLL,
                // CommaClassId: CommaClassId._49_55_s,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_SCROLL,
                // CommaClassId: CommaClassId._385_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_10,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._11_13_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_11,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._31_11_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_12,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_7_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_343_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._1_85_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_15,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._1_1225_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._25_7_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_17,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._343_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._1_17_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_19,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._14641_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_20,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._7_11_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_21,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._275_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._49_13_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_23,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._1_8575_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._35_11_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                // CommaClassId: CommaClassId._1_143_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_26,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_5_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._11_23_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_28,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._7_125_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_29,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._245_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_30,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.WING_WITH_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._143_7_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_32,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._7_25_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_33,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._1225_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_34,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._23_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._1_169_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_36,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._11_49_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_37,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._11_31_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._17_7_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_39,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._91_5_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                // CommaClassId: CommaClassId._1_19_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_42,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._1_253_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_43,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._91_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_44,
                symbolClassId: SymbolClassId.LEFT_BARB,
                // CommaClassId: CommaClassId._1_5_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_45,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._875_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._25_13_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._19_25_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_48,
                symbolClassId: SymbolClassId.TICK_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._1_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._4375_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_49_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._77_5_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._125_13_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._19_5_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_51_SPLIT,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._13_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_52,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._1_35_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._77_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_54,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._11_65_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_55,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._65_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_56,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                // CommaClassId: CommaClassId._1_7_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_57,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._625_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.BIRD_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._11_13_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_59,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._325_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_60,
                symbolClassId: SymbolClassId.TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._5_7_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._3125_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_62,
                symbolClassId: SymbolClassId.WING_AGAINST_SCROLL_AND_ARC,
                // CommaClassId: CommaClassId._85_11_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                // CommaClassId: CommaClassId._19_7_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                // CommaClassId: CommaClassId._7_55_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_65,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                // CommaClassId: CommaClassId._55_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_BARB,
                // CommaClassId: CommaClassId._11_91_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_67,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC,
                // CommaClassId: CommaClassId._125_23_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_68,
                symbolClassId: SymbolClassId.LEFT_ARC,
                // CommaClassId: CommaClassId._7_11_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_69,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._13_17_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._17_25_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_71,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._7_247_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._25_49_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72_SPLIT,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._31_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_73,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._49_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.WING_WITH_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._17_5_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_75,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._11_23_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._1_11_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_WITH_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._245_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                // CommaClassId: CommaClassId._23_5_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_78_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._7_13_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_79,
                symbolClassId: SymbolClassId.WING_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._11_17_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_80,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._5_11_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.WING_WITH_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._1_1001_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                // CommaClassId: CommaClassId._23_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_83,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._91_25_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_84,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_125_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._35_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_86,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._17_7_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_87,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._91_5_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_88,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_89,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._175_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._5_13_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_91,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._49_17_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._13_19_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_93,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._77_25_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_94,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._25_13_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_95,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._13_5_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_96,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_175_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._37_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_98,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BARB_AND_ARC,
                // CommaClassId: CommaClassId._11_325_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_99,
                symbolClassId: SymbolClassId.WING_AGAINST_BARB_AND_ARC,
                // CommaClassId: CommaClassId._13_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_100,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_35_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.WING_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._125_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                // CommaClassId: CommaClassId._11_19_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_103,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._65_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_104,
                symbolClassId: SymbolClassId.TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_7_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._625_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105_SPLIT,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_5_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._17_11_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_107,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._5_23_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_108,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._7_275_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_109,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._85_11_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_111,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._65_7_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_112,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._1_49_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._1_31_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_113_SPLIT,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._55_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_91_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_115,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB,
                // CommaClassId: CommaClassId._595_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                // CommaClassId: CommaClassId._5_49_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: false,
                },
            },
        ]
        const expectedP2T = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                // CommaClassId: CommaClassId._5_49_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_115,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB,
                // CommaClassId: CommaClassId._595_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_91_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_113_SPLIT,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._55_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._1_31_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_112,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._1_49_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_111,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC_AND_BARB,
                // CommaClassId: CommaClassId._65_7_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_BARB,
                // CommaClassId: CommaClassId._85_11_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_109,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_108,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._7_275_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_107,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._5_23_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._17_11_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105_SPLIT,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                // CommaClassId: CommaClassId._11_5_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._625_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_104,
                symbolClassId: SymbolClassId.TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_7_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_103,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._65_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                // CommaClassId: CommaClassId._11_19_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.WING_WITH_BARB_AND_ARC,
                // CommaClassId: CommaClassId._125_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_100,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                // CommaClassId: CommaClassId._1_35_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_99,
                symbolClassId: SymbolClassId.WING_AGAINST_BARB_AND_ARC,
                // CommaClassId: CommaClassId._13_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_98,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BARB_AND_ARC,
                // CommaClassId: CommaClassId._11_325_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._37_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_96,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_175_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_95,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._13_5_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_94,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._25_13_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_93,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._77_25_M,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._13_19_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_91,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._49_17_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._5_13_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_89,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._175_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_88,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_87,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._91_5_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_86,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._17_7_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._35_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_84,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._1_125_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_83,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB,
                // CommaClassId: CommaClassId._91_25_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                // CommaClassId: CommaClassId._23_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.WING_WITH_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._1_1001_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_80,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._5_11_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_79,
                symbolClassId: SymbolClassId.WING_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._11_17_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_78_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._7_13_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                // CommaClassId: CommaClassId._23_5_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_WITH_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._245_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._1_11_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_75,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL,
                // CommaClassId: CommaClassId._11_23_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.WING_WITH_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._17_5_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_73,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._49_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72_SPLIT,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_ARC,
                // CommaClassId: CommaClassId._31_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._25_49_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_71,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._7_247_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._17_25_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_69,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_ARC,
                // CommaClassId: CommaClassId._13_17_S,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_68,
                symbolClassId: SymbolClassId.LEFT_ARC,
                // CommaClassId: CommaClassId._7_11_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_67,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC,
                // CommaClassId: CommaClassId._125_23_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_BARB,
                // CommaClassId: CommaClassId._11_91_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_65,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                // CommaClassId: CommaClassId._55_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                // CommaClassId: CommaClassId._7_55_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                // CommaClassId: CommaClassId._19_7_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_62,
                symbolClassId: SymbolClassId.WING_AGAINST_SCROLL_AND_ARC,
                // CommaClassId: CommaClassId._85_11_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._3125_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_60,
                symbolClassId: SymbolClassId.TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._5_7_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_59,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._325_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.BIRD_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._11_13_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_57,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_ARC,
                // CommaClassId: CommaClassId._625_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_56,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                // CommaClassId: CommaClassId._1_7_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_55,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._65_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_54,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._11_65_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._77_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_52,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._1_35_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_51_SPLIT,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_RIGHT_ARC,
                // CommaClassId: CommaClassId._13_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._19_5_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._125_13_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_49_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._77_5_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.WING_AND_TICK_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._4375_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_48,
                symbolClassId: SymbolClassId.TICK_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._1_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                // CommaClassId: CommaClassId._19_25_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._25_13_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_45,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_BARB,
                // CommaClassId: CommaClassId._875_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_44,
                symbolClassId: SymbolClassId.LEFT_BARB,
                // CommaClassId: CommaClassId._1_5_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_43,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._91_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_42,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._1_253_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                // CommaClassId: CommaClassId._1_19_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._1_25_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_39,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_LEFT_BARB,
                // CommaClassId: CommaClassId._91_5_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._17_7_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_37,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._11_31_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_36,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._11_49_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._1_169_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_34,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._23_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_33,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._1225_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_32,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_BOATHOOK,
                // CommaClassId: CommaClassId._7_25_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.WING_WITH_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._143_7_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_30,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_29,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._245_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_28,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._7_125_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.WING_FROM_TICK_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._11_23_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_26,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                // CommaClassId: CommaClassId._17_5_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                // CommaClassId: CommaClassId._1_143_C,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._35_11_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_23,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._1_8575_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.BIRD_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._49_13_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_21,
                symbolClassId: SymbolClassId.WING_WITH_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._275_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_20,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._7_11_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_19,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_SCROLL,
                // CommaClassId: CommaClassId._14641_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._1_17_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_17,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._343_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._25_7_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_15,
                symbolClassId: SymbolClassId.WING_FROM_TICK_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._1_1225_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                // CommaClassId: CommaClassId._1_85_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.WING_WITH_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_343_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_12,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                // CommaClassId: CommaClassId._5_7_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_11,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._31_11_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_10,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_SCROLL,
                // CommaClassId: CommaClassId._11_13_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.BIRD_WITH_LEFT_SCROLL,
                // CommaClassId: CommaClassId._385_k,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_8,
                symbolClassId: SymbolClassId.WING_WITH_LEFT_SCROLL,
                // CommaClassId: CommaClassId._49_55_s,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_7,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_s,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_6,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_4375_s,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.WING_AND_TICK,
                // CommaClassId: CommaClassId._1_91_s,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_4,
                symbolClassId: SymbolClassId.TICK,
                // CommaClassId: CommaClassId._5_s,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                // CommaClassId: CommaClassId._19_5_n,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.BIRD,
                // CommaClassId: CommaClassId._65_77_n,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_1,
                symbolClassId: SymbolClassId.WING,
                // CommaClassId: CommaClassId._1_455_n,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
            {
                boundClassId: BoundClassId.MINA_0,
                symbolClassId: SymbolClassId.NULL,
                // CommaClassId: CommaClassId._1_u,
                section: {
                    negated: false,
                    shifted: true,
                    mirrored: true,
                },
            },
        ]

        const expected = [
            // ...expectedN2T,
            // ...expectedN2A,
            // ...expectedN1T,
            // ...expectedN1A,

            ...expectedP1A,
            ...expectedP1T,
            ...expectedP2A,
            ...expectedP2T,
        ] as CaptureZone[]
        expect(actual).toEqual(expected)
    })
})
