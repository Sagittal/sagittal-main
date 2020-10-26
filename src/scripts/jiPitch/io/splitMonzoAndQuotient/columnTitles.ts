import {
    Count,
    Exponent,
    Io,
    ioSettings,
    Max,
    Prime,
    PRIMES,
    TableFormat,
    TWO_3_FREE_CLASS_SIGN,
} from "../../../../general"

const splitMonzoAndQuotientColumnTitles = (
    columnTitles: Io[],
    {
        recognizeNameTitleAsBeingFor23FreeClass = false,
        maxMonzoLength = 0 as Max<Count<Exponent<Prime>>>,
    }: {maxMonzoLength?: Max<Count<Exponent<Prime>>>, recognizeNameTitleAsBeingFor23FreeClass?: boolean},
): Io[] => {
    const adjustedColumnTitles = [] as Io[]

    columnTitles.forEach((columnTitle: Io): void => {
        if (columnTitle === "quotient" && ioSettings.tableFormat !== TableFormat.FORUM) {
            adjustedColumnTitles.push("quotient n" as Io, "/" as Io, "d" as Io)
        } else if (columnTitle === "monzo") {
            adjustedColumnTitles.push(
                "monzo [" as Io,
                ...PRIMES.slice(0, maxMonzoLength).map((prime: Prime): string => prime.toString()) as Io[],
                "⟩" as Io,
            )
        } else if (columnTitle === "2,3-free class name" && ioSettings.tableFormat !== TableFormat.FORUM) {
            const sign = ioSettings.tableFormat === TableFormat.FORUM_WITH_SPLIT_QUOTIENTS ?
                "[/pre][latex]_{\\scriptsize{2,3}}[/latex][pre]" :
                TWO_3_FREE_CLASS_SIGN
            adjustedColumnTitles.push("2,3-free class n" as Io, "/" as Io, "d" as Io, sign as Io)
        } else if (
            columnTitle === "name"
            && recognizeNameTitleAsBeingFor23FreeClass
            && ioSettings.tableFormat !== TableFormat.FORUM
        ) {
            const sign = ioSettings.tableFormat === TableFormat.FORUM_WITH_SPLIT_QUOTIENTS ?
                "[/pre][latex]_{\\scriptsize{2,3}}[/latex][pre]" :
                TWO_3_FREE_CLASS_SIGN
            adjustedColumnTitles.push("name n" as Io, "/" as Io, "d" as Io, sign as Io)
        } else {
            adjustedColumnTitles.push(columnTitle)
        }
    })

    return adjustedColumnTitles
}

export {
    splitMonzoAndQuotientColumnTitles,
}
