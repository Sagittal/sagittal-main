import { NumericProperties, subtractMonzos, sumMonzos } from "../../math"
import { Pitch } from "../pitch"

const computeStackedJiPitch = <T extends NumericProperties>(
    jiPitchA: Pitch<T & { rational: true }>,
    jiPitchB: Pitch<T & { rational: true }>,
): Pitch<T & { direction: undefined, integer: false, rational: true }> =>
    ({
        monzo: sumMonzos(jiPitchA.monzo, jiPitchB.monzo),
    }) as Pitch<T & { direction: undefined, integer: false, rational: true }>

const computeJiInterval = <T extends NumericProperties>(
    fromJiPitch: Pitch<T & { rational: true }>,
    toJiPitch: Pitch<T & { rational: true }>,
): Pitch<T & { direction: undefined, integer: false }> =>
    ({
        monzo: subtractMonzos(toJiPitch.monzo, fromJiPitch.monzo),
    }) as Pitch<T & { direction: undefined, integer: false, rational: true }>

export {
    computeJiInterval,
    computeStackedJiPitch,
}
