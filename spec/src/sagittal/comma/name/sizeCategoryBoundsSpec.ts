import { CentsPosition, computeCentsFromPitch, Monzo } from "../../../../../src/general"
import { SIZE_CATEGORY_BOUNDS } from "../../../../../src/sagittal"

describe("SIZE_CATEGORY_BOUNDS", (): void => {
    it("monzos match the positions", (): void => {
        SIZE_CATEGORY_BOUNDS.forEach((sizeCategoryBound: CentsPosition): void => {
            expect(computeCentsFromPitch({ monzo: sizeCategoryBound.monzo as Monzo }))
                .toBeCloseToTyped(sizeCategoryBound.cents)
        })
    })
})
