import { Monzo, NumericTypeParameters, Ratio } from "../math"
import { Extrema } from "../types"
import { JiPitch } from "./ji"

type Cents = number & { _CentsBrand: "Cents" }

// TODO: NO LONGER BASED ON CENTS; JI PITCH VS RATIONAL NUMBER SEAM, ETC.
//  if you had the code base work in Pitch first and cents only secondarily,
//  then the monzo to and from cents stuff could live in math/ instead of music/
//  and then this would be more just like some number, a pure multiplier or coefficient of waveform frequency
//  just can't figure out what to call it. PitchValue maybe...? Scaler?
//  meaning that JiPitch would really be more like a RationalNumber, while this would be an IrrationalNumber
//  - also starting to think about non-JI pitches
//  what about logarithmic pitch vs acoustic pitch
//  that could help answer the question about what to name that "pitchvalue" thing
//  e.g. how in Erv's writings about golden horograms
//  he names the pitches with values between 0 and 1, like 0.618...
//  that is logarithmic pitch and would require a second piece of information, the 2, to understand what the base was
//  but actually if you combine those two things, you're still good
//  and continued fractions
//  like monzos, it may be a good idea to support those
//  so the continued fraction can be the exponent in this power
//  but it could also just be another option
//  - another thing to keep in mind:
//  So we've established that prime limit is the direct musical equivalent of smooth in math
//  perhaps there is some way to fernangle it so that pitches could have free: [2,3] and then potentially you know
//  like [3,5,7] such as is the case in the Yer tuning system, where it's a chunk in the middle, nonconsecutive
//  and ji: true could map to irrational: false
type CentsPosition<T extends NumericTypeParameters = {}> = {
    cents: Cents,
    monzo?: Monzo<T & { irrational: true }>,
    ratio?: Ratio<T & { irrational: true }>,
}

type Pitch<T extends NumericTypeParameters = {}> =
    JiPitch<T> | CentsPosition<T>

type Zone<T = void> = Extrema<Cents> & (T extends void ? {} : { _ZoneOfBrand: T })

export {
    CentsPosition,
    Cents,
    Zone,
    Pitch,
}
