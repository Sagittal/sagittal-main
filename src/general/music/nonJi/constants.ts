import { Monzo, Quotient } from "../../math"

const SQRT_SCALER = [1, 2] as Quotient

const NON_JI_PITCH_BASE_MONZO = [1] as Monzo<{ rational: true }>

export {
    NON_JI_PITCH_BASE_MONZO,
    SQRT_SCALER,
}