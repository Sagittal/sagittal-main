import {DEFAULT_PRECISION, KeyPath, sort} from "../../../../src/general/code"

describe("sort", (): void => {
    it("takes an array and sorts it numerically, in place", (): void => {
        const array = [5, 1, 7, 2, 4, 3]

        sort(array)

        const expected = [1, 2, 3, 4, 5, 7]
        expect(array).toEqual(expected)
    })

    it("returns the sorted array", (): void => {
        const array = [5, 1, 7, 2, 4, 3]

        const actual = sort(array)

        expect(actual).toEqual(array)
    })

    it("it isn't dumb and will actually sort numeric things numerically (instead of alphabetically, driving me nuts)            ", (): void => {
        const array = [2000, 300, 5, 10000, 40]

        const actual = sort(array)

        const expected = [5, 40, 300, 2000, 10000]
        expect(actual).toEqual(expected)
    })

    it("will sort things numerically even if the key path is a bit complex", (): void => {
        const array = [[48, "gummy"], [23, "hobo"], [103, "jeans"]]

        const actual = sort(array, {by: 0 as KeyPath})

        const expected = [[23, "hobo"], [48, "gummy"], [103, "jeans"]]
        expect(actual).toEqual(expected)
    })

    it("can sort by one element in an array", (): void => {
        const array = [[2000, 3], [300, 5], [5, 1], [10000, 4], [40, 2]]

        const actual = sort(array, {by: 1 as KeyPath}) // Sorting by the 2nd element of each array in the array

        const expected = [[5, 1], [40, 2], [2000, 3], [10000, 4], [300, 5]]
        expect(actual).toEqual(expected)
    })

    it("when provided a key to sort by, assumes the array is of objects with that key", (): void => {
        const array = [{a: 5, b: 9}, {a: 1, b: 8}, {a: 7, b: 7}, {a: 2, b: 6}, {a: 4, b: 5}, {a: 3, b: 4}]

        sort(array, {by: "a" as KeyPath})

        const expected = [
            {a: 1, b: 8},
            {a: 2, b: 6},
            {a: 3, b: 4},
            {a: 4, b: 5},
            {a: 5, b: 9},
            {a: 7, b: 7},
        ]
        expect(array).toEqual(expected)
    })

    it("can sort descending", (): void => {
        const array = [5, 1, 7, 2, 4, 3]

        sort(array, {descending: true})

        const expected = [7, 5, 4, 3, 2, 1]
        expect(array).toEqual(expected)
    })

    it("can use a nested path as a sort key", (): void => {
        const array = [
            [{}, {a: 5}],
            [{}, {a: 1}],
            [{}, {a: 7}],
            [{}, {a: 2}],
            [{}, {a: 4}],
            [{}, {a: 3}],
        ]

        sort(array, {by: [1, "a"] as KeyPath})

        const expected = [
            [{}, {a: 1}],
            [{}, {a: 2}],
            [{}, {a: 3}],
            [{}, {a: 4}],
            [{}, {a: 5}],
            [{}, {a: 7}],
        ]
        expect(array).toEqual(expected)
    })

    it("works for arrays of strings", (): void => {
        const array = ["grapes", "apple", "banana"]

        sort(array)

        expect(array).toEqual(["apple", "banana", "grapes"])
    })

    it("accepts precision as an option", (): void => {
        const array = [5, 2.0000001, 7, 2, 4, 3]

        sort(array, {precision: DEFAULT_PRECISION})

        const expected = [2.0000001, 2, 3, 4, 5, 7]
        expect(array).toEqual(expected)
    })
})
