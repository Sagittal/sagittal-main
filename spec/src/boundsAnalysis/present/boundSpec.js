const {extractBoundIdentifiers} = require("../../../../src/boundsAnalysis/present/bound")

describe("extractBoundIdentifiers", () => {
    const bound = {
        position: 23.1164196495597,
        levels: ["ULTRA", "EXTREME", "INSANE"],
    }

    it("returns helpful identifying information about the bound", () => {
        const boundIndex = 47

        const result = extractBoundIdentifiers(bound, boundIndex)

        expect(result).toEqual({
            extremeLevelLesserBoundedCommaSymbol: ".)/|",
            extremeLevelGreaterBoundedCommaSymbol: "'/|",
            position: 23.1164196495597,
            boundedCommas: {
                ULTRA: [
                    {
                        introducingLevel: "ULTRA",
                        position: 22.9305875372457,
                        distance: 23.1164196495597 - 22.9305875372457,
                        ascii: ".)/|",
                        unicode: '',
                        mina: 47,
                        monzo: [ 2, -1, -2, 0, 0, 0, 0, 1 ]
                        index: 47, // not the best example since index and mina are the same up to this point
                    },
                    {
                        introducingLevel: "ULTRA",
                        position: 23.4600103846490,
                        distance: 23.46001038464900 - 23.1164196495597,
                        ascii: "'/|",
                        unicode: '',
                        mina: 48,
                        monzo: [ -19, 12 ]
                        index: 48,
                    },
                ],
                EXTREME: [
                    {
                        introducingLevel: "ULTRA",
                        position: 22.9305875372457,
                        distance: 23.1164196495597 - 22.9305875372457,
                        ascii: ".)/|",
                        unicode: '',
                        mina: 47,
                        monzo: [ 2, -1, -2, 0, 0, 0, 0, 1 ]
                        index: 47,
                    },
                    {
                        introducingLevel: "ULTRA",
                        position: 23.4600103846490,
                        distance: 23.46001038464900 - 23.1164196495597,
                        ascii: "'/|",
                        unicode: '',
                        mina: 48,
                        monzo: [ -19, 12 ]
                        index: 48,
                    },
                ],
                INSANE: [
                    {
                        introducingLevel: "ULTRA",
                        position: 22.9305875372457,
                        distance: 23.1164196495597 - 22.9305875372457,
                        ascii: ".)/|",
                        unicode: '',
                        mina: 47,
                        index: 47,
                        monzo: [ 2, -1, -2, 0, 0, 0, 0, 1 ]
                    },
                    {
                        introducingLevel: "ULTRA",
                        position: 23.4600103846490,
                        distance: 23.46001038464900 - 23.1164196495597,
                        ascii: "'/|",
                        unicode: '',
                        mina: 48,
                        index: 48,
                        monzo: [ -19, 12 ]
                    },
                ],
            },
            lesserBoundedMina: 47,
            greaterBoundedMina: 48,
        })
    })
})
