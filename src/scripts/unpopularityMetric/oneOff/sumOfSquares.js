const {} = require("../bests")
const {computeSumOfSquaresForSubmetricCombination} = require("../sumOfSquares/sumOfSquaresForSubmetricCombination")
const {SUBMETRIC_TYPE, PARAMETER, USE_AS} = require("../constants")

const submetricCombination =
    [
        {
            [PARAMETER.K]: 0.038,
            [PARAMETER.A]: 1.994,
            [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
            [PARAMETER.Y]: 0.455,
            [PARAMETER.W]: -2.08,
        },
        {
            [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
            [PARAMETER.WEIGHT]: 0.577,
        },
    ]

const sumOfSquares = computeSumOfSquaresForSubmetricCombination(submetricCombination, {logUnpopularities: true})

console.log(`${sumOfSquares}\n${JSON.stringify(submetricCombination)}`)
