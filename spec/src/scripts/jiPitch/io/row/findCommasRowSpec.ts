import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Count,
    Decimal,
    Direction,
    Exponent,
    Max,
    Monzo,
    Name,
    Prime,
    Quotient,
    Row,
    Sopfr,
    Two3FreeClass,
} from "../../../../../../src/general"
import {ApotomeSlope, CommaAnalysis, CommaClass, CommaClassId} from "../../../../../../src/sagittal"
import {N2D3P9} from "../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9"
import {jiPitchScriptGroupSettings} from "../../../../../../src/scripts/jiPitch/globals"
import {computeFindCommasRow} from "../../../../../../src/scripts/jiPitch/io/row"
import {FindCommasField} from "../../../../../../src/scripts/jiPitch/types"
import {commaAnalysisFixture, two3FreeClassAnalysisFixture} from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computeFindCommasRow", (): void => {
    // This comma is made up and internally inconsistent.
    const commaAnalysis: CommaAnalysis = {
        ...commaAnalysisFixture,
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo<{rational: true}>,
        quotient: [5, 4] as Quotient<{rational: true}>,
        name: "1/5C" as Name<Comma>,
        apotomeSlope: 8.2 as ApotomeSlope,
        aas: 8.2 as Abs<ApotomeSlope>,
        ate: 1 as Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
        two3FreeClassAnalysis: {
            ...two3FreeClassAnalysisFixture,
            two3FreePrimeLimit: 14 as Max<Prime<{rough: 5}>>,
            two3FreeCopfr: 1 as Copfr<{rough: 5}>,
            two3FreeSopfr: 13 as Sopfr<{rough: 5}>,
            n2d3p9: 18.4567 as N2D3P9,
            two3FreeClass: {
                monzo: [0, 0, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
            } as Two3FreeClass,
        },
    }
    const commaClassId = CommaClassId._1_5_C
    const maxMonzoLength = 5 as Max<Count<Exponent<Prime>>>

    it("takes the properties of the comma and puts them in order in a row", (): void => {
        const actual = computeFindCommasRow(commaAnalysis, commaClassId, maxMonzoLength)

        const expected = [
            "    /|  ",         // Comma class
            "1/5C",             // Comma name
            "5",                // Quotient numerator
            "/",                // Quotient vinculum
            "4",                // Quotient denominator
            "[",                // Monzo [
            "  0    ",          // Monzo 2
            " -1    ",          // Monzo 3
            "  1    ",          // Monzo 5
            "",                 // Monzo 7
            "",                 // Monzo 11
            "⟩",                // Monzo ⟩
            "        11.200¢",  // Cents
            "  8.200",          // Apotome slope
            "  8.200",          // AAS
            "  1    ",          // ATE
            " 14    ",          // 2,3-free prime limit
            "5",                // 2,3-free class name
            "/",                // 2,3-free class name
            "1",                // 2,3-free class name
            "₍₂,₃₎",            // 2,3-free class name
            "  1    ",          // 2,3-free CoPFR
            " 13    ",          // 2,3-free SoPFR
            " 18.457",          // N2D3P9
        ] as Row<{of: CommaAnalysis}>
        expect(actual).toEqual(expected)
    })

    it("can filter excluded fields", (): void => {
        jiPitchScriptGroupSettings.excludedFields = [FindCommasField.AAS, FindCommasField.ATE]
        const actual = computeFindCommasRow(commaAnalysis, commaClassId, maxMonzoLength)

        const expected = [
            "    /|  ",         // Comma class
            "1/5C",             // Comma name
            "5",                // Quotient numerator
            "/",                // Quotient vinculum
            "4",                // Quotient denominator
            "[",                // Monzo [
            "  0    ",          // Monzo 2
            " -1    ",          // Monzo 3
            "  1    ",          // Monzo 5
            "",                 // Monzo 7
            "",                 // Monzo 11
            "⟩",                // Monzo ⟩
            "        11.200¢",  // Cents
            "  8.200",          // Apotome slope
            " 14    ",          // 2,3-free prime limit
            "5",                // 2,3-free class name
            "/",                // 2,3-free class name
            "1",                // 2,3-free class name
            "₍₂,₃₎",            // 2,3-free class name
            "  1    ",          // 2,3-free CoPFR
            " 13    ",          // 2,3-free SoPFR
            " 18.457",          // N2D3P9
        ] as Row<{of: CommaAnalysis}>
        expect(actual).toEqual(expected)
    })
})
