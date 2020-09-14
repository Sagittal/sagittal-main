import { computeSuperPitch } from "../../../../src/general"
import { Direction, Ratio } from "../../../../src/general/math"
import { Monzo } from "../../../../src/general/math/monzo"
import { Cents, computeIsSubPitch, computeIsUnisonPitch, Pitch } from "../../../../src/general/music"
import { computeIsSuperPitch } from "../../../../src/general/music/pitchDirection"

describe("computeIsSubPitch", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the monzo is sub", (): void => {
            const pitch = { monzo: [-1] as Monzo }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is unison", (): void => {
            const pitch = { monzo: [] as Monzo }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is super", (): void => {
            const pitch = { monzo: [1] as Monzo }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns true if the ratio is sub", (): void => {
            const pitch = { ratio: [1, 3] as Ratio }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is unison", (): void => {
            const pitch = { ratio: [3, 3] as Ratio }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the ratio is super", (): void => {
            const pitch = { ratio: [3, 1] as Ratio }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("by cents", (): void => {
        it("returns true if the cents are negative", (): void => {
            const pitch = { cents: -7.1 as Cents }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the cents are zero", (): void => {
            const pitch = { cents: 0 as Cents }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the cents are positive", (): void => {
            const pitch = { cents: 7.1 as Cents }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeIsSuperPitch", (): void => {
    describe("by monzo", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const pitch = { monzo: [-1] as Monzo }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is unison", (): void => {
            const pitch = { monzo: [] as Monzo }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is super", (): void => {
            const pitch = { monzo: [1] as Monzo }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("by ratio", (): void => {
        it("returns false if the ratio is sub", (): void => {
            const pitch = { ratio: [1, 3] as Ratio }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the ratio is unison", (): void => {
            const pitch = { ratio: [3, 3] as Ratio }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the ratio is super", (): void => {
            const pitch = { ratio: [3, 1] as Ratio }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("by cents", (): void => {
        it("returns false if the cents are negative", (): void => {
            const pitch = { cents: -7.1 as Cents }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the cents are zero", (): void => {
            const pitch = { cents: 0 as Cents }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the cents are positive", (): void => {
            const pitch = { cents: 7.1 as Cents }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeTruthy()
        })
    })
})

describe("computeIsUnisonPitch", (): void => {
    describe("by monzo", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const pitch = { monzo: [-1] as Monzo }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is unison", (): void => {
            const pitch = { monzo: [] as Monzo }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is super", (): void => {
            const pitch = { monzo: [1] as Monzo }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns false if the ratio is sub", (): void => {
            const pitch = { ratio: [1, 3] as Ratio }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the ratio is unison", (): void => {
            const pitch = { ratio: [3, 3] as Ratio }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is super", (): void => {
            const pitch = { ratio: [3, 1] as Ratio }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("by cents", (): void => {
        it("returns false if the cents are negative", (): void => {
            const pitch = { cents: -7.1 as Cents }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the cents are zero", (): void => {
            const pitch = { cents: 0 as Cents }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the cents are positive", (): void => {
            const pitch = { cents: 7.1 as Cents }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeSuperPitch", (): void => {
    it("flips the monzo, ratio, cents", (): void => {
        const pitch: Pitch<{ direction: Direction.SUB }> = {
            monzo: [-40, 22, 1, 1] as Monzo<{ direction: Direction.SUB }>,
            ratio: [1098337086315, 1099511627776] as Ratio<{ direction: Direction.SUB }>,
            cents: -1.850 as Cents,
        }

        const actual = computeSuperPitch(pitch)

        const expected: Pitch<{ direction: Direction.SUPER }> = {
            monzo: [40, -22, -1, -1] as Monzo<{ direction: Direction.SUPER }>,
            ratio: [1099511627776, 1098337086315] as Ratio<{ direction: Direction.SUPER }>,
            cents: 1.850 as Cents,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only monzo is provided", (): void => {
        const pitch: Pitch<{ direction: Direction.SUB }> = {
            monzo: [-40, 22, 1, 1] as Monzo<{ direction: Direction.SUB }>,
        }

        const actual: Pitch<{ direction: Direction.SUPER }> = computeSuperPitch(pitch)

        const expected: Pitch<{ direction: Direction.SUPER }> = {
            monzo: [40, -22, -1, -1] as Monzo<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only ratio is provided", (): void => {
        const pitch: Pitch<{ direction: Direction.SUB }> = {
            ratio: [1098337086315, 1099511627776] as Ratio<{ direction: Direction.SUB }>,
        }

        const actual = computeSuperPitch(pitch)

        const expected: Pitch<{ direction: Direction.SUPER }> = {
            ratio: [1099511627776, 1098337086315] as Ratio<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only cents are provided", (): void => {
        const pitch: Pitch<{ direction: Direction.SUB }> = {
            cents: -1.850 as Cents,
        }

        const actual = computeSuperPitch(pitch)

        const expected: Pitch<{ direction: Direction.SUPER }> = {
            cents: 1.850 as Cents,
        }
        expect(actual).toEqual(expected)
    })
})