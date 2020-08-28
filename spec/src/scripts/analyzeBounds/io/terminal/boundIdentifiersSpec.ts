import {
    Cents,
    Id,
    Monzo,
    Name,
    Prime,
    Proportion,
    Ratio,
    Sopfr,
} from "../../../../../../src/general"
import { ApotomeSlope, N2D3P9, SagittalComma, SymbolLongAscii } from "../../../../../../src/sagittal"
import { Bound, JiSymbol, Level, Mina } from "../../../../../../src/sagittal/notations/ji"
import { INA_SIZES } from "../../../../../../src/sagittal/notations/ji/intervals"
import { SymbolSet, SymbolUnicode } from "../../../../../../src/sagittal/notations/types"
import { extractBoundIdentifiers } from "../../../../../../src/scripts/analyzeBounds/io/terminal/boundIdentifiers"
import { BoundIdentifiers } from "../../../../../../src/scripts/analyzeBounds/io/terminal/types"

describe("extractBoundIdentifiers", () => {
    const bound = {
        cents: 23.1164196495597 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
        id: 47 as Id<Bound>,
    }

    it("returns helpful identifying information about the bound", () => {
        const actual: BoundIdentifiers = extractBoundIdentifiers(bound)

        const expected: BoundIdentifiers = {
            extremeLevelLesserBoundedSymbol: ".)/|" as SymbolLongAscii,
            extremeLevelGreaterBoundedSymbol: "'/|" as SymbolLongAscii,
            cents: 23.1164196495597 as Cents as Cents,
            boundedSymbols: {
                id: 47 as Id<Bound>,
                [ Level.ULTRA ]: [
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Cents,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / INA_SIZES[ Level.ULTRA ] as Proportion,
                        ascii: ".)/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        lowestSymbolSet: SymbolSet.HERCULEAN,
                        mina: 47 as Mina,
                        primaryComma: {
                            id: 47 as Id<SagittalComma>,
                            apotomeSlope: -2.412 as ApotomeSlope,
                            fiveRoughSopfr: 29 as Sopfr<5>,
                            limit: 19 as Prime,
                            ratio: [76, 75] as Ratio,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo,
                            cents: 22.9305875372457 as Cents,
                            name: "19/25C" as Name<SagittalComma>,
                            n2d3p9: 55.70987654320989 as N2D3P9,
                        } as SagittalComma,
                        id: 47 as Id<JiSymbol>, // not the best example since id and mina are the same up to this point
                        elements: [".|", ")|", "/|"] as SymbolLongAscii[],
                    },
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Cents,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / INA_SIZES[ Level.ULTRA ] as Proportion,
                        ascii: "'/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        lowestSymbolSet: SymbolSet.HERCULEAN,
                        mina: 48 as Mina,
                        primaryComma: {
                            id: 48 as Id<SagittalComma>,
                            apotomeSlope: 10.555 as ApotomeSlope,
                            fiveRoughSopfr: 0 as Sopfr<5>,
                            limit: 3 as Prime,
                            ratio: [531441, 524288] as Ratio,
                            monzo: [-19, 12] as Monzo,
                            cents: 23.460010384649 as Cents,
                            name: "1C" as Name<SagittalComma>,
                            n2d3p9: 0.1111111111111111 as N2D3P9,
                        } as SagittalComma,
                        id: 48 as Id<JiSymbol>,
                        elements: ["'|", "/|"] as SymbolLongAscii[],
                    },
                ],
                [ Level.EXTREME ]: [
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Cents,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / INA_SIZES[ Level.EXTREME ] as Proportion,
                        ascii: ".)/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        lowestSymbolSet: SymbolSet.HERCULEAN,
                        mina: 47 as Mina,
                        primaryComma: {
                            id: 47 as Id<SagittalComma>,
                            apotomeSlope: -2.412 as ApotomeSlope,
                            fiveRoughSopfr: 29 as Sopfr<5>,
                            limit: 19 as Prime,
                            ratio: [76, 75] as Ratio,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo,
                            cents: 22.9305875372457 as Cents,
                            name: "19/25C" as Name<SagittalComma>,
                            n2d3p9: 55.70987654320989 as N2D3P9,
                        } as SagittalComma,
                        id: 47 as Id<JiSymbol>,
                        elements: [".|", ")|", "/|"] as SymbolLongAscii[],
                    },
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Cents,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / INA_SIZES[ Level.EXTREME ] as Proportion,
                        ascii: "'/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        lowestSymbolSet: SymbolSet.HERCULEAN,
                        mina: 48 as Mina,
                        primaryComma: {
                            id: 48 as Id<SagittalComma>,
                            apotomeSlope: 10.555 as ApotomeSlope,
                            fiveRoughSopfr: 0 as Sopfr<5>,
                            limit: 3 as Prime,
                            ratio: [531441, 524288] as Ratio,
                            monzo: [-19, 12] as Monzo,
                            cents: 23.460010384649 as Cents,
                            name: "1C" as Name<SagittalComma>,
                            n2d3p9: 0.1111111111111111 as N2D3P9,
                        } as SagittalComma,
                        id: 48 as Id<JiSymbol>,
                        elements: ["'|", "/|"] as SymbolLongAscii[],
                    },
                ],
                [ Level.INSANE ]: [
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Cents,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / INA_SIZES[ Level.INSANE ] as Proportion,
                        ascii: ".)/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        mina: 47 as Mina,
                        lowestSymbolSet: SymbolSet.HERCULEAN,
                        id: 47 as Id<JiSymbol>,
                        primaryComma: {
                            id: 47 as Id<SagittalComma>,
                            apotomeSlope: -2.412 as ApotomeSlope,
                            fiveRoughSopfr: 29 as Sopfr<5>,
                            limit: 19 as Prime,
                            ratio: [76, 75] as Ratio,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo,
                            cents: 22.9305875372457 as Cents,
                            name: "19/25C" as Name<SagittalComma>,
                            n2d3p9: 55.70987654320989 as N2D3P9,
                        } as SagittalComma,
                        elements: [".|", ")|", "/|"] as SymbolLongAscii[],
                    },
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Cents,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / INA_SIZES[ Level.INSANE ] as Proportion,
                        ascii: "'/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        mina: 48 as Mina,
                        lowestSymbolSet: SymbolSet.HERCULEAN,
                        id: 48 as Id<JiSymbol>,
                        primaryComma: {
                            id: 48 as Id<SagittalComma>,
                            apotomeSlope: 10.555 as ApotomeSlope,
                            fiveRoughSopfr: 0 as Sopfr<5>,
                            limit: 3 as Prime,
                            ratio: [531441, 524288] as Ratio,
                            monzo: [-19, 12] as Monzo,
                            cents: 23.460010384649 as Cents,
                            name: "1C" as Name<SagittalComma>,
                            n2d3p9: 0.1111111111111111 as N2D3P9,
                        } as SagittalComma,
                        elements: ["'|", "/|"] as SymbolLongAscii[],
                    },
                ],
            },
            lesserBoundedMina: 47 as Mina,
            greaterBoundedMina: 48 as Mina,
        }
        expect(actual).toEqual(expected)
    })
})
