// tslint:disable max-line-length

import { Id, Monzo, Name, Pitch, Quotient, SQRT_SCALER } from "../../../general"
import { APOTOME } from "../../constants"
import { SizeCategoryBound } from "../../ji"
import { BoundType, CommaMean, InaMidpoint, JiNotationBound, JiNotationLevel } from "./types"

const JI_NOTATION_BOUNDS: JiNotationBound[] = [
    {
        id: 0 as Id<JiNotationBound>,
        name: "1.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [1.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 1 as Id<JiNotationBound>,
        name: "5.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [5.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 2 as Id<JiNotationBound>,
        name: "8.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [8.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 3 as Id<JiNotationBound>,
        name: "12.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [12.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 4 as Id<JiNotationBound>,
        name: "15.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [15.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 5 as Id<JiNotationBound>,
        name: "19.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [19.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 6 as Id<JiNotationBound>,
        name: "22.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [22.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 7 as Id<JiNotationBound>,
        name: "26.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [26.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 8 as Id<JiNotationBound>,
        name: "29.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [29.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 9 as Id<JiNotationBound>,
        name: "32.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [32.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 10 as Id<JiNotationBound>,
        name: "36.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [36.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 11 as Id<JiNotationBound>,
        name: "39.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [39.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 12 as Id<JiNotationBound>,
        name: "43.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [43.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 13 as Id<JiNotationBound>,
        name: "46.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [46.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 14 as Id<JiNotationBound>,
        name: "50.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [50.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 15 as Id<JiNotationBound>,
        name: "53.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [53.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 16 as Id<JiNotationBound>,
        name: "57.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [57.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 17 as Id<JiNotationBound>,
        name: "60.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [60.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 18 as Id<JiNotationBound>,
        name: "64.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [64.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 19 as Id<JiNotationBound>,
        name: "67.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [67.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 20 as Id<JiNotationBound>,
        name: "71.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [71.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 21 as Id<JiNotationBound>,
        name: "74.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [74.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 22 as Id<JiNotationBound>,
        name: "78.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [78.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 23 as Id<JiNotationBound>,
        name: "81.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [81.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 24 as Id<JiNotationBound>,
        name: "85.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [85.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 25 as Id<JiNotationBound>,
        name: "88.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [88.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 26 as Id<JiNotationBound>,
        name: "92.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [92.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 27 as Id<JiNotationBound>,
        name: "95.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [95.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 28 as Id<JiNotationBound>,
        name: "98.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [98.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 29 as Id<JiNotationBound>,
        name: "102.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [102.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 30 as Id<JiNotationBound>,
        name: "105.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [105.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 31 as Id<JiNotationBound>,
        name: "109.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [109.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 32 as Id<JiNotationBound>,
        name: "112.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [112.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 33 as Id<JiNotationBound>,
        name: "116.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [116.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 34 as Id<JiNotationBound>,
        name: "119.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [119.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 35 as Id<JiNotationBound>,
        name: "123.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [123.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 36 as Id<JiNotationBound>,
        name: "126.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [126.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 37 as Id<JiNotationBound>,
        name: "130.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [130.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 38 as Id<JiNotationBound>,
        name: "133.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [133.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 39 as Id<JiNotationBound>,
        name: "137.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [137.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 40 as Id<JiNotationBound>,
        name: "140.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [140.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 41 as Id<JiNotationBound>,
        name: "144.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [144.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 42 as Id<JiNotationBound>,
        name: "147.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [147.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 43 as Id<JiNotationBound>,
        name: "151.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [151.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 44 as Id<JiNotationBound>,
        name: "154.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [154.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 45 as Id<JiNotationBound>,
        name: "157.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [157.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 46 as Id<JiNotationBound>,
        name: "161.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [161.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 47 as Id<JiNotationBound>,
        name: "164.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [164.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 48 as Id<JiNotationBound>,
        name: "168.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [168.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 49 as Id<JiNotationBound>,
        name: "`'/| ,,)/|" as Name<CommaMean>,
        pitch: {
            monzo: [-16, 0, 3, 2, 1] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 50 as Id<JiNotationBound>,
        name: "171.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [171.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 51 as Id<JiNotationBound>,
        name: "175.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [175.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 52 as Id<JiNotationBound>,
        name: ")/| ,.|)" as Name<CommaMean>,
        pitch: {
            monzo: [-4, -1, -1, 0, 0, 1, 0, 1] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 53 as Id<JiNotationBound>,
        name: "178.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [178.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 54 as Id<JiNotationBound>,
        name: "182.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [182.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 55 as Id<JiNotationBound>,
        name: "185.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [185.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 56 as Id<JiNotationBound>,
        name: "189.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [189.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 57 as Id<JiNotationBound>,
        name: "192.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [192.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 58 as Id<JiNotationBound>,
        name: "196.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [196.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 59 as Id<JiNotationBound>,
        name: "199.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [199.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 60 as Id<JiNotationBound>,
        name: "203.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [203.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 61 as Id<JiNotationBound>,
        name: "206.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [206.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 62 as Id<JiNotationBound>,
        name: "210.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [210.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 63 as Id<JiNotationBound>,
        name: "213.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [213.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 64 as Id<JiNotationBound>,
        name: "217.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [217.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 65 as Id<JiNotationBound>,
        name: "220.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [220.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 66 as Id<JiNotationBound>,
        name: "223.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [223.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 67 as Id<JiNotationBound>,
        name: "227.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [227.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 68 as Id<JiNotationBound>,
        name: "230.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [230.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 69 as Id<JiNotationBound>,
        name: "234.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [234.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 70 as Id<JiNotationBound>,
        name: "237.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [237.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 71 as Id<JiNotationBound>,
        name: "241.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [241.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 72 as Id<JiNotationBound>,
        name: "244.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [244.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 73 as Id<JiNotationBound>,
        name: "248.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [248.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 74 as Id<JiNotationBound>,
        name: "'(| ,~|)" as Name<CommaMean>,
        pitch: {
            monzo: [4, -5, 2, -2, 0, 0, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 75 as Id<JiNotationBound>,
        name: "251.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [251.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 76 as Id<JiNotationBound>,
        name: "255.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [255.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 77 as Id<JiNotationBound>,
        name: "258.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [258.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 78 as Id<JiNotationBound>,
        name: "262.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [262.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 79 as Id<JiNotationBound>,
        name: "265.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [265.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 80 as Id<JiNotationBound>,
        name: "269.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [269.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 81 as Id<JiNotationBound>,
        name: "/|~ ,,(|(" as Name<CommaMean>,
        pitch: {
            monzo: [-6, 3, -1, 1, 0, -1, 0, 0, 1] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 82 as Id<JiNotationBound>,
        name: "272.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [272.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 83 as Id<JiNotationBound>,
        name: "276.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [276.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 84 as Id<JiNotationBound>,
        name: "279.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [279.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 85 as Id<JiNotationBound>,
        name: "282.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [282.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 86 as Id<JiNotationBound>,
        name: "286.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [286.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 87 as Id<JiNotationBound>,
        name: "289.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [289.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 88 as Id<JiNotationBound>,
        name: "293.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [293.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 89 as Id<JiNotationBound>,
        name: "296.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [296.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 90 as Id<JiNotationBound>,
        name: "300.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [300.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 91 as Id<JiNotationBound>,
        name: "303.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [303.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 92 as Id<JiNotationBound>,
        name: "307.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [307.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 93 as Id<JiNotationBound>,
        name: "310.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [310.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 94 as Id<JiNotationBound>,
        name: "314.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [314.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 95 as Id<JiNotationBound>,
        name: "317.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [317.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 96 as Id<JiNotationBound>,
        name: "S|M" as Name<SizeCategoryBound>,
        pitch: {
            monzo: [8, -5] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.SIZE_CATEGORY_BOUND,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 97 as Id<JiNotationBound>,
        name: "324.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [324.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 98 as Id<JiNotationBound>,
        name: "328.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [328.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 99 as Id<JiNotationBound>,
        name: "331.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [331.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 100 as Id<JiNotationBound>,
        name: "335.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [335.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 101 as Id<JiNotationBound>,
        name: "338.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [338.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 102 as Id<JiNotationBound>,
        name: "342.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [342.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 103 as Id<JiNotationBound>,
        name: "345.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [345.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 104 as Id<JiNotationBound>,
        name: "348.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [348.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 105 as Id<JiNotationBound>,
        name: "352.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [352.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 106 as Id<JiNotationBound>,
        name: "355.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [355.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 107 as Id<JiNotationBound>,
        name: "359.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [359.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 108 as Id<JiNotationBound>,
        name: "362.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [362.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 109 as Id<JiNotationBound>,
        name: "`'/|) ./|\\" as Name<CommaMean>,
        pitch: {
            monzo: [-4, -4, 3, 0, 1] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 110 as Id<JiNotationBound>,
        name: "366.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [366.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 111 as Id<JiNotationBound>,
        name: "369.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [369.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 112 as Id<JiNotationBound>,
        name: "373.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [373.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 113 as Id<JiNotationBound>,
        name: "376.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [376.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 114 as Id<JiNotationBound>,
        name: "380.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [380.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 115 as Id<JiNotationBound>,
        name: "383.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [383.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 116 as Id<JiNotationBound>,
        name: "387.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [387.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 117 as Id<JiNotationBound>,
        name: "390.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [390.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 118 as Id<JiNotationBound>,
        name: "`(/| '/|\\" as Name<CommaMean>,
        pitch: {
            monzo: [-15, 9, 1, 0, 1, 0, 0, 0, 0, 0, -1] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 119 as Id<JiNotationBound>,
        name: "394.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [394.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 120 as Id<JiNotationBound>,
        name: "397.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [397.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 121 as Id<JiNotationBound>,
        name: "401.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [401.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 122 as Id<JiNotationBound>,
        name: "404.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [404.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 123 as Id<JiNotationBound>,
        name: "407.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [407.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 124 as Id<JiNotationBound>,
        name: "411.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [411.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 125 as Id<JiNotationBound>,
        name: "414.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [414.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 126 as Id<JiNotationBound>,
        name: ".(|) ,|\\)" as Name<CommaMean>,
        pitch: {
            monzo: [-7, 5, -1, 0, -1, 0, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 127 as Id<JiNotationBound>,
        name: "418.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [418.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 128 as Id<JiNotationBound>,
        name: "421.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [421.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 129 as Id<JiNotationBound>,
        name: "425.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [425.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 130 as Id<JiNotationBound>,
        name: "428.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [428.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 131 as Id<JiNotationBound>,
        name: "432.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [432.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 132 as Id<JiNotationBound>,
        name: "435.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [435.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 133 as Id<JiNotationBound>,
        name: "439.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [439.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 134 as Id<JiNotationBound>,
        name: "442.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [442.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 135 as Id<JiNotationBound>,
        name: "'(|) ,.(|\\" as Name<CommaMean>,
        pitch: {
            monzo: [-18, 18, -3, 0, -1] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 136 as Id<JiNotationBound>,
        name: "446.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [446.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 137 as Id<JiNotationBound>,
        name: "449.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [449.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 138 as Id<JiNotationBound>,
        name: "453.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [453.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 139 as Id<JiNotationBound>,
        name: "456.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [456.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 140 as Id<JiNotationBound>,
        name: "460.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [460.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 141 as Id<JiNotationBound>,
        name: "463.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [463.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 142 as Id<JiNotationBound>,
        name: "466.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [466.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 143 as Id<JiNotationBound>,
        name: "470.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [470.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 144 as Id<JiNotationBound>,
        name: "473.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [473.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 145 as Id<JiNotationBound>,
        name: "477.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [477.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 146 as Id<JiNotationBound>,
        name: "480.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [480.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 147 as Id<JiNotationBound>,
        name: "484.5°809" as Name<InaMidpoint>,
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: [484.5, 809] as Quotient,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 148 as Id<JiNotationBound>,
        name: "L|SS" as Name<SizeCategoryBound>,
        pitch: {
            monzo: [-30, 19] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Pitch<{ rational: false }>,
        boundType: BoundType.SIZE_CATEGORY_BOUND,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
]

export {
    JI_NOTATION_BOUNDS,
}
