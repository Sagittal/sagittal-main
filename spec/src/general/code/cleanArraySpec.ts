import { cleanArray } from "../../../../src/general/code/cleanArray"

describe("cleanArray", (): void => {
    it("removes all elements from the array", (): void => {
        const array = [4, 6, 7, "a"]

        cleanArray(array)

        expect(array).toEqual([])
    })
})
