import { deepClone, Window } from "../../../general"
import { computeDynamicParameterScope, DynamicParameter, SamplePoint, Scope } from "../bestMetric"
import { ParameterValue } from "../sumOfSquares"

const computeNextScope = (samplePoint: SamplePoint, dynamicParameters: DynamicParameter[], scope: Scope): Scope => {
    const nextScope = deepClone(scope)

    samplePoint.forEach((dynamicParameterValueIndex, index) => {
        const { submetricIndex, parameter, values, unit } = dynamicParameters[ index ]

        const center = values[ dynamicParameterValueIndex ]
        const window: Window<ParameterValue> = unit * (2 / 3) as Window<ParameterValue>

        nextScope[ submetricIndex ][ parameter ] = computeDynamicParameterScope({ center, window })
    })

    return nextScope
}

export {
    computeNextScope,
}
