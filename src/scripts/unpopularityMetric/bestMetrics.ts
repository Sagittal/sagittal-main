import { Parameter, SubmetricType } from "./types"


//


// Dave's log-α's (best SoS is 0.00613) some still with prime limit (s)
// Mon Jun 29, 2020 7:07 pm
// http://forum.sagittal.org/viewtopic.php?p=1944#p1944
/*
α		    w (your d)	    k		    y		    s		    SoS
3.956349187	-0.619217685	0.638243216	0.883788532	0.020609268	0.006160415
3		    -0.774993871	0.638278131	0.883803886	0.025836729	0.006160415
2.718281828	-0.851411926	0.638277637	0.883804124	0.028385603	0.006160415
3.018652175	-0.904768274	0.618447635	0.874496057	0		    0.007488211
3		    -0.909855998	0.618460475	0.874485023	0		    0.007488211
3		    -1		        0.67017005	0.955080391	0		    0.008473958
 */
const withPrimeLimit = {
    sumOfSquares: 0.006127818362694095,
    submetrics: [
        {
            [ Parameter.K ]: 0.638243216,
            [ Parameter.A ]: 3.956349187,
            [ Parameter.A_IS_BASE ]: true,
            [ Parameter.W ]: -0.619217685,
            [ Parameter.Y ]: 0.883788532,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
        {
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.GPF,
            [ Parameter.WEIGHT ]: 0.020609268,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
    ],
}


//


// Douglas's 8-chunk lowest-ever 0.00426 SoS
// Mon Jun 29, 2020 7:36 pm
// http://forum.sagittal.org/viewtopic.php?p=1946#p1946
const lowestEver = {
    sumOfSquares: 0.004260809896143936,
    submetrics: [
        {
            [ Parameter.K ]: 0.038,
            [ Parameter.A ]: 1.994,
            [ Parameter.A_IS_BASE ]: true,
            [ Parameter.Y ]: 0.455,
            [ Parameter.W ]: -2.08,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
        {
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            [ Parameter.WEIGHT ]: 0.577,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
    ],
}


//


// Douglas's response to Dave's ask for k vs. c wrt my lowest ever
// Mon Jun 29, 2020 10:44 pm
// http://forum.sagittal.org/viewtopic.php?p=1951#p1951
// 0.00473
const likeLowestEverButWithZeroK = {
    sumOfSquares: 0.004732527573659666,
    submetrics: [
        {
            [ Parameter.K ]: 0,
            [ Parameter.A ]: 1.753,
            [ Parameter.A_IS_BASE ]: true,
            [ Parameter.Y ]: 0.473,
            [ Parameter.W ]: -2.620,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
        {
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            [ Parameter.WEIGHT ]: 0.723,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
    ],
}
// 0.00622
const likeLowestEverButWithZeroC = {
    sumOfSquares: 0.006222012568306695,
    submetrics: [
        {
            [ Parameter.K ]: 0.635,
            [ Parameter.A ]: 1.430,
            [ Parameter.A_IS_BASE ]: true,
            [ Parameter.Y ]: 0.850,
            [ Parameter.W ]: -2.770,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
    ],
}

//


// Dave's "2-chunk" 0.00651 mcopfr claimed 0.00651 but I find 0.00721
// Wed Jul 01, 2020 12:46 am
// http://forum.sagittal.org/viewtopic.php?p=1962#p1962
const notTwoChunkByCurrentDefinitionMcopfr = {
    sumOfSquares: 0.007205996505476978,
    submetrics: [
        {
            [ Parameter.K ]: 0,
            [ Parameter.A ]: 2,
            [ Parameter.A_IS_BASE ]: true,
            [ Parameter.W ]: -1.453,
            [ Parameter.Y ]: 0.863,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
        {
            [ Parameter.J ]: 0,
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            [ Parameter.MODIFIED_COUNT ]: true,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
    ],
}


//


// Dave's "3-chunk" mcopfr claimed 0.00614 but I find 0.00740
// Wed Jul 01, 2020 2:46 am
// http://forum.sagittal.org/viewtopic.php?p=1964#p1964
const notThreeChunkByCurrentDefinitionMcopfr = {
    sumOfSquares: 0.0073967019283224696,
    submetrics: [
        {
            [ Parameter.K ]: 0,
            [ Parameter.A ]: 2,
            [ Parameter.A_IS_BASE ]: true,
            [ Parameter.W ]: -1.431,
            [ Parameter.Y ]: 0.851,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
        {
            [ Parameter.J ]: 0,
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            [ Parameter.MODIFIED_COUNT ]: true,
            [ Parameter.Y ]: 1.332,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
    ],
}


//


// Dave's "4-chunk" mcopfr claimed 0.00660 but I find 0.00838
// Wed Jul 01, 2020 7:07 pm
// http://forum.sagittal.org/viewtopic.php?p=1965#p1965
/*
requires this hack to be added to `submetricAntivotes.js` to handle the "h" parameter
            if (index !== 2 && modifiedCount === true) {
                termUnpopularity = termUnpopularity * 0.947
            }
 */
const notFourChunkByCurrentDefinitionMcopfr = {
    sumOfSquares: 0.008200108887640998,
    submetrics: [
        {
            [ Parameter.K ]: 0,
            [ Parameter.A ]: 2,
            [ Parameter.A_IS_BASE ]: true,
            [ Parameter.W ]: -1.44,
            [ Parameter.Y ]: 0.860,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
        {
            [ Parameter.J ]: 0,
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            [ Parameter.MODIFIED_COUNT ]: true,
            [ Parameter.Y ]: 1.331,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
    ],
}


//


// Douglas's 1-submetrics
// Thu Jul 02, 2020 9:21 pm
// http://forum.sagittal.org/viewtopic.php?p=1978#p1978
// 1-submetric 9-chunk 0.00461
// const oneSubmetricNineChunk = {
//     sumOfSquares: 0.0046106446887802695,
//     submetrics: [
//         {
//             [Parameter.K]: 0.5920238095238095,              // ≈3/5
//             [Parameter.A]: 2.0107142857142857,              // ≈2
//             [Parameter.A_IS_BASE]: true,
//             [Parameter.Y]: 0.455,                           // ≈√
//             [Parameter.W]: -2.341928094887362,              // ≈log2(5)
//             [Parameter.X]: 3.069642857142857,               // ≈3
//             [Parameter.T]: 1.658452380952381,               // ≈5/3
//             [Parameter.Y]: 1.6476190476190475,              // ≈5/3
//             [Parameter.NUMERATOR_IS_NUMINATOR]: false,
//         },
//     ],
// }
// golden 1-submetric 8-chunk 0.00468
// const goldenOneSubmetricEightChunk = {
//     sumOfSquares: 0.0046831807461307174,
//     submetrics: [
//         {
//             [Parameter.K]: 0.5970238095238095,
//             [Parameter.A]: 2.0125,
//             [Parameter.A_IS_BASE]: true,
//             [Parameter.Y]: 1.6226190476190474,                          // ≈φ
//             [Parameter.W]: -2.334428094887362,
//             [Parameter.X]: 3.069642857142857,
//             [Parameter.T]: 1.618452380952381,                           // ≈φ
//             [Parameter.NUMERATOR_IS_NUMINATOR]: false,
//         },
//     ],
// }
// // 1-submetric 7-chunk 0.00565
// const oneSubmetricSevenChunk = {
//     sumOfSquares: 0.005646141896541448,
//     submetrics: [
//         {
//             [Parameter.K]: 0.6328571428571429,
//             [Parameter.A]: 1.5728571428571425,
//             [Parameter.A_IS_BASE]: true,
//             [Parameter.W]: -3.0571428571428574,
//             [Parameter.Y]: 0.8571428571428571,
//             [Parameter.X]: 1.607142857142857,
//             [Parameter.NUMERATOR_IS_NUMINATOR]: false,
//         },
//     ],
// }
// 1-submetric 6-chunk 0.00947 (claimed to be near 0.00652, so these must have been approximations)
const oneSubmetricSixChunk = {
    sumOfSquares: 0.00946539412309218,
    submetrics: [
        {
            [ Parameter.K ]: 0.6,
            [ Parameter.A ]: 3,
            [ Parameter.A_IS_BASE ]: true,
            [ Parameter.W ]: -1,
            [ Parameter.Y ]: 0.8766666666666667,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
    ],
}


//


// Dave's similar to my lowest ever w/ exact a = 2 base 0.00445
// Fri Jul 03, 2020 12:24 am
// http://forum.sagittal.org/viewtopic.php?p=1983#p1983
const almostLowestEverButWithExactA = {
    sumOfSquares: 0.004455901926266847,
    submetrics: [
        {
            [ Parameter.K ]: 0.038,
            [ Parameter.Y ]: 0.455,
            [ Parameter.A ]: 2,
            [ Parameter.A_IS_BASE ]: true,
            [ Parameter.W ]: -2.09,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
        {
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            [ Parameter.WEIGHT ]: 0.579,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
    ],
}


//


// Dave's less fragile minimum 0.00559
// Fri Jul 03, 2020 5:28 am
// http://forum.sagittal.org/viewtopic.php?p=1984#p1984
const lessFragileMinimum = {
    sumOfSquares: 0.005591116232258028,
    submetrics: [
        {
            [ Parameter.K ]: 0.213895488,
            [ Parameter.Y ]: 0.642099097,
            [ Parameter.A ]: 2,
            [ Parameter.A_IS_BASE ]: true,
            [ Parameter.W ]: -2.048657352,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
        {
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            [ Parameter.WEIGHT ]: 0.551650547,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
    ],
}


//


// Dave's sanity check claimed 0.008325554
// Sat Jul 04, 2020 3:17 am
// http://forum.sagittal.org/viewtopic.php?p=1995#p1995
const sanityCheck = {
    sumOfSquares: 0.00832555386875032,
    submetrics: [
        {
            [ Parameter.K ]: 0.632,
            [ Parameter.Y ]: 0.858,
            [ Parameter.A ]: 2,
            [ Parameter.A_IS_BASE ]: true,
            [ Parameter.W ]: -1.415,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
    ],
}


//


// Douglas's first run of the recursive automatic finder turned this up quick, 0.00406
// Sun Jul 05, 2020 10:29 pm
// http://forum.sagittal.org/viewtopic.php?p=2004#p2004
const firstRecursiveRun = {
    sumOfSquares: 0.004059521951422367,
    submetrics: [
        {
            [ Parameter.K ]: 0.1796875,
            [ Parameter.A ]: 2.0234375,
            [ Parameter.A_IS_BASE ]: true,
            [ Parameter.Y ]: 0.4921875,
            [ Parameter.W ]: -1.986328125,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
        {
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            [ Parameter.WEIGHT ]: 0.5615234375,
            [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
        },
    ],
}


//


// Dave's b and u: SoS 0.00659
// Fri Jul 10, 2020 2:57 am
// http://forum.sagittal.org/viewtopic.php?p=2039#p2039
// const bAndU = {
//     sumOfSquares: 0.006594234470005811,
//     submetrics: [
//         {
//             [ Parameter.K ]: 0,
//             [ Parameter.A ]: 2,
//             [ Parameter.A_IS_BASE ]: true,
//             [ Parameter.Y ]: 0.861,
//             [ Parameter.W ]: -2.656,
//             [ Parameter.X ]: 4.471,
//         },
//         {
//             [ Parameter.J ]: 0,
//             [ Parameter.A ]: 2,
//             [ Parameter.A_IS_BASE ]: true,
//             [ Parameter.Y ]: 0.861,
//             [ Parameter.W ]: -2.829,
//             [ Parameter.X ]: 3.850,
//         },
//     ]
// }


export {
    withPrimeLimit,

    lowestEver,
    likeLowestEverButWithZeroK,
    likeLowestEverButWithZeroC,

    notTwoChunkByCurrentDefinitionMcopfr,
    notThreeChunkByCurrentDefinitionMcopfr,
    notFourChunkByCurrentDefinitionMcopfr,

    // oneSubmetricNineChunk,
    // goldenOneSubmetricEightChunk,
    // oneSubmetricSevenChunk,
    oneSubmetricSixChunk,

    almostLowestEverButWithExactA,

    lessFragileMinimum,

    sanityCheck,

    firstRecursiveRun,

    // bAndU,
}