import {Comma, Filename, NEWLINE, readLines} from "../../general"
import {CommaClassId} from "../../sagittal"

const computeZoneCommaEntries = (secondaryCommaZones: boolean): Array<[CommaClassId, Comma[]]> => {
    const zoneCommaType = secondaryCommaZones ? "secondaryCommaZone" : "extremeCaptureZone"

    return Object.entries(JSON.parse(
        readLines(`src/scripts/jiPitch/results/${zoneCommaType}Commas.txt` as Filename).join(NEWLINE),
    )) as Array<[CommaClassId, Comma[]]>
}

export {
    computeZoneCommaEntries,
}
