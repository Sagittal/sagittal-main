import { computeSuperRatio, Ratio } from "../../math"
import { Formatted } from "./types"

const formatRatio = <T extends Ratio>(
    inputRatio: T, { directed }: { directed: boolean } = { directed: true },
): Formatted<T> => {
    const [numerator, denominator] = directed ? inputRatio : computeSuperRatio(inputRatio)

    return directed ?
        `${numerator}/${denominator}` as Formatted<T> :
        `${denominator}:${numerator}` as Formatted<T>
}

export {
    formatRatio,
}

/*
5/4 valid directed ratio (super)      4/5 valid directed ratio (sub)
[5, 4] as Ratio                             [4, 5] as Ratio

5:4 does not exist                          4:5 valid undirected ratio
                                            [5, 4] as Ratio<Undirected>
 */