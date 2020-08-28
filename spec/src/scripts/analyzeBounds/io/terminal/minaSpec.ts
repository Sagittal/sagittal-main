import { Mina } from "../../../../../../src/sagittal/notations/ji"
import { formatMina } from "../../../../../../src/scripts/analyzeBounds/io/terminal"

describe("formatMina", () => {
    it("returns a whole number with no decimal positions for whole minas", () => {
        expect(formatMina(110 as Mina)).toBe("110")
    })

    it("shifts over 2-digit numbers", () => {
        expect(formatMina(50 as Mina)).toBe(" 50")
    })

    it("shifts over 1-digit numbers", () => {
        expect(formatMina(6 as Mina)).toBe("  6")
    })

    it("returns a number with three decimal positions for split minas", () => {
        expect(formatMina(51.459235987293823 as Mina)).toBe(" 51.459")
    })

    it("when it includes decimal places, always includes three", () => {
        expect(formatMina(78.390035457238243 as Mina)).toBe(" 78.390")
    })

    it("returns a blank string for the last bound (when one of the minas is undefined)", () => {
        expect(formatMina(undefined)).toBe("       ")
    })
})
