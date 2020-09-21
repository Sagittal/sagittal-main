import { Io } from "../../../../../src/general/io"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("late-tina-commas", (): void => {
    it("finds LATE commas for tinas", (): void => {
        onlyRunInCi()

        const command = `npm run late-tina-commas -- --max-2-3-free-sopfr 37` as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            `NO COMMAS given current constraints for tina 0.5.`,
            `NO LATE COMMAS given current constraints for tina 1.`,
            `NO LATE COMMAS given current constraints for tina 1.5.`,
            `NO COMMAS given current constraints for tina 2.`,
            `NO COMMAS given current constraints for tina 2.5.`,
            `TINA 3: {"monzo":[12,-2,-1,-1,0,-1],"ratio":[4096,4095],"cents":0.42271616595482425,"twoThreeFreeClassAnalysis":{"monzo":[0,0,1,1,0,1],"twoThreeFreePrimeLimit":13,"twoThreeFreeSopfr":25,"twoThreeFreeCopfr":3,"n2d3p9":82.15277777777777},"apotomeSlope":-2.0260281743766777,"aas":2.0260281743766777,"ate":2,"name":"1/455n"}`,
            `NO COMMAS given current constraints for tina 3.5.`,
            `NO LATE COMMAS given current constraints for tina 4.`,
            `NO COMMAS given current constraints for tina 4.5.`,
            `NO LATE COMMAS given current constraints for tina 5.`,
            `NO COMMAS given current constraints for tina 5.5.`,
            `TINA 6: {"monzo":[5,-3,1,-1,-1,1],"ratio":[2080,2079],"cents":0.8325242041015989,"twoThreeFreeClassAnalysis":{"monzo":[0,0,-1,1,1,-1],"twoThreeFreePrimeLimit":13,"twoThreeFreeSopfr":36,"twoThreeFreeCopfr":4,"n2d3p9":200.8179012345679},"apotomeSlope":-3.0512615482973438,"aas":3.0512615482973438,"ate":3,"name":"65/77n"}`,
            `NO COMMAS given current constraints for tina 6.5.`,
            `TINA 7: {"monzo":[-2,5,-2,1,0,0,-1],"ratio":[1701,1700],"cents":1.0180735659853197,"twoThreeFreeClassAnalysis":{"monzo":[0,0,2,-1,0,0,1],"twoThreeFreePrimeLimit":17,"twoThreeFreeSopfr":34,"twoThreeFreeCopfr":4,"n2d3p9":234.14351851851853},"apotomeSlope":4.9373135014983465,"aas":4.9373135014983465,"ate":5,"name":"7/425n"}`,
            `NO COMMAS given current constraints for tina 7.5.`,
            `NO LATE COMMAS given current constraints for tina 8.`,
            `NO COMMAS given current constraints for tina 8.5.`,
            `TINA 9: {"monzo":[17,-5,0,-2,-1],"ratio":[131072,130977],"cents":1.255240370056446,"twoThreeFreeClassAnalysis":{"monzo":[0,0,0,2,1],"twoThreeFreePrimeLimit":11,"twoThreeFreeSopfr":25,"twoThreeFreeCopfr":3,"n2d3p9":82.34722222222221},"apotomeSlope":-5.077289722674022,"aas":5.077289722674022,"ate":5,"name":"1/539n"}`,
            `NO COMMAS given current constraints for tina 9.5.`,
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})
