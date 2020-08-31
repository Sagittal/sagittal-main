import { Monzo, Ratio } from "../math"
import { Extrema, Name } from "../types"

type Cents = number & { _CentsBrand: "Cents" }

type CentsPosition = Partial<Pitch> & {
    cents: Cents,
}

interface Pitch {
    name: Name<Pitch>,
    cents: Cents,
    monzo: Monzo<number>,
    ratio: Ratio<number>,
}

type Votes = number & { _VotesBrand: "Votes" }

interface Popularity {
    fiveRoughRatio: Ratio,
    votes: Votes,
}

type Zone<T = void> = Extrema<Cents> & (T extends void ? {} : { _ZoneOfBrand: T })

export {
    CentsPosition,
    Cents,
    Votes,
    Popularity,
    Zone,
    Pitch,
}
