import {deepEquals, isUndefined, Maybe, stringify} from "../../../general"
import {HeadId, OrientedAccent, reorient} from "../flacco"
import {getCore} from "./core"
import {Core, Sagittal, Shafts} from "./types"

const reorientAccent = (orientedAccent: OrientedAccent): OrientedAccent =>
    ({
        ...orientedAccent,
        orientation: reorient(orientedAccent.orientation),
    })

const APOTOME_COMPLEMENT_CORE_PAIRS: Array<[Core, Core]> = [
    [
        getCore(HeadId.BARE_SHAFT),
        getCore(HeadId.DOUBLE_BARB, Shafts.DOUBLE),
    ],                                                                      //     |      /||\
    [
        getCore(HeadId.LEFT_SCROLL),
        getCore(HeadId.ARC_AND_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    )|      (||~   A W
    [
        getCore(HeadId.RIGHT_SCROLL),
        getCore(HeadId.BARB_AND_ARC, Shafts.DOUBLE),
    ],                                                                      //     |(     /||)   B V
    [
        getCore(HeadId.LEFT_BOATHOOK),
        getCore(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB, Shafts.DOUBLE),
    ],                                                                      //    ~|    )//||    C U
    [
        getCore(HeadId.DOUBLE_SCROLL),
        getCore(HeadId.DOUBLE_LEFT_BARB, Shafts.DOUBLE),
    ],                                                                      //    )|(    //||    D T
    [
        getCore(HeadId.LEFT_SCROLL_AND_BOATHOOK),
        getCore(HeadId.BOATHOOK_AND_BARB, Shafts.DOUBLE),
    ],                                                                      //   )~|      ~||\   E S
    [
        getCore(HeadId.BOATHOOK_AND_SCROLL),
        getCore(HeadId.ARC_AND_SCROLL, Shafts.DOUBLE),
    ],                                                                      //    ~|(     (||(   F R
    [
        getCore(HeadId.RIGHT_BOATHOOK),
        getCore(HeadId.BARB_AND_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //     |~     /||~   G Q
    [
        getCore(HeadId.DOUBLE_LEFT_BOATHOOK),
        getCore(HeadId.BOATHOOK_AND_ARC, Shafts.DOUBLE),
    ],                                                                      //   ~~|      ~||)   H P
    [
        getCore(HeadId.SCROLL_AND_BOATHOOK),
        getCore(HeadId.LEFT_ARC, Shafts.DOUBLE),
    ],                                                                      //    )|~     (||    I O
    [
        getCore(HeadId.LEFT_BARB),
        getCore(HeadId.RIGHT_BARB, Shafts.DOUBLE),
    ],                                                                      //    /|       ||\   J N
    [
        getCore(HeadId.LEFT_SCROLL_AND_BARB),
        getCore(HeadId.SCROLL_AND_ARC, Shafts.DOUBLE),
    ],                                                                      //   )/|      )||)   K M
    [
        getCore(HeadId.RIGHT_ARC),
        getCore(HeadId.RIGHT_ARC, Shafts.DOUBLE),
    ],                                                                      //     |)      ||)   L L
    [
        getCore(HeadId.SCROLL_AND_ARC),
        getCore(HeadId.LEFT_SCROLL_AND_BARB, Shafts.DOUBLE),
    ],                                                                      //    )|)    )/||    M K
    [
        getCore(HeadId.RIGHT_BARB),
        getCore(HeadId.LEFT_BARB, Shafts.DOUBLE),
    ],                                                                      //     |\     /||    N J
    [
        getCore(HeadId.LEFT_ARC),
        getCore(HeadId.SCROLL_AND_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    (|      )||~   O I
    [
        getCore(HeadId.BOATHOOK_AND_ARC),
        getCore(HeadId.DOUBLE_LEFT_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    ~|)    ~~||    P H
    [
        getCore(HeadId.BARB_AND_BOATHOOK),
        getCore(HeadId.RIGHT_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    /|~      ||~   Q G
    [
        getCore(HeadId.ARC_AND_SCROLL),
        getCore(HeadId.BOATHOOK_AND_SCROLL, Shafts.DOUBLE),
    ],                                                                      //    (|(     ~||(   R F
    [
        getCore(HeadId.BOATHOOK_AND_BARB),
        getCore(HeadId.LEFT_SCROLL_AND_BOATHOOK, Shafts.DOUBLE),
    ],                                                                      //    ~|\    )~||    S E
    [
        getCore(HeadId.DOUBLE_LEFT_BARB),
        getCore(HeadId.DOUBLE_SCROLL, Shafts.DOUBLE),
    ],                                                                      //   //|      )||(   T D
    [
        getCore(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB),
        getCore(HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB),
    ],                                                                      //  )//|       )|\\  U
    [
        getCore(HeadId.BARB_AND_ARC),
        getCore(HeadId.ARC_AND_BARB),
    ],                                                                      //    /|)      (|\   V
    [
        getCore(HeadId.ARC_AND_BOATHOOK),
        getCore(HeadId.DOUBLE_RIGHT_BARB),
    ],                                                                      //    (|~       |\\  W
    [
        getCore(HeadId.DOUBLE_BARB),
        getCore(HeadId.DOUBLE_ARC),
    ],                                                                      //    /|\      (|)   X
    [
        getCore(HeadId.LEFT_ARC_AND_BARB),
        getCore(HeadId.RIGHT_BARB_AND_ARC),
    ],                                                                      //   (/|        |\)  Y
    [
        getCore(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB),
        getCore(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB),
    ],                                                                      //   )/|\     )/|\   Z
]

const computeApotomeComplement = ({ arm, core }: Sagittal): Sagittal => {
    if (isUndefined(core)) {
        return {core: getCore(HeadId.DOUBLE_BARB, Shafts.DOUBLE)}
    }

    let apotomeComplementCore: Maybe<Core> = undefined

    APOTOME_COMPLEMENT_CORE_PAIRS.forEach(
        ([complementCoreA, complementCoreB]: [Core, Core]): void => {
            if (deepEquals(core, complementCoreA)) apotomeComplementCore = complementCoreB
            if (deepEquals(core, complementCoreB)) apotomeComplementCore = complementCoreA
        },
    )

    if (isUndefined(apotomeComplementCore)) {
        throw new Error(`Tried to compute apotome complement for sagittal whose core is outside the 1st apotome section ${stringify(core)}`)
    }

    if (!isUndefined(arm)) {
        return {
            arm: arm.map(reorientAccent),
            core: apotomeComplementCore,
        }
    }

    return {
        core: apotomeComplementCore,
    }
}

export {
    computeApotomeComplement,
}
