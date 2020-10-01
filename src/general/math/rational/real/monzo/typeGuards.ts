import { Monzo, NumericProperties } from "../../../real"
import { Exponent } from "../../../types"
import { Prime } from "../../types"
import { isIntegerDecimal } from "../decimal"
import { IntegerMonzo, RationalMonzo } from "./types"

const isRationalMonzo = <T extends NumericProperties>(
    candidateRationalMonzo: Monzo<T>,
): candidateRationalMonzo is RationalMonzo<T> =>
    candidateRationalMonzo.every((primeExponent: Exponent<Prime>): boolean => isIntegerDecimal(primeExponent))

const isIntegerMonzo = <T extends NumericProperties>(
    candidateIntegerMonzo: Monzo<T>,
): candidateIntegerMonzo is IntegerMonzo<T> =>
    isRationalMonzo(candidateIntegerMonzo) &&
    candidateIntegerMonzo.every((primeExponent: Exponent<Prime>): boolean => primeExponent >= 0)

export {
    isIntegerMonzo,
    isRationalMonzo,
}