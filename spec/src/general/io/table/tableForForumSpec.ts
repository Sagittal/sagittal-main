import { Count, Io, Row, Table } from "../../../../../src/general"
import { formatTableForForum } from "../../../../../src/general/io/table/tableForForum"
import { Justification } from "../../../../../src/general/io/table/types"

describe("formatTableForForum", (): void => {
    it("formats a table to be posted on the Sagittal forum", (): void => {
        const table = [
            ["comma name", "limit", "2,3-free sopfr", "cents", "monzo", "ratio", "apotome slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table<Io>

        const actual = formatTableForForum(table)

        let expected =
            "[table]\n" +
            "[tr][th][pre]comma name[/pre][/th][th][pre]limit[/pre][/th][th][pre]2,3-free sopfr[/pre][/th][th][pre]cents[/pre][/th][th][pre]monzo[/pre][/th][th][pre]ratio[/pre][/th][th][pre]apotome slope[/pre][/th][th][pre]N2D3P9[/pre][/th][/tr]\n" +
            "[tr][td][pre]11M[/pre][/td][td][pre]11[/pre][/td][td][pre]11[/pre][/td][td][pre]45.45[/pre][/td][td][pre][0 0 1⟩[/pre][/td][td][pre]33/32[/pre][/td][td][pre]-4[/pre][/td][td][pre]6.722[/pre][/td][/tr]\n" +
            "[tr][td][pre]25/49M[/pre][/td][td][pre]7[/pre][/td][td][pre]24[/pre][/td][td][pre]33.4[/pre][/td][td][pre][0 0⟩[/pre][/td][td][pre]50/49[/pre][/td][td][pre]-59.333[/pre][/td][td][pre]26.466[/pre][/td][/tr]\n" +
            "[/table]\n" as Io
        expect(actual).toEqual(expected)
    })

    it("supports a custom count of header rows", (): void => {
        const table = [
            ["comma", "", "2,3-free", "", "", "", "apotome", ""],
            ["name", "limit", "sopfr", "cents", "monzo", "ratio", "slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table<Io>

        const actual = formatTableForForum(table, { headerRowCount: 2 as Count<Row<{ of: string, header: true }>> })

        let expected =
            "[table]\n" +
            "[tr][th][pre]comma[/pre][/th][th][pre][/pre][/th][th][pre]2,3-free[/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre]apotome[/pre][/th][th][pre][/pre][/th][/tr]\n" +
            "[tr][th][pre]name[/pre][/th][th][pre]limit[/pre][/th][th][pre]sopfr[/pre][/th][th][pre]cents[/pre][/th][th][pre]monzo[/pre][/th][th][pre]ratio[/pre][/th][th][pre]slope[/pre][/th][th][pre]N2D3P9[/pre][/th][/tr]\n" +     // Note the second header row!
            "[tr][td][pre]11M[/pre][/td][td][pre]11[/pre][/td][td][pre]11[/pre][/td][td][pre]45.45[/pre][/td][td][pre][0 0 1⟩[/pre][/td][td][pre]33/32[/pre][/td][td][pre]-4[/pre][/td][td][pre]6.722[/pre][/td][/tr]\n" +
            "[tr][td][pre]25/49M[/pre][/td][td][pre]7[/pre][/td][td][pre]24[/pre][/td][td][pre]33.4[/pre][/td][td][pre][0 0⟩[/pre][/td][td][pre]50/49[/pre][/td][td][pre]-59.333[/pre][/td][td][pre]26.466[/pre][/td][/tr]\n" +
            "[/table]\n" as Io
        expect(actual).toEqual(expected)
    })

    it("supports colors per row", (): void => {
        const table = [
            ["comma", "", "2,3-free", "", "", "", "apotome", ""],
            ["name", "limit", "sopfr", "cents", "monzo", "ratio", "slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table<Io>

        const actual = formatTableForForum(table, { colors: ["yellow", "red", "blue", "cyan"] })

        let expected =
            "[table]\n" +
            "[tr][th][pre][hilite=yellow]comma[/hilite][/pre][/th][th][pre][hilite=yellow][/hilite][/pre][/th][th][pre][hilite=yellow]2,3-free[/hilite][/pre][/th][th][pre][hilite=yellow][/hilite][/pre][/th][th][pre][hilite=yellow][/hilite][/pre][/th][th][pre][hilite=yellow][/hilite][/pre][/th][th][pre][hilite=yellow]apotome[/hilite][/pre][/th][th][pre][hilite=yellow][/hilite][/pre][/th][/tr]\n" +
            "[tr][td][pre][hilite=red]name[/hilite][/pre][/td][td][pre][hilite=red]limit[/hilite][/pre][/td][td][pre][hilite=red]sopfr[/hilite][/pre][/td][td][pre][hilite=red]cents[/hilite][/pre][/td][td][pre][hilite=red]monzo[/hilite][/pre][/td][td][pre][hilite=red]ratio[/hilite][/pre][/td][td][pre][hilite=red]slope[/hilite][/pre][/td][td][pre][hilite=red]N2D3P9[/hilite][/pre][/td][/tr]\n" +
            "[tr][td][pre][hilite=blue]11M[/hilite][/pre][/td][td][pre][hilite=blue]11[/hilite][/pre][/td][td][pre][hilite=blue]11[/hilite][/pre][/td][td][pre][hilite=blue]45.45[/hilite][/pre][/td][td][pre][hilite=blue][0 0 1⟩[/hilite][/pre][/td][td][pre][hilite=blue]33/32[/hilite][/pre][/td][td][pre][hilite=blue]-4[/hilite][/pre][/td][td][pre][hilite=blue]6.722[/hilite][/pre][/td][/tr]\n" +
            "[tr][td][pre][hilite=cyan]25/49M[/hilite][/pre][/td][td][pre][hilite=cyan]7[/hilite][/pre][/td][td][pre][hilite=cyan]24[/hilite][/pre][/td][td][pre][hilite=cyan]33.4[/hilite][/pre][/td][td][pre][hilite=cyan][0 0⟩[/hilite][/pre][/td][td][pre][hilite=cyan]50/49[/hilite][/pre][/td][td][pre][hilite=cyan]-59.333[/hilite][/pre][/td][td][pre][hilite=cyan]26.466[/hilite][/pre][/td][/tr]\n" +
            "[/table]\n" as Io
        expect(actual).toEqual(expected)
    })

    it("supports justification", (): void => {
        const table = [
            ["comma", "", "2,3-free", "", "", "", "apotome", ""],
            ["name", "limit", "sopfr", "cents", "monzo", "ratio", "slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table<Io>

        const actual = formatTableForForum(table, { justification: [Justification.RIGHT, Justification.CENTER] })

        let expected =
            "[table]\n" +
            "[tr][th][pre][right]comma[/right][/pre][/th][th][pre][center][/center][/pre][/th][th][pre]2,3-free[/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre]apotome[/pre][/th][th][pre][/pre][/th][/tr]\n" +
            "[tr][td][pre][right]name[/right][/pre][/td][td][pre][center]limit[/center][/pre][/td][td][pre]sopfr[/pre][/td][td][pre]cents[/pre][/td][td][pre]monzo[/pre][/td][td][pre]ratio[/pre][/td][td][pre]slope[/pre][/td][td][pre]N2D3P9[/pre][/td][/tr]\n" +
            "[tr][td][pre][right]11M[/right][/pre][/td][td][pre][center]11[/center][/pre][/td][td][pre]11[/pre][/td][td][pre]45.45[/pre][/td][td][pre][0 0 1⟩[/pre][/td][td][pre]33/32[/pre][/td][td][pre]-4[/pre][/td][td][pre]6.722[/pre][/td][/tr]\n" +
            "[tr][td][pre][right]25/49M[/right][/pre][/td][td][pre][center]7[/center][/pre][/td][td][pre]24[/pre][/td][td][pre]33.4[/pre][/td][td][pre][0 0⟩[/pre][/td][td][pre]50/49[/pre][/td][td][pre]-59.333[/pre][/td][td][pre]26.466[/pre][/td][/tr]\n" +
            "[/table]\n" as Io
        expect(actual).toEqual(expected)
    })
})
