import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Direction,
    Exponent,
    Id,
    Integer,
    Monzo,
    Name,
    Prime,
    Ratio,
    Row,
    Sopfr,
} from "../../../../../../src/general"
import { ApotomeSlope, CommaAnalysis, SymbolClass, TwoThreeFreeClassAnalysis } from "../../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9"
import { computeFindCommasRow } from "../../../../../../src/scripts/jiPitch/io/row"

describe("computeFindCommasRow", (): void => {
    // This comma is made up and internally inconsistent.
    // Only the name is important as it is used to find the symbol.
    const commaAnalysis: CommaAnalysis = {
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo,
        ratio: [5, 4] as Ratio,
        name: "1/5C" as Name<Comma>,
        apotomeSlope: 8.2 as ApotomeSlope,
        aas: 8.2 as Abs<ApotomeSlope>,
        ate: 1 as Abs<Integer & Exponent<3 & Prime>>,
        twoThreeFreeClassAnalysis: {
            twoThreeFreePrimeLimit: 14 as Prime,
            twoThreeFreeCopfr: 1 as Copfr<{ rough: 5 }>,
            twoThreeFreeSopfr: 13 as Sopfr<{ rough: 5 }>,
            monzo: [0, 0, 1] as Monzo<{ rough: 5, direction: Direction.SUPER }>,
            n2d3p9: 18.4567 as N2D3P9,
        } as TwoThreeFreeClassAnalysis,
    } as CommaAnalysis
    const symbolClassId = 44 as Id<SymbolClass>

    it("takes the properties of the comma and puts them in order in a row", (): void => {
        const actual = computeFindCommasRow(commaAnalysis, symbolClassId)

        const expected = [
            "    /|  ",         // symbol class
            "1/5C",             // comma name
            "5/4",              // ratio
            "[   0  -1   1 ⟩",  // monzo
            " 11.200",          // cents
            "  8.200",          // apotome slope
            "  8.200",          // apotome slope
            "  1    ",          // apotome slope
            " 14    ",          // prime limit
            "5/1",              // 2,3-free class
            "  1    ",          // 2,3-free CoPFR
            " 13    ",          // 2,3-free SoPFR
            " 18.457",          // N2D3P9
        ] as Row<{ of: CommaAnalysis }>
        expect(actual).toEqual(expected)
    })
})
