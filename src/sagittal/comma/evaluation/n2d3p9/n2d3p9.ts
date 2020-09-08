import {
    abs,
    ACCURACY_THRESHOLD,
    computeGpf,
    computeIsSubMonzo,
    computeMonzoFromRatio,
    computeTrimmedArray,
    Exponent,
    formatMonzo,
    Monzo,
    Prime,
    PRIMES,
    round,
} from "../../../../general"
import { TwoThreeFreeClass } from "../../types"
import { N2D3P9 } from "./types"

const computeN2D3P9 = (twoThreeFreeClassOrMonzo: TwoThreeFreeClass | Monzo): N2D3P9 => {
    let monzo: Monzo
    if (twoThreeFreeClassOrMonzo.length === 2) {
        monzo = computeMonzoFromRatio(twoThreeFreeClassOrMonzo as TwoThreeFreeClass)
    } else {
        monzo = twoThreeFreeClassOrMonzo as Monzo
    }

    if (computeTrimmedArray(monzo).length < 3) {
        return 1 as N2D3P9
    }

    if (monzo[ 0 ] !== 0 || monzo[ 1 ] !== 0) {
        throw new Error(`N2D3P9 must be given a 2,3-free class (5-rough, n ≥ d); received monzo ${formatMonzo(monzo)}`)
    }
    if (computeIsSubMonzo(monzo)) {
        throw new Error(`N2D3P9 must be given a 2,3-free class (5-rough, n ≥ d); received monzo ${formatMonzo(monzo)}`)
    }

    const n2d3p9 = monzo.reduce(
        (n2d3p9: N2D3P9, primeExponent: Exponent<Prime>, index: number) => {
            const prime = PRIMES[ index ]
            const divisor = primeExponent < 0 ? 3 : 2

            return n2d3p9 * (prime / divisor) ** abs(primeExponent) as N2D3P9
        },
        1 as N2D3P9,
    ) * computeGpf(monzo) * (1 / 9) as N2D3P9

    return round(n2d3p9, ACCURACY_THRESHOLD)
}

export {
    computeN2D3P9,
}