import { computeRoughMonzo, Monzo, Roughness } from "../../../../../../src/general/math"
import { computeIsRoughMonzo } from "../../../../../../src/general/math/rational/monzo"

describe("computeRoughMonzo", (): void => {
    it("roughens the monzo to the requested roughness", (): void => {
        const monzo = [5, 6, 1, 0, 3] as Monzo
        const roughness = 5 as 5 & Roughness

        const actual = computeRoughMonzo(monzo, roughness)

        const expected = [0, 0, 1, 0, 3] as Monzo
        expect(actual).toEqual(expected)
    })

    it("trims the monzo if necessary", (): void => {
        const monzo = [5, 6] as Monzo
        const roughness = 5 as 5 & Roughness

        const actual = computeRoughMonzo(monzo, roughness)

        const expected = [] as Monzo
        expect(actual).toEqual(expected)
    })
})

describe("computeIsRoughMonzo", (): void => {
    it("returns true if the monzo is at the requested roughness", (): void => {
        const monzo = [0, 0, 0, 4, 3] as Monzo

        const actual = computeIsRoughMonzo(monzo, 7 as 7 & Roughness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo is not at the requested roughness", (): void => {
        const monzo = [0, -5, 0, 4, 3] as Monzo

        const actual = computeIsRoughMonzo(monzo, 7 as 7 & Roughness)

        expect(actual).toBeFalsy()
    })
})