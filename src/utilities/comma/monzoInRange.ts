import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { computeCentsFromRatio } from "./centsFromRatio"
import { CENTS_PER_OCTAVE } from "../constants"
import { Monzo, PrimeExponent } from "./types"
import { Cents, Ratio } from "../types"

const computeCentsFromMonzo = (monzo: Monzo): Cents => {
    const ratio: Ratio = computeRatioFromMonzo(monzo)

    return computeCentsFromRatio(ratio)
}

const computeMonzoInRange = (threeSlicedMonzo: Monzo<3>, lowerBound: Cents, upperBound: Cents) => {
    if (upperBound - lowerBound > CENTS_PER_OCTAVE) throw new Error("Cents range must be less than 1200.")

    const monzo: Monzo = [0, ...threeSlicedMonzo] as Monzo
    let cents: Cents = computeCentsFromMonzo(monzo)
    while (cents > upperBound) {
        monzo[ 0 ] = monzo[ 0 ] - 1 as PrimeExponent
        cents = computeCentsFromMonzo(monzo)
    }
    while (cents < lowerBound) {
        monzo[ 0 ] = monzo[ 0 ] + 1 as PrimeExponent
        cents = computeCentsFromMonzo(monzo)
    }

    return cents > lowerBound && cents < upperBound ? monzo : undefined
}

export {
    computeMonzoInRange,
}
