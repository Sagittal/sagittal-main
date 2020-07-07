const {PARAMETER} = require("../constants")

const checkSubmetricsForIssues = submetrics => {
    submetrics.forEach(submetric => {
        if (submetric[PARAMETER.A] === 1 && submetric[PARAMETER.A_IS_BASE]) {
            throw new Error("Submetric has base 1 and will calculate undefined antivotes.")
        }
        if (submetric[PARAMETER.A] < 0 && submetric[PARAMETER.A_IS_BASE]) {
            throw new Error("Submetric has negative base and will calculate undefined antivotes.")
        }
        if (submetric[PARAMETER.A_IS_BASE] && submetric[PARAMETER.A_IS_EXPONENT]) {
            throw new Error("Submetric cannot specify a to be both an exponent and a base.")
        }
        if (submetric[PARAMETER.J_IS_BASE] && submetric[PARAMETER.J_IS_EXPONENT]) {
            throw new Error("Submetric cannot specify j to be both an exponent and a base.")
        }
        if (submetric[PARAMETER.K_IS_BASE] && submetric[PARAMETER.K_IS_EXPONENT]) {
            throw new Error("Submetric cannot specify k to be both an exponent and a base.")
        }
        if (submetric[PARAMETER.WEIGHT_IS_BASE] && submetric[PARAMETER.WEIGHT_IS_EXPONENT]) {
            throw new Error("Submetric cannot specify weight to be both an exponent and a base.")
        }
    })
}

module.exports = {
    checkSubmetricsForIssues,
}
