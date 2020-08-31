import * as fs from "fs"
import { Filename, Io } from "../../../../general"
import { unformatParameters } from "../../solver"

const load = (filename: Filename): Object => {
    return JSON.parse(
        unformatParameters(
            fs.readFileSync(
                `src/scripts/lfc/input/${filename}.txt`,
                { encoding: "utf8" },
            ) as Io,
        ),
    )
}

export {
    load,
}