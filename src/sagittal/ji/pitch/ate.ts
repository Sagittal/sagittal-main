import { abs, Abs, computeJiPitchMonzo, Exponent, Integer, JiPitch, Prime, THREE_PRIME_INDEX } from "../../../general"

const computeAte = (jiPitch: JiPitch): Abs<Integer & Exponent<3 & Prime>> => {
    const monzo = computeJiPitchMonzo(jiPitch)

    return abs(monzo[ THREE_PRIME_INDEX ] || 0) as Abs<Integer & Exponent<3 & Prime>>
}

export {
    computeAte,
}