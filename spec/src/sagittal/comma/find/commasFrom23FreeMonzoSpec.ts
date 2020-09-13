import { Abs, Cents, Comma, Exponent, Integer, Max, Min, Monzo, Prime } from "../../../../../src/general"
import { ApotomeSlope, computeCommasFrom23FreeMonzo, N2D3P9 } from "../../../../../src/sagittal"

describe("computeCommasFrom23FreeMonzo", (): void => {
    const twoThreeFreeMonzo: Monzo<{ rough: 5 }> = [0, 0, 3, 5, -1] as Monzo<{ rough: 5 }>
    const minCents = 40 as Min<Cents>
    const maxCents = 40.1 as Max<Cents>
    const maxAbsolute3Exponent = 12 as Max<Abs<3 & Integer & Exponent<Prime>>>
    const maxN2D3P9 = 40000 as Max<N2D3P9>

    it("returns commas with the prime content from the two-three-free monzo", (): void => {
        const actual = computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, {
            minCents,
            maxCents,
            maxAbsolute3Exponent,
            maxN2D3P9,
        })

        const expected = [{ monzo: [-8, -6, 3, 5, -1] as Monzo } as Comma]
        expect(actual).toEqual(expected)
    })

    describe("max apotome slope", (): void => {
        it("does not include commas with apotome slope greater than it", (): void => {
            const highMaxAbsoluteApotomeSlope = 10 as Max<Abs<ApotomeSlope>>
            const lowMaxAbsoluteApotomeSlope = 8 as Max<Abs<ApotomeSlope>>

            const resultWithHighMaxAbsoluteApotomeSlope = computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, {
                minCents,
                maxCents,
                maxAbsolute3Exponent,
                maxAbsoluteApotomeSlope: highMaxAbsoluteApotomeSlope,
                maxN2D3P9,
            })

            const expected = [{ monzo: [-8, -6, 3, 5, -1] as Monzo } as Comma]
            expect(resultWithHighMaxAbsoluteApotomeSlope).toEqual(expected)

            const resultWithLowMaxAbsoluteApotomeSlope = computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, {
                minCents,
                maxCents,
                maxAbsolute3Exponent,
                maxAbsoluteApotomeSlope: lowMaxAbsoluteApotomeSlope,
            })

            expect(resultWithLowMaxAbsoluteApotomeSlope).toEqual(jasmine.arrayWithExactContents([]))
        })
    })
})
