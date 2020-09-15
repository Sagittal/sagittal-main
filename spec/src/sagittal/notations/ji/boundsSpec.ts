import { Id, isCloseTo } from "../../../../../src/general"
import { JiNotationBound, JI_NOTATION_BOUNDS, TINA } from "../../../../../src/sagittal"

describe("JI_NOTATION_BOUNDS", (): void => {
    it("almost every bound in the JI notation is snapped to a half-tina", (): void => {
        let currentHalfTina = 0.5

        const exceptionalJiNotationBoundIds: Array<Id<JiNotationBound>> = [
            49,     // comma mean
            52,     // comma mean
            74,     // comma mean
            82,     // comma mean
            97,     // size category bound
            110,    // comma mean
            119,    // comma mean
            127,    // comma mean
            136,    // comma mean
            149,    // size category bound
        ] as Array<Id<JiNotationBound>>

        JI_NOTATION_BOUNDS.forEach((jiNotationBound: JiNotationBound): void => {
            const jiNotationBoundCents = jiNotationBound.cents

            while (true) {
                const currentHalfTinaCents = TINA * currentHalfTina

                if (isCloseTo(currentHalfTinaCents, jiNotationBoundCents)) {
                    break
                } else if (currentHalfTinaCents > jiNotationBoundCents) {
                    if (!exceptionalJiNotationBoundIds.includes(jiNotationBound.id)) {
                        fail(`JI notation bound id ${jiNotationBound.id} was not close to a half-tina, nor registered as an exceptional bound.`)
                    }

                    break
                }

                currentHalfTina = currentHalfTina + 1
            }
        })
    })
})