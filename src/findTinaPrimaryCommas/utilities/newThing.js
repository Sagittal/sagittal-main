const {computeMonzoFromRatio} = require("./monzoFromRatio")
const {computeSopfgtt} = require("./sopfgtt")
const {computeCopfgtt} = require("./copfgtt")

const COMMA_POPULARITIES = [
    [1, 1, 7624],
    [5, 1, 5371],
    [7, 1, 3016],
    [25, 1, 1610],
    [7, 5, 1318],
    [11, 1, 1002],
    [35, 1, 875],
    [125, 1, 492],
    [49, 1, 463],
    [13, 1, 447],
    [11, 5, 339],
    [11, 7, 324],
    [17, 1, 318],
    [25, 7, 312],
    [49, 5, 246],
    [13, 5, 205],
    [175, 1, 168],
    [19, 1, 166],
    [245, 1, 165],
    [13, 7, 145],
    [625, 1, 143],
    [23, 1, 136],
    [49, 25, 134],
    [55, 1, 119],
    [77, 1, 111],
    [17, 5, 108],
    [19, 5, 97],
    [35, 11, 92],
    [13, 11, 89],
    [31, 1, 80],
    [343, 1, 70],
    [29, 1, 67],
    [125, 7, 62],
    [55, 7, 61],
    [17, 11, 55],
    [77, 5, 55],
    [19, 7, 52],
    [385, 1, 52],
    [55, 49, 51],
    [17, 7, 50],
    [1225, 1, 47],
    [37, 1, 46],
    [121, 1, 46],
    [23, 5, 45],
    [19, 13, 44],
    [17, 13, 42],
    [23, 7, 42],
    [25, 11, 42],
    [31, 11, 41],
    [65, 1, 40],
    [47, 1, 37],
    [25, 13, 34],
    [3125, 1, 34],
    [49, 11, 33],
    [19, 11, 31],
    [343, 5, 31],
    [91, 1, 30],
    [43, 1, 29],
    [29, 5, 28],
    [37, 11, 28],
    [23, 11, 27],
    [23, 13, 27],
    [77, 25, 27],
    [125, 49, 27],
    [15625, 1, 27],
    [143, 1, 26],
    [31, 5, 25],
    [35, 13, 25],
    [343, 25, 25],
    [37, 5, 24],
    [19, 17, 23],
    [41, 1, 23],
    [95, 1, 23],
    [53, 1, 22],
    [23, 17, 21],
    [875, 1, 21],
    [1715, 1, 21],
    [85, 1, 20],
    [25, 19, 19],
    [2401, 1, 19],
    [31, 17, 16],
    [29, 7, 15],
    [43, 11, 15],
    [59, 1, 15],
    [31, 23, 14],
    [169, 1, 14],
    [2375, 1, 14],
    [29, 11, 13],
    [37, 13, 13],
    [143, 5, 13],
    // [211, 11, 13], // this one is strangely huge
    [78125, 1, 13],
    [37, 19, 12],
    [475, 1, 12],
    [605, 1, 12],
    [625, 49, 12],
    [23, 19, 11],
    [29, 13, 11],
    [49, 19, 11],
    [65, 7, 11],
    [67, 19, 11],
    [91, 5, 11],
    [121, 35, 11],
    [175, 11, 11],
    [275, 49, 11],
    [343, 125, 11],
    // [433, 125, 11], // this one is strangely huge
    [117649, 1, 11],
    [29, 25, 10],
    [31, 7, 10],
    [47, 25, 10],
    [61, 1, 10],
    [125, 77, 10],
    [245, 11, 10],
    [625, 7, 10],
    [847, 1, 10],
    [16807, 1, 10],
    [31, 13, 9],
    [35, 17, 9],
    [37, 7, 9],
    [37, 17, 9],
    [41, 7, 9],
    [49, 31, 9],
    [53, 31, 9],
    [55, 19, 9],
    [97, 1, 9],
    [143, 7, 9],
    [295, 221, 9],
    [8575, 1, 9],
    [25, 17, 8],
    [47, 5, 8],
    [47, 11, 8],
    [47, 13, 8],
    [73, 5, 8],
    [77, 13, 8],
    [85, 37, 8],
    [89, 7, 8],
    [121, 49, 8],
    [2401, 5, 8],
    [29, 19, 7],
    [31, 19, 7],
    [43, 7, 7],
    [49, 13, 7],
    [59, 11, 7],
    [61, 5, 7],
    [61, 7, 7],
    [97, 7, 7],
    [121, 5, 7],
    [125, 11, 7],
    [275, 1, 7],
    [275, 7, 7],
    [1001, 1, 7],
    [4375, 1, 7],
    [5764801, 1, 7],
    [25, 23, 6],
    [35, 19, 6],
    [35, 23, 6],
    [41, 5, 6],
    [43, 5, 6],
    [43, 23, 6],
    [43, 31, 6],
    [53, 5, 6],
    [59, 31, 6],
    [65, 11, 6],
    [83, 1, 6],
    [83, 61, 6],
    [97, 11, 6],
    [121, 7, 6],
    [1001, 5, 6],
    [3125, 49, 6],
    [5005, 1, 6],
    [6125, 1, 6],
    [11875, 1, 6],
    [29, 17, 5],
    [31, 29, 5],
    [47, 17, 5],
    [47, 37, 5],
    [49, 23, 5],
    [53, 11, 5],
    [53, 17, 5],
    [61, 23, 5],
    [73, 19, 5],
    [77, 19, 5],
    [85, 11, 5],
    [89, 23, 5],
    [91, 59, 5],
    [143, 35, 5],
    [149, 1, 5],
    [323, 5, 5],
    [455, 1, 5],
    [539, 1, 5],
    [715, 1, 5],
    [1331, 1, 5],
    [4235, 1, 5],
    [12005, 1, 5],
    [390625, 1, 5],
    [823543, 1, 5],
    [1953125, 1, 5],
    [40353607, 1, 5],
    [37, 25, 4],
    [37, 31, 4],
    [41, 11, 4],
    [41, 13, 4],
    [43, 25, 4],
    [53, 47, 4],
    [53, 49, 4],
    [55, 13, 4],
    [55, 23, 4],
    [55, 29, 4],
    [59, 5, 4],
    [65, 17, 4],
    [67, 5, 4],
    [67, 41, 4],
    [71, 29, 4],
    [71, 47, 4],
    [73, 1, 4],
    [77, 41, 4],
    [77, 65, 4],
    [79, 5, 4],
    [79, 11, 4],
    [89, 1, 4],
    [89, 5, 4],
    [89, 49, 4],
    [91, 11, 4],
    [101, 5, 4],
    [103, 13, 4],
    [107, 5, 4],
    [109, 1, 4],
    [119, 5, 4],
    [121, 25, 4],
    [187, 1, 4],
    [187, 5, 4],
    [1225, 11, 4],
    [42875, 1, 4],
    [282475249, 1, 4],
    [29, 23, 3],
    [43, 13, 3],
    [43, 17, 3],
    [47, 7, 3],
    [53, 41, 3],
    [59, 23, 3],
    [61, 19, 3],
    [61, 29, 3],
    [61, 31, 3],
    [65, 43, 3],
    [67, 1, 3],
    [67, 23, 3],
    [67, 25, 3],
    [67, 47, 3],
    [71, 11, 3],
    [77, 73, 3],
    [79, 13, 3],
    [79, 17, 3],
    [89, 19, 3],
    [97, 85, 3],
    [107, 67, 3],
    [119, 1, 3],
    [121, 91, 3],
    [161, 5, 3],
    [221, 1, 3],
    [247, 7, 3],
    [289, 1, 3],
    [625, 343, 3],
    [715, 7, 3],
    [1001, 25, 3],
    [2401, 125, 3],
    [3125, 7, 3],
    [9765625, 1, 3],
    [48828125, 1, 3],
    // [35, 29, 2],
    // [35, 31, 2],
    // [37, 23, 2],
    // [37, 29, 2],
    // [37, 35, 2],
    // [41, 17, 2],
    // [41, 23, 2],
    // [41, 37, 2],
    // [43, 19, 2],
    // [43, 29, 2],
    // [43, 37, 2],
    // [43, 41, 2],
    // [47, 23, 2],
    // [47, 31, 2],
    // [47, 35, 2],
    // [47, 41, 2],
    // [47, 43, 2],
    // [49, 17, 2],
    // [49, 43, 2],
    // [53, 13, 2],
    // [53, 37, 2],
    // [55, 17, 2],
    // [59, 13, 2],
    // [59, 25, 2],
    // [61, 13, 2],
    // [61, 37, 2],
    // [65, 19, 2],
    // [65, 23, 2],
    // [65, 29, 2],
    // [65, 41, 2],
    // [65, 49, 2],
    // [67, 13, 2],
    // [67, 17, 2],
    // [67, 61, 2],
    // [71, 41, 2],
    // [71, 49, 2],
    // [71, 65, 2],
    // [73, 7, 2],
    // [73, 43, 2],
    // [73, 47, 2],
    // [77, 31, 2],
    // [77, 47, 2],
    // [79, 1, 2],
    // [79, 37, 2],
    // [79, 59, 2],
    // [83, 5, 2],
    // [83, 37, 2],
    // [83, 43, 2],
    // [83, 47, 2],
    // [83, 49, 2],
    // [85, 13, 2],
    // [85, 43, 2],
    // [85, 49, 2],
    // [85, 59, 2],
    // [89, 55, 2],
    // [91, 23, 2],
    // [91, 25, 2],
    // [91, 29, 2],
    // [91, 73, 2],
    // [97, 25, 2],
    // [101, 13, 2],
    // [101, 19, 2],
    // [101, 47, 2],
    // [101, 65, 2],
    // [103, 19, 2],
    // [109, 11, 2],
    // [109, 25, 2],
    // [113, 7, 2],
    // [115, 79, 2],
    // [127, 5, 2],
    // [133, 1, 2],
    // [137, 23, 2],
    // [143, 23, 2],
    // [143, 25, 2],
    // [143, 29, 2],
    // [161, 25, 2],
    // [169, 5, 2],
    // [169, 19, 2],
    // [169, 35, 2],
    // [179, 19, 2],
    // [187, 7, 2],
    // [205, 67, 2],
    // [209, 5, 2],
    // [209, 7, 2],
    // [221, 5, 2],
    // [221, 7, 2],
    // [247, 5, 2],
    // [253, 211, 2],
    // [323, 7, 2],
    // [355, 197, 2],
    // [385, 13, 2],
    // [419, 125, 2],
    // [425, 1, 2],
    // [455, 11, 2],
    // [499, 1, 2],
    // [643, 215, 2],
    // [671, 199, 2],
    // [1787, 7, 2],
    // [2401, 25, 2],
    // [2401, 625, 2],
    // [2431, 35, 2],
    // [2695, 1, 2],
    // [2717, 35, 2],
    // [3553, 35, 2],
    // [4151, 3767, 2],
    // [4199, 35, 2],
    // [4583, 3767, 2],
    // [5069, 3767, 2],
    // [5581, 3767, 2],
    // [6157, 3767, 2],
    // [6805, 3767, 2],
    // [14641, 1, 2],
    // [30625, 1, 2],
    // [60025, 1, 2],
    // [413449, 46225, 2],
    // [420175, 1, 2],
    // [244140625, 1, 2],
    // [265847707, 9938375, 2],
    // [1977326743, 1, 2], // this one is kind of throwing off the data
    // [31, 25, 1],
    // [41, 25, 1],
    // [41, 29, 1],
    // [41, 31, 1],
    // [47, 29, 1],
    // [49, 29, 1],
    // [49, 37, 1],
    // [49, 47, 1],
    // [53, 7, 1],
    // [53, 19, 1],
    // [53, 43, 1],
    // [55, 53, 1],
    // [59, 7, 1],
    // [59, 53, 1],
    // [59, 55, 1],
    // [61, 11, 1],
    // [61, 17, 1],
    // [61, 41, 1],
    // [61, 43, 1],
    // [61, 49, 1],
    // [65, 31, 1],
    // [67, 7, 1],
    // [67, 35, 1],
    // [67, 49, 1],
    // [67, 59, 1],
    // [71, 7, 1],
    // [71, 13, 1],
    // [71, 37, 1],
    // [71, 55, 1],
    // [73, 11, 1],
    // [73, 13, 1],
    // [73, 17, 1],
    // [73, 35, 1],
    // [73, 37, 1],
    // [73, 49, 1],
    // [73, 65, 1],
    // [73, 67, 1],
    // [77, 17, 1],
    // [77, 29, 1],
    // [77, 61, 1],
    // [79, 23, 1],
    // [79, 31, 1],
    // [79, 49, 1],
    // [79, 53, 1],
    // [79, 55, 1],
    // [79, 61, 1],
    // [79, 71, 1],
    // [79, 77, 1],
    // [83, 13, 1],
    // [83, 25, 1],
    // [83, 53, 1],
    // [83, 55, 1],
    // [83, 67, 1],
    // [83, 73, 1],
    // [85, 19, 1],
    // [85, 29, 1],
    // [85, 73, 1],
    // [89, 11, 1],
    // [89, 29, 1],
    // [89, 73, 1],
    // [91, 55, 1],
    // [95, 7, 1],
    // [95, 11, 1],
    // [95, 13, 1],
    // [95, 17, 1],
    // [95, 53, 1],
    // [95, 77, 1],
    // [97, 5, 1],
    // [97, 17, 1],
    // [97, 19, 1],
    // [97, 29, 1],
    // [97, 31, 1],
    // [97, 35, 1],
    // [97, 37, 1],
    // [97, 41, 1],
    // [97, 49, 1],
    // [97, 61, 1],
    // [97, 65, 1],
    // [97, 73, 1],
    // [97, 79, 1],
    // [97, 83, 1],
    // [97, 91, 1],
    // [101, 11, 1],
    // [101, 25, 1],
    // [101, 55, 1],
    // [103, 17, 1],
    // [103, 41, 1],
    // [103, 49, 1],
    // [103, 65, 1],
    // [107, 25, 1],
    // [109, 35, 1],
    // [109, 47, 1],
    // [109, 65, 1],
    // [109, 91, 1],
    // [113, 1, 1],
    // [113, 5, 1],
    // [113, 13, 1],
    // [113, 47, 1],
    // [113, 59, 1],
    // [115, 1, 1],
    // [115, 13, 1],
    // [115, 31, 1],
    // [115, 67, 1],
    // [115, 73, 1],
    // [115, 103, 1],
    // [121, 13, 1],
    // [121, 17, 1],
    // [121, 19, 1],
    // [121, 65, 1],
    // [125, 13, 1],
    // [125, 23, 1],
    // [125, 31, 1],
    // [125, 41, 1],
    // [125, 61, 1],
    // [125, 121, 1],
    // [127, 1, 1],
    // [127, 59, 1],
    // [127, 101, 1],
    // [131, 5, 1],
    // [131, 13, 1],
    // [131, 19, 1],
    // [131, 49, 1],
    // [131, 73, 1],
    // [131, 91, 1],
    // [131, 109, 1],
    // [131, 113, 1],
    // [131, 121, 1],
    // [133, 5, 1],
    // [133, 11, 1],
    // [133, 23, 1],
    // [133, 37, 1],
    // [133, 89, 1],
    // [133, 125, 1],
    // [137, 19, 1],
    // [137, 35, 1],
    // [137, 49, 1],
    // [137, 61, 1],
    // [137, 77, 1],
    // [137, 113, 1],
    // [139, 7, 1],
    // [139, 13, 1],
    // [139, 49, 1],
    // [145, 109, 1],
    // [149, 73, 1],
    // [149, 133, 1],
    // [151, 5, 1],
    // [151, 7, 1],
    // [151, 17, 1],
    // [151, 49, 1],
    // [155, 1, 1],
    // [155, 77, 1],
    // [157, 11, 1],
    // [157, 25, 1],
    // [161, 1, 1],
    // [167, 7, 1],
    // [167, 11, 1],
    // [167, 53, 1],
    // [169, 49, 1],
    // [169, 95, 1],
    // [169, 115, 1],
    // [169, 133, 1],
    // [173, 97, 1],
    // [175, 13, 1],
    // [179, 125, 1],
    // [185, 13, 1],
    // [187, 35, 1],
    // [193, 29, 1],
    // [193, 71, 1],
    // [193, 121, 1],
    // [199, 133, 1],
    // [205, 29, 1],
    // [209, 1, 1],
    // [209, 35, 1],
    // [209, 49, 1],
    // [209, 125, 1],
    // [211, 1, 1],
    // [211, 119, 1],
    // [217, 1, 1],
    // [217, 113, 1],
    // [217, 199, 1],
    // [221, 35, 1],
    // [221, 137, 1],
    // [229, 17, 1],
    // [235, 17, 1],
    // [239, 199, 1],
    // [241, 181, 1],
    // [245, 17, 1],
    // [247, 1, 1],
    // [247, 35, 1],
    // [251, 31, 1],
    // [251, 67, 1],
    // [253, 1, 1],
    // [253, 5, 1],
    // [253, 13, 1],
    // [253, 25, 1],
    // [259, 5, 1],
    // [283, 25, 1],
    // [307, 1, 1],
    // [307, 53, 1],
    // [311, 11, 1],
    // [323, 1, 1],
    // [323, 25, 1],
    // [323, 35, 1],
    // [323, 125, 1],
    // [323, 169, 1],
    // [325, 1, 1],
    // [335, 31, 1],
    // [341, 1, 1],
    // [341, 5, 1],
    // [341, 197, 1],
    // [343, 13, 1],
    // [343, 55, 1],
    // [343, 143, 1],
    // [343, 275, 1],
    // [359, 113, 1],
    // [361, 169, 1],
    // [367, 25, 1],
    // [367, 319, 1],
    // [371, 67, 1],
    // [377, 7, 1],
    // [385, 169, 1],
    // [391, 5, 1],
    // [397, 125, 1],
    // [401, 71, 1],
    // [403, 23, 1],
    // [403, 125, 1],
    // [421, 319, 1],
    // [437, 25, 1],
    // [445, 13, 1],
    // [449, 47, 1],
    // [451, 71, 1],
    // [455, 121, 1],
    // [473, 199, 1],
    // [485, 319, 1],
    // [487, 83, 1],
    // [527, 1, 1],
    // [527, 5, 1],
    // [529, 25, 1],
    // [533, 473, 1],
    // [539, 5, 1],
    // [551, 7, 1],
    // [557, 319, 1],
    // [563, 125, 1],
    // [563, 199, 1],
    // [605, 91, 1],
    // [607, 263, 1],
    // [623, 421, 1],
    // [625, 13, 1],
    // [625, 31, 1],
    // [625, 331, 1],
    // [625, 607, 1],
    // [631, 125, 1],
    // [637, 1, 1],
    // [637, 5, 1],
    // [671, 563, 1],
    // [713, 5, 1],
    // [715, 49, 1],
    // [743, 625, 1],
    // [749, 125, 1],
    // [763, 625, 1],
    // [775, 1, 1],
    // [779, 25, 1],
    // [781, 41, 1],
    // [805, 589, 1],
    // [809, 625, 1],
    // [845, 1, 1],
    // [847, 5, 1],
    // [881, 625, 1],
    // [931, 125, 1],
    // [935, 1, 1],
    // [971, 125, 1],
    // [1021, 625, 1],
    // [1087, 625, 1],
    // [1159, 169, 1],
    // [1183, 1, 1],
    // [1183, 5, 1],
    // [1331, 35, 1],
    // [1331, 91, 1],
    // [1375, 7, 1],
    // [1435, 71, 1],
    // [1445, 1, 1],
    // [1457, 125, 1],
    // [1517, 71, 1],
    // [1529, 625, 1],
    // [1573, 1, 1],
    // [1573, 5, 1],
    // [1573, 625, 1],
    // [1631, 625, 1],
    // [1705, 1, 1],
    // [1753, 1241, 1],
    // [1781, 1243, 1],
    // [1859, 1, 1],
    // [1859, 5, 1],
    // [1919, 625, 1],
    // [1925, 1, 1],
    // [1937, 625, 1],
    // [2009, 355, 1],
    // [2057, 1, 1],
    // [2197, 1, 1],
    // [2357, 625, 1],
    // [2431, 5, 1],
    // [2431, 7, 1],
    // [2485, 41, 1],
    // [2497, 625, 1],
    // [2627, 41, 1],
    // [2635, 1, 1],
    // [2717, 5, 1],
    // [2717, 7, 1],
    // [2747, 1633, 1],
    // [2797, 625, 1],
    // [2803, 625, 1],
    // [2821, 1357, 1],
    // [2821, 1957, 1],
    // [3143, 625, 1],
    // [3149, 625, 1],
    // [3179, 1, 1],
    // [3337, 625, 1],
    // [3485, 923, 1],
    // [3553, 5, 1],
    // [3553, 7, 1],
    // [3751, 1, 1],
    // [3859, 625, 1],
    // [3989, 625, 1],
    // [4199, 5, 1],
    // [4199, 7, 1],
    // [4375, 19, 1],
    // [4675, 1, 1],
    // [4739, 625, 1],
    // [4757, 943, 1],
    // [4805, 1, 1],
    // [4913, 1, 1],
    // [5141, 625, 1],
    // [5183, 2747, 1],
    // [5437, 625, 1],
    // [5611, 625, 1],
    // [5789, 625, 1],
    // [5797, 1, 1],
    // [6103, 625, 1],
    // [6439, 5989, 1],
    // [6869, 625, 1],
    // [6881, 625, 1],
    // [7111, 625, 1],
    // [8525, 1, 1],
    // [8909, 625, 1],
    // [8959, 1, 1],
    // [10223, 7229, 1],
    // [10285, 1, 1],
    // [10553, 9181, 1],
    // [10571, 1, 1],
    // [12121, 9181, 1],
    // [12167, 125, 1],
    // [13175, 1, 1],
    // [13913, 9181, 1],
    // [15625, 7, 1],
    // [15625, 49, 1],
    // [15895, 1, 1],
    // [15961, 9181, 1],
    // [16337, 1, 1],
    // [18755, 1, 1],
    // [19937, 15841, 1],
    // [21875, 1, 1],
    // [25121, 15841, 1],
    // [28985, 1, 1],
    // [31031, 12427, 1],
    // [31031, 25847, 1],
    // [44795, 1, 1],
    // [46189, 35, 1],
    // [52855, 1, 1],
    // [62843, 1, 1],
    // [63767, 1, 1],
    // [78125, 7, 1],
    // [81685, 1, 1],
    // [83521, 1, 1],
    // [94357, 1, 1],
    // [98549, 1, 1],
    // [109375, 1, 1],
    // [153125, 1, 1],
    // [161051, 1, 1],
    // [179707, 1, 1],
    // [280453, 5, 1],
    // [300125, 1, 1],
    // [302065, 269297, 1],
    // [355633, 224099, 1],
    // [399193, 224099, 1],
    // [473185, 1, 1],
    // [479545, 269297, 1],
    // [497483, 5, 1],
    // [533029, 1, 1],
    // [561001, 15625, 1],
    // [765625, 1, 1],
    // [1043411, 390385, 1],
    // [1043411, 413713, 1],
    // [1043411, 438289, 1],
    // [1043411, 464533, 1],
    // [1043411, 492181, 1],
    // [1055723, 5, 1],
    // [1071875, 1, 1],
    // [1105619, 1043411, 1],
    // [1173019, 25, 1],
    // [1419857, 1, 1],
    // [1662005, 1568693, 1],
    // [1760309, 1568693, 1],
    // [1771561, 1, 1],
    // [1865285, 1568693, 1],
    // [1975877, 1568693, 1],
    // [2093975, 1568693, 1],
    // [2100875, 1, 1],
    // [2349463, 1568693, 1],
    // [2631019, 25, 1],
    // [2636887, 1568693, 1],
    // [2960239, 1568693, 1],
    // [4691773, 1043411, 1],
    // [4971709, 1043411, 1],
    // [5014657, 25, 1],
    // [5266621, 1043411, 1],
    // [5581549, 1043411, 1],
    // [5913325, 1043411, 1],
    // [6267619, 1043411, 1],
    // [6640867, 1043411, 1],
    // [7034083, 1043411, 1],
    // [7453987, 1043411, 1],
    // [7896355, 1043411, 1],
    // [8368747, 1043411, 1],
    // [8866411, 1043411, 1],
    // [16727831, 25, 1],
    // [19487171, 1, 1],
    // [24137569, 1, 1],
    // [214358881, 1, 1],
    // [410338673, 1, 1],
    // [420189749, 1953125, 1],
    // [1220703125, 1, 1],
    // [115, 7, 1],
]

const fs = require("fs")

fs.unlinkSync("src/findTinaPrimaryCommas/utilities/results2.txt")

COMMA_POPULARITIES.forEach(([numerator, denominator, popularity]) => {
    const monzo = computeMonzoFromRatio([numerator, denominator])
    const numeratorMonzo = computeMonzoFromRatio([numerator, 1])
    const denominatorMonzo = computeMonzoFromRatio([1, denominator])
    // console.log(monzo, numeratorMonzo, denominatorMonzo)

    const sopfgtt = computeSopfgtt(monzo)
    const numeratorSopfgtt = computeSopfgtt(numeratorMonzo)
    const denominatorSopfgtt = computeSopfgtt(denominatorMonzo)

    const blumeyerLength = numerator - denominator

    // const score = sopfgtt + (blumeyerLength * 0.1)
    const score = sopfgtt //+ Math.abs(computeCopfgtt(numeratorMonzo) - computeCopfgtt(denominatorMonzo))

    // fs.appendFileSync("src/findTinaPrimaryCommas/utilities/results.txt", `${numerator}/${denominator}\n`)
    // fs.appendFileSync("src/findTinaPrimaryCommas/utilities/results2.txt", `(${sopfgtt},${popularity}),`)
    fs.appendFileSync("src/findTinaPrimaryCommas/utilities/results2.txt", `${denominatorSopfgtt}\n`)
})