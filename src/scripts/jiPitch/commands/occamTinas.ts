import {
    abs,
    BLANK,
    Cents,
    Comma,
    computeCentsFromPitch,
    computeMonzoMapping,
    computePatentVal,
    computeRange,
    computeSuperScamon,
    Count,
    count,
    Decimal,
    Ed,
    Filename,
    formatCents,
    increment,
    indexOfFinalElement,
    isUndefined,
    KeyPath,
    LogTarget,
    max,
    Max,
    Maybe,
    min,
    Monzo,
    Name,
    parseCommands,
    Prime,
    readLines,
    RecordKey,
    round,
    saveLog,
    sort,
    stringify,
    subtractRationalScamons,
    Val,
    Window,
} from "../../../general"
import {
    analyzeComma,
    CommaAnalysis,
    CommaClassId,
    computeCommaName,
    computeCommasFrom23FreeRationalMonzo,
    getCommaClass,
    JI_NOTATION_LEVELS_COMMA_CLASS_IDS,
    JiNotationLevelId,
    N2D3P9,
    TINA,
} from "../../../sagittal"
import {ScriptGroup} from "../../types"
import {Semitina} from "../types"

parseCommands(
    ScriptGroup.JI_PITCH as Filename,
    [LogTarget.PROGRESS, LogTarget.DETAILS, LogTarget.FINAL, LogTarget.ERROR],
)

/***************/
/*  PHASE ONE  */
/***************/

// GATHER ALL THE COMMAS (AND ANALYZE THEM)

const TWO_3_FREE_MONZOS_WITH_N2D3P9_LOWER_THAN_5298 = JSON.parse(
    readLines("src/scripts/jiPitch/input/two3FreeRationalMonzosWithN2D3P9LowerThan5298.txt" as Filename).join(BLANK),
) as Array<Monzo<{rational: true, rough: 5}>>

let commas: Comma[] = []
TWO_3_FREE_MONZOS_WITH_N2D3P9_LOWER_THAN_5298
    .forEach((two3FreeRationalMonzo: Monzo<{rational: true, rough: 5}>): void => {
        commas = commas.concat(
            computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, {maxN2D3P9: 5298.1906468 as Max<N2D3P9>}),
        )
    })
saveLog("commas gathered", LogTarget.PROGRESS)

const commaAnalyses = commas.map((comma: Comma): CommaAnalysis => analyzeComma(comma))
saveLog("commas analyzed", LogTarget.PROGRESS)

sort(commaAnalyses, {by: "cents" as KeyPath})
saveLog("commas sorted", LogTarget.PROGRESS)

// SORT THEM BY SEMITINA ZONE

const SEMITINA = TINA / 2 as Cents
const SEMITINA_ZONES: Semitina[] = computeRange(810 as Decimal<{integer: true}>) as number[] as Semitina[]
const SEMITINA_PLUS_MINUS_RANGE = 0.5
const MAX_SIZE_PER_SEMITINA_ZONE: Cents[] =
    SEMITINA_ZONES.map((semitina: Semitina): Cents => SEMITINA * (semitina + SEMITINA_PLUS_MINUS_RANGE) as Cents)

const commaAnalysesBySemitinaZone: Record<RecordKey<Semitina>, CommaAnalysis[]> = SEMITINA_ZONES.reduce(
    (
        commaAnalysesBySemitinaZone: Record<RecordKey<Semitina>, CommaAnalysis[]>,
        semitinaZone: Semitina,
    ): Record<RecordKey<Semitina>, CommaAnalysis[]> =>
        ({...commaAnalysesBySemitinaZone, [semitinaZone]: []}),
    {} as Record<RecordKey<Semitina>, CommaAnalysis[]>,
)

let semitinaZone = 0 as Semitina
commaAnalyses.forEach((commaAnalysis: CommaAnalysis): void => {
    while (commaAnalysis.cents > MAX_SIZE_PER_SEMITINA_ZONE[semitinaZone]) {
        semitinaZone = increment(semitinaZone)
    }
    commaAnalysesBySemitinaZone[semitinaZone].push(commaAnalysis)
})
saveLog("commas grouped by semitina zone", LogTarget.PROGRESS)

// CONVERT RESULTS TO TUPLES OF [SEMITINA ZONE NAMES WHICH ARE ACTUALLY NUMERIC, COMMA ANALYSES] SORTED BY SEMITINA ZONE

const commaAnalysesBySemitinaZoneEntries = sort(
    Object.entries(commaAnalysesBySemitinaZone)
        .map(([semitinaZone, commaAnalyses]: [string, CommaAnalysis[]]): [Semitina, CommaAnalysis[]] => {
            return [parseInt(semitinaZone) as Semitina, commaAnalyses]
        }),
    {by: 0 as KeyPath},
) as Array<[unknown, CommaAnalysis[]]> as Array<[Semitina, CommaAnalysis[]]>

commaAnalysesBySemitinaZoneEntries.forEach(([semitinaZone, commaAnalyses]: [Semitina, CommaAnalysis[]]): void => {
    const centsForEachComma = commaAnalyses.map((ca: CommaAnalysis): Cents => ca.cents)
    const maxCents = formatCents(max(...centsForEachComma), {align: false})
    const minCents = formatCents(min(...centsForEachComma), {align: false})
    const countCents = count(centsForEachComma)
    saveLog(`${semitinaZone}: ${minCents}-${maxCents}, count ${countCents}`, LogTarget.DETAILS)
})
saveLog("commas grouped by semitina zone converted to sorted tuples", LogTarget.PROGRESS)

// FIND THE SINGLE BEST COMMA IN EACH ZONE

const U = 1.5
const INCLUDE_ERROR_IN_PHASE_1_SCORE = true // False

const bestCommaPerSemitinaZone = commaAnalysesBySemitinaZoneEntries
    .map(([semitinaZone, commaAnalyses]: [Semitina, CommaAnalysis[]]): [Semitina, CommaAnalysis] => {
        let bestComma = undefined as Maybe<CommaAnalysis>
        let bestScore = Infinity
        commaAnalyses.forEach((commaAnalysis: CommaAnalysis): void => {
            const n2d3p9 = commaAnalysis.two3FreeClassAnalysis.n2d3p9
            const aas = commaAnalysis.aas
            const ate = commaAnalysis.ate

            let score = Math.log2(n2d3p9) + (aas / 10) ** 1.5 + 2 ** (ate - 10)
            if (INCLUDE_ERROR_IN_PHASE_1_SCORE) {
                const tinas = commaAnalysis.cents / TINA
                const err = abs(2 * tinas - 2 * (semitinaZone / 2))
                score = score + U * err
            }

            if (score < bestScore) {
                bestScore = score
                bestComma = commaAnalysis
            }
        })

        if (isUndefined(bestComma)) throw new Error(`No best comma for semitina zone ${semitinaZone}`)

        return [semitinaZone, bestComma]
    })

saveLog(stringify(bestCommaPerSemitinaZone, {multiline: true}), LogTarget.DETAILS)

saveLog("best comma per semitina zone identified", LogTarget.PROGRESS)

/***************/
/*  PHASE TWO  */
/***************/

// COMPUTE METACOMMAS AND BUCKET THEM AS YOU GO (REPORTING INCONSISTENCIES FOR REFERENCE LATER)

const semitinaBuckets: Record<RecordKey<Semitina>, Record<Name<Comma>, Count<Comma>>> = {
    [0]: {},
    [1]: {},
    [2]: {},
    [3]: {},
    [4]: {},
    [5]: {},
    [6]: {},
    [7]: {},
    [8]: {},
    [9]: {},
    [10]: {},
    [11]: {},
    [12]: {},
    [13]: {},
    [14]: {},
    [15]: {},
    [16]: {},
    [17]: {},
    [18]: {},
    [19]: {},
}

const INSANE_NOTATION_ZETA_PEAK_VAL: Val =
    // TODO: 281 has no particular meaning, it was just as high as I had on hand. Please verify none exceed that limit.
    computePatentVal({ed: 8539.00834 as Ed<Window<2>>, window: 2 as Window<2>, primeLimit: 281 as Max<Prime>})

const metacommaNametoMetacommaMap: Record<RecordKey<Name<Comma>>, Comma> = {}

JI_NOTATION_LEVELS_COMMA_CLASS_IDS[JiNotationLevelId.ULTRA].forEach((ultraCommaClassId: CommaClassId): void => {
    const ultraComma = getCommaClass(ultraCommaClassId).pitch

    bestCommaPerSemitinaZone.forEach(([semitinaZone, bestComma]: [Semitina, CommaAnalysis]): void => {
        const metacomma = computeSuperScamon(subtractRationalScamons(ultraComma, bestComma.pitch)) as unknown as Comma
        const metacommaName = computeCommaName(metacomma)

        const ultraCommaRoundedSemitinas = round(computeCentsFromPitch(ultraComma) / SEMITINA)
        const metacommaSemitinaJump = abs(ultraCommaRoundedSemitinas - semitinaZone)

        saveLog(`The metacomma between the Extreme comma ${ultraCommaClassId} and the best comma in semitina zone ${semitinaZone} ${bestComma.name} is ${metacommaName} with size ${metacommaSemitinaJump}`, LogTarget.DETAILS)

        if (metacommaSemitinaJump <= 19) {
            const mapping = computeMonzoMapping(metacomma.monzo, INSANE_NOTATION_ZETA_PEAK_VAL)
            // TODO: We need an isEven helper, stat
            // TODO: actually both ints; I think we need to be more careful about SemitinaZone and Semitina eventually
            if (semitinaZone % 2 === 0 && mapping as number !== (metacommaSemitinaJump / 2) as number) {
                saveLog(`FYI, this metacomma for a whole tina (which is within 9.5 tinas and therefore we care about it) is inconsistent! ${metacommaName} maps to ${mapping} steps of 8539.00834-EDO despite being bucketed as a semitina zone jump of ${metacommaSemitinaJump}`, LogTarget.ERROR)
            }

            metacommaNametoMetacommaMap[metacommaName] = metacomma

            // TODO: surely this can be improved to not require ts-ignoring
            // @ts-ignore
            semitinaBuckets[metacommaSemitinaJump][metacommaName] =
                // @ts-ignore
                semitinaBuckets[metacommaSemitinaJump][metacommaName] || 0
            // @ts-ignore
            semitinaBuckets[metacommaSemitinaJump][metacommaName] =
                // @ts-ignore
                semitinaBuckets[metacommaSemitinaJump][metacommaName] + 1
        }
    })
})

saveLog("metacommas gathered", LogTarget.PROGRESS)

// SORT EACH SEMITINA CANDIDATE BUCKET BY DESCENDING OCCAM AND SHARE FINAL RESULT

const semitinaBucketEntries =
    Object.entries(semitinaBuckets) as Array<[unknown, Record<Name<Comma>, Count<Comma>>]> as
        Array<[Semitina, Record<Name<Comma>, Count<Comma>>]>

const mostCommonMetacommaNamePerSemitinaBucket = {} as Record<RecordKey<Semitina>, Name<Comma>>

semitinaBucketEntries.forEach(([semitinaBucket, metacommas]: [Semitina, Record<Name<Comma>, Count<Comma>>]): void => {
    saveLog(`CANDIDATES FOR SEMITINA ${semitinaBucket}`, LogTarget.FINAL)
    const entries = Object.entries(metacommas) as Array<[Name<Comma>, Count<Comma>]>
    sort(entries, {by: [1] as KeyPath, descending: true})
    mostCommonMetacommaNamePerSemitinaBucket[semitinaBucket] = entries[0][0]
    saveLog(`${stringify(entries, {multiline: true})}\n\n`, LogTarget.FINAL)
})

/*****************/
/*  PHASE THREE  */
/*****************/

const mostCommonMetacommaNamePerSemitinaBucketEntries = Object.entries(mostCommonMetacommaNamePerSemitinaBucket) as
    Array<[unknown, Name<Comma>]> as Array<[RecordKey<Semitina>, Name<Comma>]>

const consecutiveSemitinaBucketMostCommonMetacommas = mostCommonMetacommaNamePerSemitinaBucketEntries.map(
    ([_, commaName]: [RecordKey<Semitina>, Name<Comma>]): Comma =>
        metacommaNametoMetacommaMap[commaName]
)

saveLog(`AND NOW, METAMETACOMMAS`, LogTarget.FINAL)
consecutiveSemitinaBucketMostCommonMetacommas
    .forEach((semitinaBucketMostCommonMetacomma: Comma, index: number): void => {
        if (index === indexOfFinalElement(consecutiveSemitinaBucketMostCommonMetacommas)) return

        const subsequentSemitinaBucketMostCommonMetacomma = consecutiveSemitinaBucketMostCommonMetacommas[index + 1]

        const metametacomma = subtractRationalScamons(
            subsequentSemitinaBucketMostCommonMetacomma,
            semitinaBucketMostCommonMetacomma
        )
        saveLog(`${stringify(metametacomma)}`, LogTarget.FINAL)
    })
