const {alignTable} = require("../../../src/utilities/table")

describe("alignTable", () => {
    it("gets each column to have the same width", () => {
        const data = [
            "comma name\tlimit\tSoPF>3\tcents\tmonzo\tratio\tapotome slope",
            "11M\t11\t11\t45.45\t[0 0 1⟩\t33/32\t-4",
            "25/49M\t7\t24\t33.4\t[0 0⟩\t50/49\t-59.333",
        ]

        const result = alignTable(data)

        expect(result).toEqual([
            "comma name\tlimit\tSoPF>3\tcents\tmonzo  \tratio\tapotome slope",
            "11M       \t11   \t11    \t45.45\t[0 0 1⟩\t33/32\t-4           ",
            "25/49M    \t7    \t24    \t33.4 \t[0 0⟩  \t50/49\t-59.333      ",
        ])
    })
})
