import { Io } from "../../../../../src/general/io"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("perfect-metrics", (): void => {
    const expected = [
        ``,
        ``,
        `THE PERFECTED METRICS ARE {`,
        `    "{},{sum,useNuminator}": {`,
        `        sumOfSquares: 0.014206086754420309,`,
        `        submetrics: [`,
        `            {`,
        `                [ Parameter.SUM ]: true,`,
        `                [ Parameter.USE_NUMINATOR ]: true`,
        `            }`,
        `        ],`,
        `        name: "{},{sum,useNuminator}"`,
        `    },`,
        `    "{},{aAsCoefficient,sum}": {`,
        `        sumOfSquares: 0.014206086754420309,`,
        `        submetrics: [`,
        `            {`,
        `                [ Parameter.SUM ]: true,`,
        `                [ Parameter.A_AS_COEFFICIENT ]: 0.1061111111111111`,
        `            }`,
        `        ],`,
        `        name: "{},{aAsCoefficient,sum}"`,
        `    },`,
        `    "{},{aAsPowerExponent,sum}": {`,
        `        sumOfSquares: 0.014047121378233201,`,
        `        submetrics: [`,
        `            {`,
        `                [ Parameter.SUM ]: true,`,
        `                [ Parameter.A_AS_POWER_EXPONENT ]: 1.1644915254237294`,
        `            }`,
        `        ],`,
        `        name: "{},{aAsPowerExponent,sum}"`,
        `    },`,
        `    "{},{sum,x}": {`,
        `        sumOfSquares: 0.013983040590027893,`,
        `        submetrics: [`,
        `            {`,
        `                [ Parameter.SUM ]: true,`,
        `                [ Parameter.X ]: 0.5543220338983049`,
        `            }`,
        `        ],`,
        `        name: "{},{sum,x}"`,
        `    },`,
        `    "{},{sum,w}": {`,
        `        sumOfSquares: 0.013983040590027893,`,
        `        submetrics: [`,
        `            {`,
        `                [ Parameter.SUM ]: true,`,
        `                [ Parameter.W ]: 0.5543220338983049`,
        `            }`,
        `        ],`,
        `        name: "{},{sum,w}"`,
        `    },`,
        `    "{},{aAsLogarithmBase,aAsPowerExponent,sum}": {`,
        `        sumOfSquares: 0.013162605298940203,`,
        `        submetrics: [`,
        `            {`,
        `                [ Parameter.SUM ]: true,`,
        `                [ Parameter.A_AS_LOGARITHM_BASE ]: 2,`,
        `                [ Parameter.A_AS_POWER_EXPONENT ]: 2.3848305084745762`,
        `            }`,
        `        ],`,
        `        name: "{},{aAsLogarithmBase,aAsPowerExponent,sum}"`,
        `    },`,
        `    "{},{aAsLogarithmBase,sum,w}": {`,
        `        sumOfSquares: 0.012380906299586478,`,
        `        submetrics: [`,
        `            {`,
        `                [ Parameter.SUM ]: true,`,
        `                [ Parameter.A_AS_LOGARITHM_BASE ]: 2,`,
        `                [ Parameter.W ]: -1.672966101694915`,
        `            }`,
        `        ],`,
        `        name: "{},{aAsLogarithmBase,sum,w}"`,
        `    },`,
        `    "{},{kAsPowerExponent,sum}": {`,
        `        sumOfSquares: 0.011924964168837053,`,
        `        submetrics: [`,
        `            {`,
        `                [ Parameter.SUM ]: true,`,
        `                [ Parameter.K_AS_POWER_EXPONENT ]: 0.9711016949152543`,
        `            }`,
        `        ],`,
        `        name: "{},{kAsPowerExponent,sum}"`,
        `    },`,
        `    "{},{jAsCoefficient,sum}": {`,
        `        sumOfSquares: 0.011916916032003604,`,
        `        submetrics: [`,
        `            {`,
        `                [ Parameter.SUM ]: true,`,
        `                [ Parameter.J_AS_COEFFICIENT ]: 1.005`,
        `            }`,
        `        ],`,
        `        name: "{},{jAsCoefficient,sum}"`,
        `    },`,
        `    "{},{jAsPowerExponent,sum}": {`,
        `        sumOfSquares: 0.009591240907070654,`,
        `        submetrics: [`,
        `            {`,
        `                [ Parameter.SUM ]: true,`,
        `                [ Parameter.J_AS_POWER_EXPONENT ]: 1.0727966101694915`,
        `            }`,
        `        ],`,
        `        name: "{},{jAsPowerExponent,sum}"`,
        `    },`,
        `    "{},{kAsCoefficient,sum}": {`,
        `        sumOfSquares: 0.009497103516271052,`,
        `        submetrics: [`,
        `            {`,
        `                [ Parameter.SUM ]: true,`,
        `                [ Parameter.K_AS_COEFFICIENT ]: 0.7727777777777778`,
        `            }`,
        `        ],`,
        `        name: "{},{kAsCoefficient,sum}"`,
        `    }`,
        `}`,
        `MAX UNIT 0.01`,
        `Z -1`,
        `ONLY TOP 80`,
    ] as Io[]

    it(
        "takes the best metrics that were found per metric name, relatively roughly best, and then recursively searches local minima with an initial search space subdividing resolution an order of magnitude smaller than the best metrics search, until it finds the perfect metric for each best metric",
        (): void => {
            onlyRunInCi()
            const command = "npm run perfect-metrics -- --log-targets finalPerfecterResults" as Io

            const actual = runCommandAndGetConsoleOutput(command)

            expect(actual).toEqual(expected)
        },
    )

    it(
        "works in sync mode too",
        (): void => {
            onlyRunInCi()
            const command = "npm run perfect-metrics -- --log-targets finalPerfecterResults --sync" as Io

            const actual = runCommandAndGetConsoleOutput(command)

            expect(actual).toEqual(expected)
        },
    )
})
