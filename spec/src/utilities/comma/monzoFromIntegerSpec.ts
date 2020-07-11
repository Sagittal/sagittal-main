import { computeMonzoFromInteger } from "../../../../src/utilities/comma/monzoFromInteger"
import { Monzo } from "../../../../src/utilities/comma/types"

describe("computeMonzoFromInteger", () => {
    it("prime factorizes the integer into a monzo", () => {
        const integer = 44

        const result = computeMonzoFromInteger(integer)

        expect(result).toEqual([2, 0, 0, 0, 1] as Monzo)
    })
})