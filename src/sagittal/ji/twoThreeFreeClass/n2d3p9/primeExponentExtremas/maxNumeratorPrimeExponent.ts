import { Exponent, floor, log, Max, Numerator, Power, Prime } from "../../../../../general"
import { N2D3P9 } from "../types"

const computeMaxNumeratorPrimeExponentGivenMaxN2D3P9 = (
    numeratorPrime: Numerator & Prime,
    maxN2D3P9: Max<N2D3P9>,
): Max<Numerator & Exponent<Prime>> => {
    const power = maxN2D3P9 * 9 * (1 / numeratorPrime) as Power<Numerator & Prime>

    if (power <= 0) {
        return 0 as Max<Numerator & Exponent<Prime>>
    }

    const base = numeratorPrime / 2

    return floor(log(power, base)) as Max<Numerator & Exponent<Prime>>

}

export {
    computeMaxNumeratorPrimeExponentGivenMaxN2D3P9,
}