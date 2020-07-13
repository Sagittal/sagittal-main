import { SubmetricOperation, SubmetricProperties, SubmetricType } from "./types"
import { EnumHash } from "../../utilities/types"
import { SampleResolution } from "./automator/process/samples/types"

const SUBMETRIC_PROPERTIES: EnumHash<SubmetricType, SubmetricProperties> = {
    [ SubmetricType.SOAPFAR ]: {
        withRepetition: true,
        operation: SubmetricOperation.SUM,
        usePrimeIndex: false,
    },
    [ SubmetricType.SOAPF ]: {
        withRepetition: false,
        operation: SubmetricOperation.SUM,
        usePrimeIndex: false,
    },
    [ SubmetricType.COAPFAR ]: {
        withRepetition: true,
        operation: SubmetricOperation.COUNT,
    },
    [ SubmetricType.COAPF ]: {
        withRepetition: false,
        operation: SubmetricOperation.COUNT,
    },
    [ SubmetricType.SOAPIFAR ]: {
        withRepetition: true,
        operation: SubmetricOperation.SUM,
        usePrimeIndex: true,
    },
    [ SubmetricType.SOAPIF ]: {
        withRepetition: false,
        operation: SubmetricOperation.SUM,
        usePrimeIndex: true,
    },
    [ SubmetricType.GPF ]: {
        withRepetition: false,
        operation: SubmetricOperation.MAX,
        usePrimeIndex: false,
    },
    [ SubmetricType.GPIF ]: {
        withRepetition: false,
        operation: SubmetricOperation.MAX,
        usePrimeIndex: true,
    },
}

const RESOLUTION: SampleResolution = 2 as SampleResolution

export {
    SUBMETRIC_PROPERTIES,
    RESOLUTION,
}
