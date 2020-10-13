import { computeRationalScamonGeometricMean, Scamon, UNISON } from "../../../general"
import { HALF_APOTOME, JiNotationBoundClass } from "../../../sagittal"
import { computeBoundedCommaClassPositions } from "../boundedPositions"

const computeInitialPosition = (jiNotationBoundClass: JiNotationBoundClass): Scamon => {
    const { jiNotationLevels } = jiNotationBoundClass

    const initialLevel = jiNotationLevels[ 0 ]
    const [lesserBoundedCommaClassPosition = UNISON, greaterBoundedCommaClassPosition] =
        computeBoundedCommaClassPositions(jiNotationBoundClass.pitch, initialLevel)

    return greaterBoundedCommaClassPosition ?
        computeRationalScamonGeometricMean(lesserBoundedCommaClassPosition, greaterBoundedCommaClassPosition) :
        HALF_APOTOME
}

export {
    computeInitialPosition,
}
