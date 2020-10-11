import { computeIrrationalQuotientFromScamon } from "../../../../../../src/general/math/irrational/quotient/fromScamon"
import { IRRATIONAL_SCAMON_BASE_MONZO } from "../../../../../../src/general/math/irrational/scamon/constants"
import { Quotient } from "../../../../../../src/general/math/numeric/quotient"
import { Scamon } from "../../../../../../src/general/math/numeric/scamon"

describe("computeIrrationalQuotientFromScamon", (): void => {
    it("returns a dumb irrational quotient, essentially the same irrational decimal you would have gotten, but over 1            ", (): void => {
        const irrationalScamon = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [6.400178, 1] as Quotient,
        } as Scamon<{ rational: false }>

        const actual = computeIrrationalQuotientFromScamon(irrationalScamon)

        const expected = [84.45893, 1] as Quotient<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })
})