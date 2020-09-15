import { Multiplier } from "../../../../../../../src/general"
import { Formatted } from "../../../../../../../src/general/io"
import { Cents } from "../../../../../../../src/general/music"
import { Ina, JiNotationLevel } from "../../../../../../../src/sagittal/notations/ji"
import { HistoryAnalysis } from "../../../../../../../src/scripts/jiNotationBound/history"
import { extractJiNotationLevelDistances } from "../../../../../../../src/scripts/jiNotationBound/io/terminal/bounds/levelDistances"
import {
    eventAnalysisFixture,
    historyAnalysisFixture,
} from "../../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("extractJiNotationLevelDistances", (): void => {
    it("returns an array of the distances of each event (from the previous event)", (): void => {
        const historyAnalysis: HistoryAnalysis = {
            ...historyAnalysisFixture,
            eventAnalyses: [
                { ...eventAnalysisFixture, jiNotationLevel: JiNotationLevel.MEDIUM, distance: 0.000000 as Cents },
                { ...eventAnalysisFixture, jiNotationLevel: JiNotationLevel.HIGH, distance: 4.444444 as Cents },
                { ...eventAnalysisFixture, jiNotationLevel: JiNotationLevel.ULTRA, distance: 3.333333 as Cents },
                { ...eventAnalysisFixture, jiNotationLevel: JiNotationLevel.EXTREME, distance: 2.222222 as Cents },
                { ...eventAnalysisFixture, jiNotationLevel: JiNotationLevel.INSANE, distance: 1.111111 as Cents },
            ],
        }

        const actual = extractJiNotationLevelDistances(historyAnalysis)

        const expected = [
            "  4.444",
            "  3.333",
            "  2.222",
            "  1.111",
        ] as Array<Formatted<Cents>>
        expect(actual).toEqual(expected)
    })

    it("works when a JI notation level is skipped", (): void => {
        const historyAnalysis: HistoryAnalysis = {
            ...historyAnalysisFixture,
            eventAnalyses: [
                { ...eventAnalysisFixture, jiNotationLevel: JiNotationLevel.MEDIUM, distance: 0.000000 as Cents },
                { ...eventAnalysisFixture, jiNotationLevel: JiNotationLevel.HIGH, distance: 4.444444 as Cents },
                { ...eventAnalysisFixture, jiNotationLevel: JiNotationLevel.EXTREME, distance: 2.222222 as Cents },
                { ...eventAnalysisFixture, jiNotationLevel: JiNotationLevel.INSANE, distance: 1.111111 as Cents },
            ],
        }

        const actual = extractJiNotationLevelDistances(historyAnalysis)

        const expected = [
            "  4.444",
            "  2.222",
            "",
            "  1.111",
        ] as Array<Formatted<Cents>>
        expect(actual).toEqual(expected)
    })

    describe("ina distances", (): void => {
        it("returns an array of the ina-distances of each event (from the previous event)", (): void => {
            const historyAnalysis: HistoryAnalysis = {
                ...historyAnalysisFixture,
                eventAnalyses: [
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.MEDIUM,
                        inaDistance: 0.000000 as Multiplier<Ina>,
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.HIGH,
                        inaDistance: 4.444444 as Multiplier<Ina>,
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.ULTRA,
                        inaDistance: 3.333333 as Multiplier<Ina>,
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        inaDistance: 2.222222 as Multiplier<Ina>,
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.INSANE,
                        inaDistance: 1.111111 as Multiplier<Ina>,
                    },
                ],
            }

            const actual = extractJiNotationLevelDistances(historyAnalysis, { ina: true })

            const expected = [
                "  4.444",
                "  3.333",
                "  2.222",
                "  1.111",
            ] as Array<Formatted<Multiplier<Ina>>>
            expect(actual).toEqual(expected)
        })

        it("works when a JI notation level is skipped", (): void => {
            const historyAnalysis: HistoryAnalysis = {
                ...historyAnalysisFixture,
                eventAnalyses: [
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.MEDIUM,
                        inaDistance: 0.000000 as Multiplier<Ina>,
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.HIGH,
                        inaDistance: 4.444444 as Multiplier<Ina>,
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        inaDistance: 2.222222 as Multiplier<Ina>,
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.INSANE,
                        inaDistance: 1.111111 as Multiplier<Ina>,
                    },
                ],
            }

            const actual = extractJiNotationLevelDistances(historyAnalysis, { ina: true })

            const expected = [
                "  4.444",
                "  2.222",
                "",
                "  1.111",
            ] as Array<Formatted<Multiplier<Ina>>>
            expect(actual).toEqual(expected)
        })
    })
})