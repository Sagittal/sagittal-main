import { ApotomeSlope, Cents, Id, Monzo, N2D3P9, Name, Position, Prime, Ratio, Sopfr } from "../../../../src/general"
import { getSymbol } from "../../../../src/notations/ji/symbol"
import { JiSymbol, Level, Mina } from "../../../../src/notations/ji"
import { SymbolLongAscii } from "../../../../src/notations"
import { SymbolUnicode } from "../../../../src/notations/types"

describe("getSymbol", () => {
    it("given a symbol's ID, returns the full symbol", () => {
        const symbolId = 55 as Id<JiSymbol>

        const result = getSymbol(symbolId)

        expect(result).toEqual({
            id: 55 as Id<JiSymbol>,
            ascii: "`.|)" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.EXTREME,
            mina: 53 as Mina,
            primaryComma: {
                apotomeSlope: 1.399 as ApotomeSlope,
                fiveRoughSopfr: 18 as Sopfr<5>,
                limit: 11 as Prime,
                ratio: [2079, 2048] as Ratio,
                monzo: [-11, 3, 0, 1, 1] as Monzo,
                cents: 26.0088514300439 as Cents,
                name: "77C" as Name<Position>,
                n2d3p9: 23.52777777777778 as N2D3P9,
            },
            elements: ["`|", ".|", "|)"] as SymbolLongAscii[],
        })
    })
})