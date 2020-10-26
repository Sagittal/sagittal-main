import {Index} from "../../general"
import {BoundClass, JiNotationBoundClass, JI_NOTATION_BOUND_CLASSES} from "../../sagittal"
import {analyzeJiNotationBoundClass, JiNotationBoundClassAnalysis} from "./boundClass"
import {computeHistories} from "./histories"

const analyzeJiNotationBoundClasses = (): JiNotationBoundClassAnalysis[] =>
    Object.values(JI_NOTATION_BOUND_CLASSES).map(
        (jiNotationBoundClass: JiNotationBoundClass, boundClassIndex: number): JiNotationBoundClassAnalysis => {
            const histories = computeHistories(jiNotationBoundClass)

            return analyzeJiNotationBoundClass(histories, jiNotationBoundClass, boundClassIndex as Index<BoundClass>)
        },
    )

export {
    analyzeJiNotationBoundClasses,
}
