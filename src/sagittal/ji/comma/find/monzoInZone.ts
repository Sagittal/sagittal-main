import {
    computeTrimmedArray,
    equalMonzos,
    Exponent,
    Integer,
    Maybe,
    Monzo,
    numIsHigher,
    numIsHigherOrEqual,
    numIsLower,
    numIsLowerOrEqual,
    Prime,
    shallowClone,
    TWO_PRIME_INDEX,
    Zone,
} from "../../../../general"

const computeMonzoInZone = (twoFreeMonzo: Monzo<{ rough: 3 }>, zone: Zone): Maybe<Monzo> => {
    const [lowerBound, upperBound] = zone

    const monzoInZone = shallowClone(twoFreeMonzo)

    if (!equalMonzos(monzoInZone, [] as Monzo)) {
        // TODO: this isn't ideal how we're making fake pitches to use the available helpers
        //  But the alternative would be have, what, a "numify" helper? 
        //  Or expose a monzoIsHigher and then grab the monzo out of the upperBound? 
        //  Or should numIsHigher simply accept Monzos, Ratios, and Decimals in addition to Nums?
        //  That seems like the way. Which would involve having some typeGuards to distinguish Monzos from Ratios
        //  Based on their brands, as I believe I've done in Musical Patterns before
        while (numIsHigher({ monzo: monzoInZone }, upperBound)) {
            monzoInZone[ TWO_PRIME_INDEX ] = monzoInZone[ TWO_PRIME_INDEX ] - 1 as Integer & Exponent<Prime>
        }
        while (numIsLower({ monzo: monzoInZone }, lowerBound)) {
            monzoInZone[ TWO_PRIME_INDEX ] = monzoInZone[ TWO_PRIME_INDEX ] + 1 as Integer & Exponent<Prime>
        }
    }

    return (
        numIsHigherOrEqual({ monzo: monzoInZone }, lowerBound) &&
        numIsLowerOrEqual({ monzo: monzoInZone }, upperBound)
    ) ?
        computeTrimmedArray(monzoInZone) :
        undefined
}

export {
    computeMonzoInZone,
}
