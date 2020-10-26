import {Index, KeyPath, sort} from "../../../general"
import {FlaccoId, FlaccoSubset} from "./types"

const FLACCO_SUBSETS_SORTED_BY_SIZE: FlaccoSubset[] = [
    FlaccoSubset.COMPATIBLE,
    FlaccoSubset.SPARTAN,
    FlaccoSubset.ATHENIAN,
    FlaccoSubset.TROJAN,
    FlaccoSubset.PROMETHEAN,
    FlaccoSubset.HERCULEAN,
    FlaccoSubset.OLYMPIAN,
    FlaccoSubset.MAGRATHEAN,
]

const SAGITTAL_COMPATIBLE_FLACCO_SUBSET: Array<[Index<FlaccoId>, FlaccoId]> = [
    [0 as Index<FlaccoId>, FlaccoId.NULL],
]

const SPARTAN_FLACCO_SUBSET: Array<[Index<FlaccoId>, FlaccoId]> = [
    [12 as Index<FlaccoId>, FlaccoId.RIGHT_SCROLL],
    [44 as Index<FlaccoId>, FlaccoId.LEFT_BARB],
    [58 as Index<FlaccoId>, FlaccoId.RIGHT_ARC],
    [92 as Index<FlaccoId>, FlaccoId.DOUBLE_LEFT_BARB],
    [104 as Index<FlaccoId>, FlaccoId.BARB_AND_ARC],
    [114 as Index<FlaccoId>, FlaccoId.DOUBLE_BARB],
    [131 as Index<FlaccoId>, FlaccoId.DOUBLE_ARC],
    [141 as Index<FlaccoId>, FlaccoId.ARC_AND_BARB],
]

const ATHENIAN_FLACCO_SUBSET: Array<[Index<FlaccoId>, FlaccoId]> = [
    ...SPARTAN_FLACCO_SUBSET,
    [20 as Index<FlaccoId>, FlaccoId.DOUBLE_SCROLL],
    [30 as Index<FlaccoId>, FlaccoId.BOATHOOK_AND_SCROLL],
    [67 as Index<FlaccoId>, FlaccoId.RIGHT_BARB],
    [70 as Index<FlaccoId>, FlaccoId.LEFT_ARC],
    [84 as Index<FlaccoId>, FlaccoId.ARC_AND_SCROLL],
]

const PROMETHEAN_FLACCO_SUBSET: Array<[Index<FlaccoId>, FlaccoId]> = [
    ...ATHENIAN_FLACCO_SUBSET,
    [7 as Index<FlaccoId>, FlaccoId.LEFT_SCROLL],
    [18 as Index<FlaccoId>, FlaccoId.LEFT_BOATHOOK],
    [25 as Index<FlaccoId>, FlaccoId.LEFT_SCROLL_AND_BOATHOOK],
    [34 as Index<FlaccoId>, FlaccoId.RIGHT_BOATHOOK],
    [36 as Index<FlaccoId>, FlaccoId.DOUBLE_LEFT_BOATHOOK],
    [41 as Index<FlaccoId>, FlaccoId.SCROLL_AND_BOATHOOK],
    [52 as Index<FlaccoId>, FlaccoId.LEFT_SCROLL_AND_BARB],
    [65 as Index<FlaccoId>, FlaccoId.SCROLL_AND_ARC],
    [76 as Index<FlaccoId>, FlaccoId.BOATHOOK_AND_ARC],
    [81 as Index<FlaccoId>, FlaccoId.BARB_AND_BOATHOOK],
    [86 as Index<FlaccoId>, FlaccoId.BOATHOOK_AND_BARB],
    [99 as Index<FlaccoId>, FlaccoId.LEFT_SCROLL_DOUBLE_LEFT_BARB],
    [106 as Index<FlaccoId>, FlaccoId.ARC_AND_BOATHOOK],
    [117 as Index<FlaccoId>, FlaccoId.LEFT_ARC_AND_BARB],
    [122 as Index<FlaccoId>, FlaccoId.LEFT_SCROLL_AND_DOUBLE_BARB],
    [128 as Index<FlaccoId>, FlaccoId.RIGHT_BARB_AND_ARC],
    [139 as Index<FlaccoId>, FlaccoId.DOUBLE_RIGHT_BARB],
    [146 as Index<FlaccoId>, FlaccoId.LEFT_SCROLL_DOUBLE_RIGHT_BARB],
]

// TODO: DEFINE SUBSETS IN TERMS OF NEW ACCENTS
//  Surely there must be some way to simplify / generate this
const HERCULEAN_FLACCO_SUBSET: Array<[Index<FlaccoId>, FlaccoId]> = [
    ...PROMETHEAN_FLACCO_SUBSET,
    [3 as Index<FlaccoId>, FlaccoId.TICK_AGAINST_LEFT_SCROLL],
    [4 as Index<FlaccoId>, FlaccoId.TICK],
    [14 as Index<FlaccoId>, FlaccoId.TICK_AGAINST_LEFT_BOATHOOK],
    [16 as Index<FlaccoId>, FlaccoId.TICK_WITH_RIGHT_SCROLL],
    [24 as Index<FlaccoId>, FlaccoId.TICK_WITH_DOUBLE_SCROLL],
    [26 as Index<FlaccoId>, FlaccoId.TICK_AGAINST_BOATHOOK_AND_SCROLL],
    [40 as Index<FlaccoId>, FlaccoId.TICK_AGAINST_LEFT_BARB],
    [47 as Index<FlaccoId>, FlaccoId.TICK_AGAINST_LEFT_SCROLL_AND_BARB],
    [48 as Index<FlaccoId>, FlaccoId.TICK_WITH_LEFT_BARB],
    [54 as Index<FlaccoId>, FlaccoId.TICK_AGAINST_RIGHT_ARC],
    [62 as Index<FlaccoId>, FlaccoId.TICK_WITH_RIGHT_ARC],
    [66 as Index<FlaccoId>, FlaccoId.TICK_AGAINST_LEFT_ARC],
    [74 as Index<FlaccoId>, FlaccoId.TICK_WITH_LEFT_ARC],
    [79 as Index<FlaccoId>, FlaccoId.TICK_AGAINST_ARC_AND_SCROLL],
    [80 as Index<FlaccoId>, FlaccoId.TICK_WITH_BOATHOOK_AND_ARC],
    [88 as Index<FlaccoId>, FlaccoId.TICK_AGAINST_DOUBLE_LEFT_BARB],
    [96 as Index<FlaccoId>, FlaccoId.TICK_WITH_DOUBLE_LEFT_BARB],
    [108 as Index<FlaccoId>, FlaccoId.TICK_WITH_BARB_AND_ARC],
    [110 as Index<FlaccoId>, FlaccoId.TICK_AGAINST_DOUBLE_BARB],
    [119 as Index<FlaccoId>, FlaccoId.TICK_WITH_DOUBLE_BARB],
    [126 as Index<FlaccoId>, FlaccoId.TICK_AGAINST_DOUBLE_ARC],
    [135 as Index<FlaccoId>, FlaccoId.TICK_WITH_DOUBLE_ARC],
    [137 as Index<FlaccoId>, FlaccoId.TICK_AGAINST_ARC_AND_BARB],
]

const OLYMPIAN_FLACCO_SUBSET: Array<[Index<FlaccoId>, FlaccoId]> = [
    ...HERCULEAN_FLACCO_SUBSET,
    [1 as Index<FlaccoId>, FlaccoId.WING],
    [2 as Index<FlaccoId>, FlaccoId.BIRD],
    [5 as Index<FlaccoId>, FlaccoId.WING_AND_TICK],
    [6 as Index<FlaccoId>, FlaccoId.WING_AGAINST_LEFT_SCROLL],
    [8 as Index<FlaccoId>, FlaccoId.WING_WITH_LEFT_SCROLL],
    [9 as Index<FlaccoId>, FlaccoId.BIRD_WITH_LEFT_SCROLL],
    [10 as Index<FlaccoId>, FlaccoId.BIRD_AGAINST_RIGHT_SCROLL],
    [11 as Index<FlaccoId>, FlaccoId.WING_AGAINST_RIGHT_SCROLL],
    [13 as Index<FlaccoId>, FlaccoId.WING_WITH_RIGHT_SCROLL],
    [15 as Index<FlaccoId>, FlaccoId.WING_FROM_TICK_WITH_RIGHT_SCROLL],
    [17 as Index<FlaccoId>, FlaccoId.WING_AGAINST_LEFT_BOATHOOK],
    [19 as Index<FlaccoId>, FlaccoId.WING_AGAINST_DOUBLE_SCROLL],
    [21 as Index<FlaccoId>, FlaccoId.WING_WITH_DOUBLE_SCROLL],
    [22 as Index<FlaccoId>, FlaccoId.BIRD_WITH_DOUBLE_SCROLL],
    [23 as Index<FlaccoId>, FlaccoId.WING_FROM_TICK_WITH_DOUBLE_SCROLL],
    [27 as Index<FlaccoId>, FlaccoId.WING_FROM_TICK_AGAINST_BOATHOOK_AND_SCROLL],
    [28 as Index<FlaccoId>, FlaccoId.BIRD_AGAINST_BOATHOOK_AND_SCROLL],
    [29 as Index<FlaccoId>, FlaccoId.WING_AGAINST_BOATHOOK_AND_SCROLL],
    [31 as Index<FlaccoId>, FlaccoId.WING_WITH_BOATHOOK_AND_SCROLL],
    [32 as Index<FlaccoId>, FlaccoId.BIRD_AGAINST_RIGHT_BOATHOOK],
    [33 as Index<FlaccoId>, FlaccoId.WING_AGAINST_RIGHT_BOATHOOK],
    [35 as Index<FlaccoId>, FlaccoId.WING_WITH_RIGHT_BOATHOOK],
    [37 as Index<FlaccoId>, FlaccoId.WING_WITH_DOUBLE_LEFT_BOATHOOK],
    [38 as Index<FlaccoId>, FlaccoId.BIRD_WITH_DOUBLE_LEFT_BOATHOOK],
    [39 as Index<FlaccoId>, FlaccoId.WING_AND_TICK_AGAINST_LEFT_BARB],
    [42 as Index<FlaccoId>, FlaccoId.BIRD_AGAINST_LEFT_BARB],
    [43 as Index<FlaccoId>, FlaccoId.WING_AGAINST_LEFT_BARB],
    [45 as Index<FlaccoId>, FlaccoId.WING_WITH_LEFT_BARB],
    [46 as Index<FlaccoId>, FlaccoId.BIRD_WITH_LEFT_BARB],
    [49 as Index<FlaccoId>, FlaccoId.WING_AND_TICK_WITH_LEFT_BARB],
    [50 as Index<FlaccoId>, FlaccoId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB],
    [51 as Index<FlaccoId>, FlaccoId.WING_AGAINST_LEFT_SCROLL_AND_BARB],
    [53 as Index<FlaccoId>, FlaccoId.WING_AND_TICK_AGAINST_RIGHT_ARC],
    [55 as Index<FlaccoId>, FlaccoId.WING_FROM_TICK_AGAINST_RIGHT_ARC],
    [56 as Index<FlaccoId>, FlaccoId.BIRD_AGAINST_RIGHT_ARC],
    [57 as Index<FlaccoId>, FlaccoId.WING_AGAINST_RIGHT_ARC],
    [59 as Index<FlaccoId>, FlaccoId.WING_WITH_RIGHT_ARC],
    [60 as Index<FlaccoId>, FlaccoId.BIRD_WITH_RIGHT_ARC],
    [61 as Index<FlaccoId>, FlaccoId.WING_FROM_TICK_WITH_RIGHT_ARC],
    [63 as Index<FlaccoId>, FlaccoId.WING_AND_TICK_WITH_RIGHT_ARC],
    [64 as Index<FlaccoId>, FlaccoId.WING_AGAINST_SCROLL_AND_ARC],
    [68 as Index<FlaccoId>, FlaccoId.WING_WITH_RIGHT_BARB],
    [69 as Index<FlaccoId>, FlaccoId.WING_AGAINST_LEFT_ARC],
    [71 as Index<FlaccoId>, FlaccoId.WING_WITH_LEFT_ARC],
    [72 as Index<FlaccoId>, FlaccoId.BIRD_WITH_LEFT_ARC],
    [73 as Index<FlaccoId>, FlaccoId.WING_FROM_TICK_WITH_LEFT_ARC],
    [75 as Index<FlaccoId>, FlaccoId.WING_AGAINST_BOATHOOK_AND_ARC],
    [77 as Index<FlaccoId>, FlaccoId.WING_WITH_BOATHOOK_AND_ARC],
    [78 as Index<FlaccoId>, FlaccoId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL],
    [82 as Index<FlaccoId>, FlaccoId.BIRD_AGAINST_ARC_AND_SCROLL],
    [83 as Index<FlaccoId>, FlaccoId.WING_AGAINST_ARC_AND_SCROLL],
    [85 as Index<FlaccoId>, FlaccoId.WING_WITH_ARC_AND_SCROLL],
    [87 as Index<FlaccoId>, FlaccoId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB],
    [89 as Index<FlaccoId>, FlaccoId.WING_FROM_TICK_AGAINST_DOUBLE_LEFT_BARB],
    [90 as Index<FlaccoId>, FlaccoId.BIRD_AGAINST_DOUBLE_LEFT_BARB],
    [91 as Index<FlaccoId>, FlaccoId.WING_AGAINST_DOUBLE_LEFT_BARB],
    [93 as Index<FlaccoId>, FlaccoId.WING_WITH_DOUBLE_LEFT_BARB],
    [94 as Index<FlaccoId>, FlaccoId.BIRD_WITH_DOUBLE_LEFT_BARB],
    [95 as Index<FlaccoId>, FlaccoId.WING_FROM_TICK_WITH_DOUBLE_LEFT_BARB],
    [97 as Index<FlaccoId>, FlaccoId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB],
    [98 as Index<FlaccoId>, FlaccoId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB],
    [100 as Index<FlaccoId>, FlaccoId.WING_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB],
    [101 as Index<FlaccoId>, FlaccoId.BIRD_WITH_LEFT_SCROLL_DOUBLE_LEFT_BARB],
    [102 as Index<FlaccoId>, FlaccoId.BIRD_AGAINST_BARB_AND_ARC],
    [103 as Index<FlaccoId>, FlaccoId.WING_AGAINST_BARB_AND_ARC],
    [105 as Index<FlaccoId>, FlaccoId.WING_WITH_BARB_AND_ARC],
    [107 as Index<FlaccoId>, FlaccoId.WING_FROM_TICK_WITH_BARB_AND_ARC],
    [109 as Index<FlaccoId>, FlaccoId.WING_AND_TICK_WITH_BARB_AND_ARC],
    [111 as Index<FlaccoId>, FlaccoId.WING_FROM_TICK_AGAINST_DOUBLE_BARB],
    [112 as Index<FlaccoId>, FlaccoId.BIRD_AGAINST_DOUBLE_BARB],
    [113 as Index<FlaccoId>, FlaccoId.WING_AGAINST_DOUBLE_BARB],
    [115 as Index<FlaccoId>, FlaccoId.WING_WITH_DOUBLE_BARB],
    [116 as Index<FlaccoId>, FlaccoId.WING_AGAINST_LEFT_ARC_AND_BARB],
    [118 as Index<FlaccoId>, FlaccoId.WING_WITH_LEFT_ARC_AND_BARB],
    [120 as Index<FlaccoId>, FlaccoId.WING_AND_TICK_WITH_DOUBLE_BARB],
    [121 as Index<FlaccoId>, FlaccoId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB],
    [123 as Index<FlaccoId>, FlaccoId.WING_WITH_LEFT_SCROLL_AND_DOUBLE_BARB],
    [124 as Index<FlaccoId>, FlaccoId.BIRD_WITH_LEFT_SCROLL_AND_DOUBLE_BARB],
    [125 as Index<FlaccoId>, FlaccoId.WING_AND_TICK_AGAINST_DOUBLE_ARC],
    [127 as Index<FlaccoId>, FlaccoId.WING_AGAINST_RIGHT_BARB_AND_ARC],
    [129 as Index<FlaccoId>, FlaccoId.WING_WITH_RIGHT_BARB_AND_ARC],
    [130 as Index<FlaccoId>, FlaccoId.WING_AGAINST_DOUBLE_ARC],
    [132 as Index<FlaccoId>, FlaccoId.WING_WITH_DOUBLE_ARC],
    [133 as Index<FlaccoId>, FlaccoId.BIRD_WITH_DOUBLE_ARC],
    [134 as Index<FlaccoId>, FlaccoId.WING_FROM_TICK_WITH_DOUBLE_ARC],
    [136 as Index<FlaccoId>, FlaccoId.WING_AND_TICK_AGAINST_ARC_AND_BARB],
    [138 as Index<FlaccoId>, FlaccoId.WING_FROM_TICK_AGAINST_ARC_AND_BARB],
    [140 as Index<FlaccoId>, FlaccoId.WING_AGAINST_ARC_AND_BARB],
    [142 as Index<FlaccoId>, FlaccoId.WING_WITH_ARC_AND_BARB],
    [143 as Index<FlaccoId>, FlaccoId.BIRD_WITH_ARC_AND_BARB],
    [144 as Index<FlaccoId>, FlaccoId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_RIGHT_BARB],
    [145 as Index<FlaccoId>, FlaccoId.WING_AGAINST_LEFT_SCROLL_DOUBLE_RIGHT_BARB],
    [147 as Index<FlaccoId>, FlaccoId.WING_WITH_LEFT_SCROLL_DOUBLE_RIGHT_BARB],
    [148 as Index<FlaccoId>, FlaccoId.BIRD_WITH_LEFT_SCROLL_DOUBLE_RIGHT_BARB],
]

const MAGRATHEAN_FLACCO_SUBSET: Array<[Index<FlaccoId>, FlaccoId]> = [
    ...OLYMPIAN_FLACCO_SUBSET,
]

// On an independent trajectory, as it does not contain Spartan or Athenian, though it is contained by Promethean
// See: http://forum.sagittal.org/viewtopic.php?p=885&sid=832fe7e77de7aae89234e3dbb67f8fb9#p885
const TROJAN_FLACCO_SUBSET: Array<[Index<FlaccoId>, FlaccoId]> = [
    [30 as Index<FlaccoId>, FlaccoId.BOATHOOK_AND_SCROLL],
    [34 as Index<FlaccoId>, FlaccoId.RIGHT_BOATHOOK],
    [44 as Index<FlaccoId>, FlaccoId.LEFT_BARB],
    [52 as Index<FlaccoId>, FlaccoId.LEFT_SCROLL_AND_BARB],
    [58 as Index<FlaccoId>, FlaccoId.RIGHT_ARC],
    [67 as Index<FlaccoId>, FlaccoId.RIGHT_BARB],
    [70 as Index<FlaccoId>, FlaccoId.LEFT_ARC],
    [81 as Index<FlaccoId>, FlaccoId.BARB_AND_BOATHOOK],
    [104 as Index<FlaccoId>, FlaccoId.BARB_AND_ARC],
    [114 as Index<FlaccoId>, FlaccoId.DOUBLE_BARB],
    [141 as Index<FlaccoId>, FlaccoId.ARC_AND_BARB],
]

const shapeUpIds = (ids: Array<[Index<FlaccoId>, FlaccoId]>): FlaccoId[] =>
    sort(ids, {by: 0 as KeyPath}).map(([_, id]: [Index<FlaccoId>, FlaccoId]): FlaccoId => id)

const FLACCO_SUBSETS: Record<FlaccoSubset, Array<FlaccoId>> = {
    [FlaccoSubset.COMPATIBLE]: shapeUpIds(SAGITTAL_COMPATIBLE_FLACCO_SUBSET),
    [FlaccoSubset.SPARTAN]: shapeUpIds(SPARTAN_FLACCO_SUBSET),
    [FlaccoSubset.ATHENIAN]: shapeUpIds(ATHENIAN_FLACCO_SUBSET),
    [FlaccoSubset.TROJAN]: shapeUpIds(TROJAN_FLACCO_SUBSET),
    [FlaccoSubset.PROMETHEAN]: shapeUpIds(PROMETHEAN_FLACCO_SUBSET),
    [FlaccoSubset.HERCULEAN]: shapeUpIds(HERCULEAN_FLACCO_SUBSET),
    [FlaccoSubset.OLYMPIAN]: shapeUpIds(OLYMPIAN_FLACCO_SUBSET),
    [FlaccoSubset.MAGRATHEAN]: shapeUpIds(MAGRATHEAN_FLACCO_SUBSET),
}

export {
    SAGITTAL_COMPATIBLE_FLACCO_SUBSET,
    SPARTAN_FLACCO_SUBSET,
    ATHENIAN_FLACCO_SUBSET,
    TROJAN_FLACCO_SUBSET,
    PROMETHEAN_FLACCO_SUBSET,
    HERCULEAN_FLACCO_SUBSET,
    OLYMPIAN_FLACCO_SUBSET,
    MAGRATHEAN_FLACCO_SUBSET,
    FLACCO_SUBSETS,
    FLACCO_SUBSETS_SORTED_BY_SIZE,
}
