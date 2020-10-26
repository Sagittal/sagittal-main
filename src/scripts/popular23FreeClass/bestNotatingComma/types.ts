import {Cents, Maybe, Monzo} from "../../../general"
import {CommaClassId} from "../../../sagittal"

interface BestNotatingCommaProperties {
    bestNotatingCommaCents: Cents,
    bestNotatingCommaMonzo: Monzo<{rational: true}>,
    bestNotatingCommaMaybeCommaClassId: Maybe<CommaClassId>,
}

export {
    BestNotatingCommaProperties,
}
