// tslint:disable max-line-length

import * as cp from "child_process"
import {Io} from "../../../../../src/general/io"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"
import {
    OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS, OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS,
    OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS,
} from "../../../../helpers/src/scripts/jiPitch/constants"
import {runScriptAndGetConsoleOutput} from "../../../../helpers/src/scripts/runScriptAndGetConsoleOutput"

describe("analyze-ji-pitch", (): void => {
    const expected = [
        "   --- JI pitch ---",
        "",
        "quotient\t \t    \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
        "       n\t/\td   \t    [\t  2    \t  3    \t  5    \t  7    \t 11    \t⟩\tcents          \tslope  \tAAS    \tATE    ",
        "    2200\t/\t2187\t    [\t  3    \t -7    \t  2    \t  0    \t  1    \t⟩\t        10.260¢\t -7.632\t  7.632\t  7    ",
        "",
        "   --- 2,3-free class ---",
        "",
        "prime  \tname\t \t \t   \t       \t       \t       ",
        "limit  \t   n\t/\td\t₂,₃\tCoPFR  \tSoPFR  \tN2D3P9 ",
        " 11    \t 275\t/\t1\t₂,₃\t  3    \t 21    \t 42.014",
        "",
        "   --- notating commas ---",
        "",
        "comma   \t      \tquotient\t \t        \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
        "class   \tname  \t       n\t/\td       \t    [\t  2    \t  3    \t  5    \t  7    \t 11    \t⟩\tcents          \tslope  \tAAS    \tATE    ",
        "   `)|( \t275k  \t    2200\t/\t2187    \t    [\t  3    \t -7    \t  2    \t  0    \t  1    \t⟩\t        10.260¢\t -7.632\t  7.632\t  7    ",
        "        \t275S  \t   66825\t/\t65536   \t    [\t-16    \t  5    \t  2    \t  0    \t  1    \t⟩\t        33.720¢\t  2.924\t  2.924\t  5    ",
        "        \t1/275M\t16777216\t/\t16238475\t    [\t 24    \t-10    \t -2    \t  0    \t -1    \t⟩\t        56.505¢\t-13.479\t 13.479\t 10    ",
        "",
    ] as Io[]

    it("analyzes a JI pitch, given it in monzo form (note that it includes inverses in the notating commas list)", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch -- -m [3,-7,2,0,1] --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        expect(actual).toEqual(expected)
    })

    it("can appraise a JI pitch for you", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch -- -q 2200/2187 --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        expect(actual).toEqual(expected)
    })

    it("can appraise a comma name for you", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch -- --comma-name 275k --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        expect(actual).toEqual(expected)
    })

    it("can appraise a comma name for you, in a completely different format", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch -- --comma-name 5².11-kleisma --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        expect(actual).toEqual(expected)
    })

    it("throws an error if you provide neither monzo, quotient, name, or integer", (): void => {
        onlyRunInCi()

        const script = "npm run analyze-ji-pitch" as Io

        expect((): void => {
            cp.execSync(script, {stdio: [undefined, undefined, undefined]})
        }).toThrowError(/Unable to parse JI pitch/)
    })

    it("can sort the notating commas", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch [3,-7,2,0,1] -- --sort-by apotomeSlope --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "   --- JI pitch ---",
            "",
            "quotient\t \t    \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
            "       n\t/\td   \t    [\t  2    \t  3    \t  5    \t  7    \t 11    \t⟩\tcents          \tslope  \tAAS    \tATE    ",
            "    2200\t/\t2187\t    [\t  3    \t -7    \t  2    \t  0    \t  1    \t⟩\t        10.260¢\t -7.632\t  7.632\t  7    ",
            "",
            "   --- 2,3-free class ---",
            "",
            "prime  \tname\t \t \t   \t       \t       \t       ",
            "limit  \t   n\t/\td\t₂,₃\tCoPFR  \tSoPFR  \tN2D3P9 ",
            " 11    \t 275\t/\t1\t₂,₃\t  3    \t 21    \t 42.014",
            "",
            "   --- notating commas ---",
            "",
            "comma   \t      \tquotient\t \t        \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
            "class   \tname  \t       n\t/\td       \t    [\t  2    \t  3    \t  5    \t  7    \t 11    \t⟩\tcents          \tslope  \tAAS    \tATE    ",
            "        \t1/275M\t16777216\t/\t16238475\t    [\t 24    \t-10    \t -2    \t  0    \t -1    \t⟩\t        56.505¢\t-13.479\t 13.479\t 10    ",
            "   `)|( \t275k  \t    2200\t/\t2187    \t    [\t  3    \t -7    \t  2    \t  0    \t  1    \t⟩\t        10.260¢\t -7.632\t  7.632\t  7    ",
            "        \t275S  \t   66825\t/\t65536   \t    [\t-16    \t  5    \t  2    \t  0    \t  1    \t⟩\t        33.720¢\t  2.924\t  2.924\t  5    ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("can appraise a JI pitch given as an integer", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch -- -i 275 --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "   --- JI pitch ---",
            "",
            "quotient\t \t \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome \t       \t       ",
            "       n\t/\td\t    [\t  2    \t  3    \t  5    \t  7    \t 11    \t⟩\tcents          \tslope   \tAAS    \tATE    ",
            "     275\t/\t1\t    [\t  0    \t  0    \t  2    \t  0    \t  1    \t⟩\t      9723.945¢\t-598.739\t598.739\t  0    ",
            "",
            "   --- 2,3-free class ---",
            "",
            "prime  \tname\t \t \t   \t       \t       \t       ",
            "limit  \t   n\t/\td\t₂,₃\tCoPFR  \tSoPFR  \tN2D3P9 ",
            " 11    \t 275\t/\t1\t₂,₃\t  3    \t 21    \t 42.014",
            "",
            "   --- notating commas ---",
            "",
            "comma   \t      \tquotient\t \t        \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
            "class   \tname  \t       n\t/\td       \t    [\t  2    \t  3    \t  5    \t  7    \t 11    \t⟩\tcents          \tslope  \tAAS    \tATE    ",
            "   `)|( \t275k  \t    2200\t/\t2187    \t    [\t  3    \t -7    \t  2    \t  0    \t  1    \t⟩\t        10.260¢\t -7.632\t  7.632\t  7    ",
            "        \t275S  \t   66825\t/\t65536   \t    [\t-16    \t  5    \t  2    \t  0    \t  1    \t⟩\t        33.720¢\t  2.924\t  2.924\t  5    ",
            "        \t1/275M\t16777216\t/\t16238475\t    [\t 24    \t-10    \t -2    \t  0    \t -1    \t⟩\t        56.505¢\t-13.479\t 13.479\t 10    ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("can format the names of the commas in the notating commas table", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch [3,-7,2,0,1] -- --undirected --factored --unabbreviated --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "   --- JI pitch ---",
            "",
            "quotient\t \t    \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
            "       n\t/\td   \t    [\t  2    \t  3    \t  5    \t  7    \t 11    \t⟩\tcents          \tslope  \tAAS    \tATE    ",
            "    2200\t/\t2187\t    [\t  3    \t -7    \t  2    \t  0    \t  1    \t⟩\t        10.260¢\t -7.632\t  7.632\t  7    ",
            "",
            "   --- 2,3-free class ---",
            "",
            "prime  \tname\t \t \t   \t       \t       \t       ",
            "limit  \t   n\t/\td\t₂,₃\tCoPFR  \tSoPFR  \tN2D3P9 ",
            " 11    \t 275\t/\t1\t₂,₃\t  3    \t 21    \t 42.014",
            "",
            "   --- notating commas ---",
            "",
            "comma   \t                   \tquotient\t \t        \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
            "class   \tname               \t       n\t/\td       \t    [\t  2    \t  3    \t  5    \t  7    \t 11    \t⟩\tcents          \tslope  \tAAS    \tATE    ",
            "   `)|( \t5².11-kleisma      \t    2200\t/\t2187    \t    [\t  3    \t -7    \t  2    \t  0    \t  1    \t⟩\t        10.260¢\t -7.632\t  7.632\t  7    ",
            "        \t5².11-Small-Diesis \t   66825\t/\t65536   \t    [\t-16    \t  5    \t  2    \t  0    \t  1    \t⟩\t        33.720¢\t  2.924\t  2.924\t  5    ",
            "        \t5².11-Medium-Diesis\t16777216\t/\t16238475\t    [\t 24    \t-10    \t -2    \t  0    \t -1    \t⟩\t        56.505¢\t-13.479\t 13.479\t 10    ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("automatically adjusts the filters to include the JI pitch itself in the list of notating commas", (): void => {
        onlyRunInCi()

        const script = "npm run analyze-ji-pitch \"[  -34   19   0   0   1  -1   0   1 ⟩\"" as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "   --- JI pitch ---",
            "",
            "    quotient\t \t            \tmonzo\t       \t       \t       \t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
            "           n\t/\td           \t    [\t  2    \t  3    \t  5    \t  7    \t 11    \t 13    \t 17    \t 19    \t⟩\tcents          \tslope  \tAAS    \tATE    ",
            "242912646603\t/\t223338299392\t    [\t-34    \t 19    \t  0    \t  0    \t  1    \t -1    \t  0    \t  1    \t⟩\t       145.448¢\t 10.044\t 10.044\t 19    ",
            "",
            "   --- 2,3-free class ---",
            "",
            "prime  \tname\t \t  \t   \t       \t       \t       ",
            "limit  \t   n\t/\td \t₂,₃\tCoPFR  \tSoPFR  \tN2D3P9 ",
            " 19    \t 209\t/\t13\t₂,₃\t  3    \t 43    \t477.991",
            "",
            "   --- notating commas ---",
            "",
            "comma\t       \t quotient\t \t         \tmonzo\t       \t       \t       \t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
            "class\tname   \t        n\t/\td        \t    [\t  2    \t  3    \t  5    \t  7    \t 11    \t 13    \t 17    \t 19    \t⟩\tcents          \tslope  \tAAS    \tATE    ",
            "     \t209/13k\t      209\t/\t208      \t    [\t -4    \t  0    \t  0    \t  0    \t  1    \t -1    \t  0    \t  1    \t⟩\t         8.303¢\t -0.511\t  0.511\t  0    ",
            "     \t209/13C\t111071169\t/\t109051904\t    [\t-23    \t 12    \t  0    \t  0    \t  1    \t -1    \t  0    \t  1    \t⟩\t        31.763¢\t 10.044\t 10.044\t 12    ",
            "     \t13/209C\t  6908733\t/\t6848512  \t    [\t-15    \t 12    \t  0    \t  0    \t -1    \t  1    \t  0    \t -1    \t⟩\t        15.157¢\t 11.067\t 11.067\t 12    ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})

// TODO: ANALYZE JI PITCH BUG
//  `npm run analyze-ji-pitch 37252902984619140625`
//  Error: JI pitches must be rational. This pitch was 78016.784¢
//  Even though that is rational. it's 5^28