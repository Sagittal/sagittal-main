import { doOnNextEventLoop, Io, LogTarget, saveLog } from "../../../../general"
import { LFC_SCRIPT_GROUP } from "../../constants"
import { scopesToSearch, solverStatus } from "../../globals"
import { formatSearchedAndPopulated } from "../io"
import { ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP } from "./constants"
import { searchPopulatedScopes } from "./populatedScopes"

const searchScopes = async () => {
    while (scopesToSearch.length > 0) {
        await doOnNextEventLoop(searchPopulatedScopes)
    }

    if (!solverStatus.finishedPopulating) {
        saveLog(`searching got ahead of populating; waiting 1 second for more scopes to be populated ${formatSearchedAndPopulated()}` as Io, LogTarget.SEARCH, LFC_SCRIPT_GROUP)

        return doOnNextEventLoop(searchScopes, ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP)
    }
}

export {
    searchScopes,
}