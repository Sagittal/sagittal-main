import { computeTrimmedArray, isUndefined } from "../../../../code"
import { formatNum } from "../../../../io"
import { Monzo, NumTypeParameters } from "../../../num"
import { RationalNum } from "../types"
import { computeMonzoFromRatio } from "./monzoFromRatio"
import { computeMonzoFromRationalDecimal } from "./monzoFromRationalDecimal"

const computeMonzoFromRationalNum = <T extends NumTypeParameters>(
    rationalNum: RationalNum<T>,
): Monzo<T> => {
    const { monzo, ratio, decimal } = rationalNum
    let outputMonzo: Monzo<T>
    if (!isUndefined(monzo)) {
        outputMonzo = monzo
    } else if (!isUndefined(ratio)) {
        outputMonzo = computeMonzoFromRatio(ratio)
    } else if (!isUndefined(decimal)) {
        outputMonzo = computeMonzoFromRationalDecimal(decimal)
    } else {
        throw new Error(`Tried to compute monzo from rational num ${formatNum(rationalNum)} but it had no numeric members.`)
    }

    return computeTrimmedArray(outputMonzo)
}

export {
    computeMonzoFromRationalNum,
}
