import * as fs from "fs"
import { IO, ioSettings } from "../../../../general"
import { AnalyzedBound } from "../../analyzeBound"
import { visualizeCents } from "./cents"
import { visualizeEvents } from "./events"
import { addFont } from "./font"
import { visualizeInaMidpoints } from "./inaMidpoints"
import { visualizeLevelBounds } from "./levelBounds"
import { visualizeLevelCommaMeans } from "./levelCommaMeans"
import { visualizeLevels } from "./levels"
import { visualizeLevelSymbols } from "./levelSymbols"
import { addParentSvg } from "./parentSvg"
import { visualizeSizeCategoryBounds } from "./sizeCategoryBounds"

const computeBoundsImage = (boundsAnalysis: AnalyzedBound[]): IO => {
    if (!ioSettings.noWrite) {
        fs.copyFileSync(
            "assets/fonts/BravuraSagittalUpdate_v10.otf",
            "dist/analyzeBounds/BravuraSagittalUpdate_v10.otf",
        )
    }

    let elements: IO[] = [] as IO[]

    elements = elements.concat(addParentSvg())
    elements = elements.concat(addFont())

    elements = elements.concat(visualizeCents())
    elements = elements.concat(visualizeLevels())
    elements = elements.concat(visualizeLevelBounds())

    boundsAnalysis.forEach(analyzedBound => {
        elements = elements.concat(visualizeEvents(analyzedBound.bestPossibleHistory.events))
    })

    elements = elements.concat(visualizeSizeCategoryBounds())
    elements = elements.concat(visualizeLevelCommaMeans())
    elements = elements.concat(visualizeInaMidpoints())

    elements = elements.concat(visualizeLevelSymbols())

    elements = elements.concat("</svg>\n" as IO)

    return elements.join("") as IO
}

export {
    computeBoundsImage,
}
