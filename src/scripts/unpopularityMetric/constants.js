const SUBMETRIC_TYPE = {
    SOAPFAR: "soapfar",
    SOAPF: "soapf",
    COAPFAR: "coapfar",
    COAPF: "coapf",
    SOAPIFAR: "soapifar",
    SOAPIF: "soapif",
    COAPIFAR: "coapifar",
    COAPIF: "coapif",
    GPF: "gpf",
    GPIF: "gpif",
}

const SUBMETRIC_OPERATION = {
    SUM: "sum",
    COUNT: "count",
    MAX: "max",
}

const SUBMETRIC_PROPERTIES = {
    [SUBMETRIC_TYPE.SOAPFAR]: {
        withRepetition: true,
        operation: SUBMETRIC_OPERATION.SUM,
        usePrimeIndex: false,
    },
    [SUBMETRIC_TYPE.SOAPF]: {
        withRepetition: false,
        operation: SUBMETRIC_OPERATION.SUM,
        usePrimeIndex: false,
    },
    [SUBMETRIC_TYPE.COAPFAR]: {
        withRepetition: true,
        operation: SUBMETRIC_OPERATION.COUNT,
    },
    [SUBMETRIC_TYPE.COAPF]: {
        withRepetition: false,
        operation: SUBMETRIC_OPERATION.COUNT,
    },
    [SUBMETRIC_TYPE.SOAPIFAR]: {
        withRepetition: true,
        operation: SUBMETRIC_OPERATION.SUM,
        usePrimeIndex: true,
    },
    [SUBMETRIC_TYPE.SOAPIF]: {
        withRepetition: false,
        operation: SUBMETRIC_OPERATION.SUM,
        usePrimeIndex: true,
    },
    [SUBMETRIC_TYPE.GPF]: {
        withRepetition: false,
        operation: SUBMETRIC_OPERATION.MAX,
        usePrimeIndex: false,
    },
    [SUBMETRIC_TYPE.GPIF]: {
        withRepetition: false,
        operation: SUBMETRIC_OPERATION.MAX,
        usePrimeIndex: true,
    },
}

const PARAMETER = {
    SUBMETRIC_TYPE: "submetricType",                        // submetric type, which will be used to look up its properties (how it works) when computing antivotes
    WEIGHT: "weight",                                       // submetric coefficient
    WEIGHT_IS_BASE: "weightIsBase",                         // use the submetric coefficient instead as base
    WEIGHT_IS_EXPONENT: "weightIsExponent",                 // use the submetric coefficient instead as an exponent
    K: "k",                                                 // diminuator coefficient
    K_IS_BASE: "kIsBase",                                   // use the diminuator coefficient instead as a base
    K_IS_EXPONENT: "kIsExponent",                           // use the diminuator coefficient instead as an exponent
    J: "j",                                                 // numinator coefficient
    J_IS_BASE: "jIsBase",                                   // use the numinator coefficient instead as a base
    J_IS_EXPONENT: "jIsExponent",                           // use the numinator coefficient instead as an exponent
    A: "a",                                                 // prime coefficient
    A_IS_BASE: "aIsBase",                                   // use the prime coefficient instead as a base
    A_IS_EXPONENT: "aIsExponent",                           // use the prime coefficient instead as an exponent
    W: "w",                                                 // prime constant (applied after applying exponent or base)
    X: "x",                                                 // prime constant (applied before applying exponent or base)
    Y: "y",                                                 // term exponent
    V: "v",                                                 // term constant (applied before applying exponent, for non-zero terms)
    T: "t",                                                 // term constant (applied after applying exponent)
    NUMERATOR_IS_NUMINATOR: "numeratorIsNuminator",         // numinator is determined by the original ratio's numerator, not the greater of the two results of calling the submetric on the original ratio's numerator and denominator
    MODIFIED_COUNT: "modifiedCount",                        // Dave's trick where 5's get a half-count
}

module.exports = {
    SUBMETRIC_PROPERTIES,
    SUBMETRIC_TYPE,
    SUBMETRIC_OPERATION,
    PARAMETER,
}
