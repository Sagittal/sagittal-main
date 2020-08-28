import { computeMonzoFromCommand } from "../../../general"
import { analyzeComma } from "../../../sagittal"
import { formatComma } from "../io"

const monzo = computeMonzoFromCommand()

const analyzedComma = analyzeComma(monzo)

console.log(formatComma(analyzedComma))
