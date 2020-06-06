const {calculateBoundHistories} = require("../../../../src/boundsAnalysis/calculateHistories/calculateBoundHistories")

describe("calculateBoundHistories", () => {
    it("given a bound, returns an array of all of its possible histories", () => {
        const bound = {
            position: 9.5,
            levels: ["MEDIUM", "VERY_HIGH", "EXTREME"],
        }

        const result = calculateBoundHistories(bound)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 7.72288142310195,
                },
                {
                    level: "MEDIUM",
                    type: "EDA",
                    name: "1.5/21",
                    position: 8.120357575550852,
                },
                {
                    level: "VERY_HIGH",
                    type: "IMPOSSIBLE",
                    name: "not between ~| @8.730 and )|( @9.688 at the VERY_HIGH level",
                    position: 8.120357575550852,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 7.72288142310195,
                },
                {
                    level: "MEDIUM",
                    type: "MEAN",
                    name: "|( )|(",
                    position: 7.72288142310195,
                },
                {
                    level: "VERY_HIGH",
                    type: "IMPOSSIBLE",
                    name: "not between ~| @8.730 and )|( @9.688 at the VERY_HIGH level",
                    position: 7.72288142310195,
                },
            ],
            [
                {
                    level: "MEDIUM",
                    type: "OVERRIDE",
                    name: "OVERRIDE",
                    position: 9.208778600061725,
                },
                {
                    level: "VERY_HIGH",
                    type: "EDA",
                    name: "4.5/58",
                    position: 8.820388401029373,
                },
                {
                    level: "EXTREME",
                    type: "IMPOSSIBLE",
                    name: "not between ,)|( @9.182 and )|( @9.688 at the EXTREME level",
                    position: 8.820388401029373,
                },
            ],
            [
                {
                    level: "MEDIUM",
                    type: "OVERRIDE",
                    name: "OVERRIDE",
                    position: 9.208778600061725,
                },
                {
                    level: "VERY_HIGH",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725,
                },
                {
                    level: "EXTREME",
                    type: "EDA",
                    name: "19.5/233",
                    position: 9.514410378220525,
                },
            ],
            [
                {
                    level: "MEDIUM",
                    type: "OVERRIDE",
                    name: "OVERRIDE",
                    position: 9.208778600061725,
                },
                {
                    level: "VERY_HIGH",
                    type: "MEAN",
                    name: "~| )|(",
                    position: 9.208778600061725,
                },
                {
                    level: "EXTREME",
                    type: "MEAN",
                    name: ",)|( )|(",
                    position: 9.434865916310185,
                },
            ],
        ]))
    })

    it("works for the final bound", () => {
        const bound = {
            position: 68.5725082211804,
            levels: ["MEDIUM", "HIGH", "VERY_HIGH", "EXTREME", "INSANE"],
        }

        const result = calculateBoundHistories(bound)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "EDA",
                    name: "12.5/21",
                    position: 67.66964646292375,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "EDA",
                    name: "34.5/58",
                    position: 67.62297774122518,
                },
                {
                    level: "EXTREME",
                    type: "IMPOSSIBLE",
                    name: "not between ``)|\\\\ @68.124 and the maximum position @68.573 at the EXTREME level",
                    position: 67.62297774122518,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "EDA",
                    name: "12.5/21",
                    position: 67.66964646292375,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "EXTREME",
                    type: "EDA",
                    name: "140.5/233",
                    position: 68.55254657128121,
                },
                {
                    level: "INSANE",
                    type: "EDA",
                    name: "485.5/809",
                    position: 68.22505616936851,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "EDA",
                    name: "12.5/21",
                    position: 67.66964646292375,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "EXTREME",
                    type: "EDA",
                    name: "140.5/233",
                    position: 68.55254657128121,
                },
                {
                    level: "INSANE",
                    type: "EDA",
                    name: "486.5/809",
                    position: 68.36558151678226,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "EDA",
                    name: "12.5/21",
                    position: 67.66964646292375,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "EXTREME",
                    type: "EDA",
                    name: "140.5/233",
                    position: 68.55254657128121,
                },
                {
                    level: "INSANE",
                    type: "EDA",
                    name: "487.5/809",
                    position: 68.50610686419598,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "EDA",
                    name: "12.5/21",
                    position: 67.66964646292375,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "EXTREME",
                    type: "EDA",
                    name: "140.5/233",
                    position: 68.55254657128121,
                },
                {
                    level: "INSANE",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "EDA",
                    name: "12.5/21",
                    position: 67.66964646292375,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "INSANE",
                    type: "EDA",
                    name: "485.5/809",
                    position: 68.22505616936851,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "EDA",
                    name: "12.5/21",
                    position: 67.66964646292375,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "INSANE",
                    type: "EDA",
                    name: "486.5/809",
                    position: 68.36558151678226,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "EDA",
                    name: "12.5/21",
                    position: 67.66964646292375,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "INSANE",
                    type: "EDA",
                    name: "487.5/809",
                    position: 68.50610686419598,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "EDA",
                    name: "12.5/21",
                    position: 67.66964646292375,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "INSANE",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "EDA",
                    name: "34.5/58",
                    position: 67.62297774122518,
                },
                {
                    level: "EXTREME",
                    type: "IMPOSSIBLE",
                    name: "not between ``)|\\\\ @68.124 and the maximum position @68.573 at the EXTREME level",
                    position: 67.62297774122518,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "EXTREME",
                    type: "EDA",
                    name: "140.5/233",
                    position: 68.55254657128121,
                },
                {
                    level: "INSANE",
                    type: "EDA",
                    name: "485.5/809",
                    position: 68.22505616936851,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "EXTREME",
                    type: "EDA",
                    name: "140.5/233",
                    position: 68.55254657128121,
                },
                {
                    level: "INSANE",
                    type: "EDA",
                    name: "486.5/809",
                    position: 68.36558151678226,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "EXTREME",
                    type: "EDA",
                    name: "140.5/233",
                    position: 68.55254657128121,
                },
                {
                    level: "INSANE",
                    type: "EDA",
                    name: "487.5/809",
                    position: 68.50610686419598,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "EXTREME",
                    type: "EDA",
                    name: "140.5/233",
                    position: 68.55254657128121,
                },
                {
                    level: "INSANE",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "INSANE",
                    type: "EDA",
                    name: "485.5/809",
                    position: 68.22505616936851,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "INSANE",
                    type: "EDA",
                    name: "486.5/809",
                    position: 68.36558151678226,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "INSANE",
                    type: "EDA",
                    name: "487.5/809",
                    position: 68.50610686419598,
                },
            ],
            [
                {
                    level: "INITIAL",
                    type: "INITIAL",
                    name: "INITIAL",
                    position: 68.5725082211804,
                },
                {
                    level: "MEDIUM",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "VERY_HIGH",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "EXTREME",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
                {
                    level: "INSANE",
                    type: "SIZE",
                    name: "L|SS",
                    position: 68.5725082211804,
                },
            ],
        ]))
    })
})
