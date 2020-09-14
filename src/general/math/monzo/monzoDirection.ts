import { computeCentsFromMonzo } from "../../music"
import { computeRatioFromMonzo } from "../ratio"
import { negative } from "../typedOperations"
import { Direction, Exponent, NumericTypeParameters, Prime } from "../types"
import { Monzo, PotentiallyIrrationalMonzoParameter } from "./types"

const computeIsSubMonzo = <T extends NumericTypeParameters>(
    monzo: PotentiallyIrrationalMonzoParameter<Omit<T, "direction">>,
): monzo is Monzo<Omit<T, "direction"> & { direction: Direction.SUB }> => {
    if (monzo.length && monzo.every((term: Exponent<Prime>): boolean => term >= 0)) return false
    if (monzo.length && monzo.every((term: Exponent<Prime>): boolean => term <= 0)) return true

    let ratio
    try {
        ratio = computeRatioFromMonzo(monzo)
    } catch (e) {
        const numeratorMonzo = monzo.map((term: Exponent<Prime>): Exponent<Prime> => {
            return term > 0 ? term : 0 as Exponent<Prime>
        }) as Monzo
        const denominatorMonzo = monzo.map((term: Exponent<Prime>): Exponent<Prime> => {
            return term < 0 ? negative(term) : 0 as Exponent<Prime>
        }) as Monzo

        let numeratorError = false
        try {
            computeRatioFromMonzo(numeratorMonzo)
        } catch (e) {
            numeratorError = true
        }

        let denominatorError = false
        try {
            computeRatioFromMonzo(denominatorMonzo)
        } catch (e) {
            denominatorError = true
        }

        if (numeratorError && !denominatorError) {
            return false
        } else if (denominatorError && !numeratorError) {
            return true
        } else {
            try {
                const cents = computeCentsFromMonzo(monzo)

                return cents < 0
            } catch (e) {
                throw new Error("Both the denominator, numerator, and prime limit are huge for this monzo so it is not possible to tell whether it is sub.")
            }
        }
    }

    const value = ratio[ 0 ] / ratio[ 1 ]

    return value < 1
}

const computeIsSuperMonzo = <T extends NumericTypeParameters>(
    monzo: PotentiallyIrrationalMonzoParameter<Omit<T, "direction">>,
): monzo is Monzo<Omit<T, "direction"> & { direction: Direction.SUPER }> => {
    return !(computeIsUnisonMonzo(monzo) || computeIsSubMonzo(monzo))
}

const computeIsUnisonMonzo = <T extends NumericTypeParameters>(
    monzo: PotentiallyIrrationalMonzoParameter<Omit<T, "direction">>,
): monzo is Monzo<Omit<T, "direction"> & { direction: Direction.UNISON }> => {
    return monzo.every((term: Exponent<Prime>): boolean => term === 0)
}

const computeSuperMonzo = <T extends NumericTypeParameters>(
    monzo: PotentiallyIrrationalMonzoParameter<T>,
): Monzo<Omit<T, "direction"> & { direction: Direction.SUPER }> => {
    if (computeIsSubMonzo(monzo)) {
        return invertMonzo(monzo)
    }

    return monzo as Monzo<T & { direction: Direction.SUPER }>
}

const invertMonzo: {
    <T extends NumericTypeParameters & { direction: Direction.SUPER }>(
        monzo: PotentiallyIrrationalMonzoParameter<T>,
    ): Monzo<T & { direction: Direction.SUB }>,
    <T extends NumericTypeParameters & { direction: Direction.SUB }>(
        monzo: PotentiallyIrrationalMonzoParameter<T>,
    ): Monzo<T & { direction: Direction.SUPER }>,
    <T extends NumericTypeParameters>(
        monzo: PotentiallyIrrationalMonzoParameter<T>,
    ): Monzo<T>,
} = <T extends NumericTypeParameters>(monzo: Monzo<T>): Monzo<T> =>
    monzo.map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
        return primeExponent === 0 ?
            0 as Exponent<Prime> :
            -primeExponent as Exponent<Prime>
    }) as Monzo<T>


export {
    computeIsSubMonzo,
    computeIsSuperMonzo,
    computeIsUnisonMonzo,
    computeSuperMonzo,
    invertMonzo,
}