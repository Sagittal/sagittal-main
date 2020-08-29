import "colors"
import {
    computeMonzoFromCommand,
    Filename,
    formatTableForTerminal,
    LogTarget,
    maybeClearLogFiles,
    Row,
    saveLog,
    setupToMaybeClearLogFiles,
} from "../../../general"
import { computeNotatingJiSymbolIds } from "../../../sagittal"
import { computeNotatingSymbolRow, NOTATING_SYMBOLS_HEADER_ROW } from "../io"

// TODO: this is technically notating JI symbols... but it would be pretty cool if it could return all possible
//  notating symbols and just not provide an ID if they aren't in Sagittal

setupToMaybeClearLogFiles()

const monzo = computeMonzoFromCommand()

maybeClearLogFiles("notatingSymbols" as Filename)

const notatingSymbolIds = computeNotatingJiSymbolIds(monzo)

const notatingSymbolRows: Row[] = notatingSymbolIds.map(computeNotatingSymbolRow)

notatingSymbolRows.unshift(NOTATING_SYMBOLS_HEADER_ROW)

// TODO: this like findCommas should probably have an io/table.ts which allows for either terminal or forum output

saveLog(formatTableForTerminal(notatingSymbolRows), LogTarget.ALL, "notatingSymbols" as Filename)
