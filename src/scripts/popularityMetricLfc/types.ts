import {Count, Exponent, Max, Parameter, Rank, ScalaPopularityStat, Step} from "../../general"
import {LfcUnpopularityEstimate} from "./sumOfSquares"

interface PopularityMetricLfcScriptGroupSettings {
    z: Exponent<Rank<ScalaPopularityStat | LfcUnpopularityEstimate>>,
    onlyTop: Count<ScalaPopularityStat>,
    maxUnit: Max<Step<{of: Parameter}>>,
    noMoot: boolean,
    sync: boolean,
}

export {
    PopularityMetricLfcScriptGroupSettings,
}
