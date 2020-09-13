import { Maybe } from "../../code"
import { ioSettings } from "../globals"
import { LogTarget, LogTargets } from "./types"

const setLogTargets = (logTargetsCommaSeparatedString: Maybe<string | boolean> = ""): void => {
    ioSettings.logTargets = Object.keys(LogTarget).reduce(
        (logTargets: LogTargets, logTarget: string): LogTargets => ({ ...logTargets, [ logTarget ]: false }),
        {} as LogTargets,
    )

    if (logTargetsCommaSeparatedString === true) {
        ioSettings.logTargets[ LogTarget.ALL ] = true
        return
    }

    const targets: LogTarget[] = (logTargetsCommaSeparatedString as string).split(",") as LogTarget[]

    targets.forEach((target: LogTarget): void => {
        ioSettings.logTargets[ target ] = true
    })
}

export {
    setLogTargets,
}
