import { Comma, Id, Name } from "../general"

type SymbolLongAscii = string & { _SymbolLongAsciiBrand: "SymbolLongAscii" }
type SymbolUnicode = string & { _SymbolUnicodeBrand: "SymbolUnicode" }
type SymbolSmiley = string & { _SymbolSmileyBrand: "SymbolSmiley" }

interface SizeCategoryOptions {
    abbreviated?: boolean,
}

interface SizeCategory {
    name: Name<SizeCategory>,
    abbreviation: string,
}

interface SagittalComma extends Comma {
    id: Id<SagittalComma>,
}

enum SymbolSet {
    SPARTAN = "spartan",
    ATHENIAN = "athenian",
    PROMETHEAN = "promethean",
    HERCULEAN = "herculean",
    OLYMPIAN = "olympian",
    MAGRATHEAN = "magrathean",
}

export {
    SymbolLongAscii,
    SymbolUnicode,
    SymbolSmiley,
    SizeCategoryOptions,
    SagittalComma,
    SymbolSet,
    SizeCategory,
}
