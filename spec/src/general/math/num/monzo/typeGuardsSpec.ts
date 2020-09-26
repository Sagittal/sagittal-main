import { computeMonzoIsRational, Monzo } from "../../../../../../src/general/math/num/monzo"
import { computeMonzoIsInteger } from "../../../../../../src/general/math/num/monzo/typeGuards"

describe("computeMonzoIsInteger", (): void => {
    it("returns true if every term is positive or zero", (): void => {
        const monzo = [0, 2, 0, 1] as Monzo

        const actual = computeMonzoIsInteger(monzo)

        expect(actual).toBeTruthy()
    })

    it("returns false if every term is negative or zero", (): void => {
        const monzo = [-3, 0, -5] as Monzo

        const actual = computeMonzoIsInteger(monzo)

        expect(actual).toBeFalsy()
    })

    it("returns false if the terms are not all positive or zero or all negative or zero", (): void => {
        const monzo = [-2, 0, 1] as Monzo

        const actual = computeMonzoIsInteger(monzo)

        expect(actual).toBeFalsy()
    })

    it("returns false if any of the terms are not integers", (): void => {
        const monzo = [0, 2.5, 0, 1] as Monzo

        const actual = computeMonzoIsInteger(monzo)

        expect(actual).toBeFalsy()
    })
})

describe("computeMonzoIsRational", (): void => {
    it("returns true if every term is an integer", (): void => {
        const monzo = [0, 2, 0, 1] as Monzo

        const actual = computeMonzoIsRational(monzo)

        expect(actual).toBeTruthy()
    })

    it("returns true if any term is not an integer", (): void => {
        const monzo = [2.5, 1.5, 0] as Monzo

        const actual = computeMonzoIsRational(monzo)

        expect(actual).toBeFalsy()
    })
})
