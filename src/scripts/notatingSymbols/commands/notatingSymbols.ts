import { computeMonzoFromCommand, computeTerminalTable, formatMonzo, formatNumber, formatRatio, Id, IO } from "../../../general"
import { computeNotatingJiSymbolIds, getJiSymbol, getSagittalComma, JiSymbol } from "../../../notations"
import { computeNotatingSymbolDataRow, NOTATING_SYMBOLS_HEADER_ROW } from "../io"

// TODO: it might be nice to share the logic from formatSymbolAscii
//  for centering symbols on shafts, ratios on slash, and monzos on terms
//  into the computeTerminalTable method

// TODO: this is technically notating JI symbols... but it would be pretty cool if it could return all possible
//  notating symbols and just not provide an ID if they aren't in Sagittal

const monzo = computeMonzoFromCommand()

const notatingSymbolIds = computeNotatingJiSymbolIds(monzo)

const notatingSymbolTableData: IO[] = notatingSymbolIds.map(computeNotatingSymbolDataRow)

notatingSymbolTableData.unshift(NOTATING_SYMBOLS_HEADER_ROW)

console.log(computeTerminalTable(notatingSymbolTableData).join("\n"))
