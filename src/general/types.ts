import { Maybe } from "./code"
import { Io } from "./io"
import { Integer, Max, Min } from "./math"

// Numeric types where parameter is not numeric
type Index<T = void> = Integer & { _IndexBrand: "Index" } & (T extends void ? {} : { _IndexOfBrand: T })
type Id<T = void> = Integer & { _IdBrand: "Id" } & (T extends void ? {} : { _IdOfBrand: T })
type Count<T = void> = Integer & { _CountBrand: "Count" } & (T extends void ? {} : { _CountOfBrand: T })

// Numeric types where parameter is also numeric
type Multiplier<T extends number | void = void> =
    number
    & { _MultiplierBrand: "Multiplier" }
    & (T extends void ? {} : T & { _MultiplierOfBrand: T })
type Sum<T extends number | void = void> =
    number
    & { _SumBrand: "Sum" }
    & (T extends void ? {} : T & { _SumOfBrand: T })

type Step<EdCount extends number | void = void, T extends number = Integer> =
    T
    & { _StepBrand: "Step", _StepOfEdBrand: EdCount }
type Ed<WindowSize extends number | void = void, T extends number = Integer> =
    T
    & { _EdBrand: "Ed", _WindowSizeBrand: WindowSize }
type Window<WindowSize extends number | unknown = unknown, T extends number = Integer> =
    T
    & { _WindowBrand: "Window", _WindowSizeBrand: WindowSize }

type Name<T = void> = Io & { _NameBrand: "Name" } & (T extends void ? {} : { _NameOfBrand: T })

type Extrema<T extends number = number, Open extends "Open" | void = void> = [
    Open extends "Open" ? Maybe<Min<T>> : Min<T>,
    Open extends "Open" ? Maybe<Max<T>> : Max<T>,
]

type Ms = number & { _MsBrand: "Ms" }

export {
    Multiplier,
    Index,
    Count,
    Sum,
    Id,
    Window,
    Step,
    Ed,
    Name,
    Extrema,
    Ms,
}
