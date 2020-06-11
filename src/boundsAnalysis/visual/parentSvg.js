const fs = require("fs")
const {MAXIMUM_POSITION} = require("../data/intervals")
const {computeX} = require("./x")
const {LEVEL_BOTTOMS} = require("./levelHeights")
const {MARGIN, OUTPUT} = require("./constants")

const addParentSvg = () => {
    const width = computeX(MARGIN + MAXIMUM_POSITION)
    const height = LEVEL_BOTTOMS["MEDIUM"] + 500
    fs.appendFileSync(OUTPUT, `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">\n`)
}

module.exports = {
    addParentSvg,
}