import * as cp from "child_process"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"

describe("analyze-bound", (): void => {
    it("can receive the argument without a flag", (): void => {
        onlyRunInCi()

        cp.execSync("npm run analyze-bound 80")
    })
})
