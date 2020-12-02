import {SizeCategory, SizeCategoryAbbreviation, SizeCategoryName} from "./types"

const SIZE_CATEGORY_NAMES: Record<SizeCategory, SizeCategoryName> = {
    [SizeCategory.UNISON]: "unison" as SizeCategoryName,
    [SizeCategory.SCHISMINA]: "schismina" as SizeCategoryName,
    [SizeCategory.SCHISMA]: "schisma" as SizeCategoryName,
    [SizeCategory.KLEISMA]: "kleisma" as SizeCategoryName,
    [SizeCategory.COMMA]: "Comma" as SizeCategoryName,
    [SizeCategory.SMALL_DIESIS]: "Small-Diesis" as SizeCategoryName,
    [SizeCategory.MEDIUM_DIESIS]: "Medium-Diesis" as SizeCategoryName,
    [SizeCategory.LARGE_DIESIS]: "Large-Diesis" as SizeCategoryName,
    [SizeCategory.SMALL_SEMITONE]: "Small-Semitone" as SizeCategoryName,
    [SizeCategory.LIMMA]: "Limma" as SizeCategoryName,
    [SizeCategory.LARGE_SEMITONE]: "Large-Semitone" as SizeCategoryName,
    [SizeCategory.APOTOME]: "Apotome" as SizeCategoryName,
    [SizeCategory.SCHISMA_PLUS_APOTOME]: "schisma-plus-Apotome" as SizeCategoryName,
    [SizeCategory.KLEISMA_PLUS_APOTOME]: "kleisma-plus-Apotome" as SizeCategoryName,
    [SizeCategory.COMMA_PLUS_APOTOME]: "Comma-plus-Apotome" as SizeCategoryName,
    [SizeCategory.SMALL_DIESIS_PLUS_APOTOME]: "Small-Diesis-plus-Apotome" as SizeCategoryName,
    [SizeCategory.MEDIUM_DIESIS_PLUS_APOTOME]: "Medium-Diesis-plus-Apotome" as SizeCategoryName,
    [SizeCategory.LARGE_DIESIS_PLUS_APOTOME]: "Large-Diesis-plus-Apotome" as SizeCategoryName,
    [SizeCategory.SMALL_SEMITONE_PLUS_APOTOME]: "Small-Semitone-plus-Apotome" as SizeCategoryName,
    [SizeCategory.LIMMA_PLUS_APOTOME]: "Limma-plus-Apotome" as SizeCategoryName,
    [SizeCategory.LARGE_SEMITONE_PLUS_APOTOME]: "Large-Semitone-plus-Apotome" as SizeCategoryName,
    [SizeCategory.DOUBLE_APOTOME]: "double-Apotome" as SizeCategoryName,
}

const SIZE_CATEGORY_ABBREVIATIONS: Record<SizeCategory, SizeCategoryAbbreviation> = {
    [SizeCategory.UNISON]: "u" as SizeCategoryAbbreviation,
    [SizeCategory.SCHISMINA]: "n" as SizeCategoryAbbreviation,
    [SizeCategory.SCHISMA]: "s" as SizeCategoryAbbreviation,
    [SizeCategory.KLEISMA]: "k" as SizeCategoryAbbreviation,
    [SizeCategory.COMMA]: "C" as SizeCategoryAbbreviation,
    [SizeCategory.SMALL_DIESIS]: "S" as SizeCategoryAbbreviation,
    [SizeCategory.MEDIUM_DIESIS]: "M" as SizeCategoryAbbreviation,
    [SizeCategory.LARGE_DIESIS]: "L" as SizeCategoryAbbreviation,
    [SizeCategory.SMALL_SEMITONE]: "SS" as SizeCategoryAbbreviation,
    [SizeCategory.LIMMA]: "MS" as SizeCategoryAbbreviation,
    [SizeCategory.LARGE_SEMITONE]: "LS" as SizeCategoryAbbreviation,
    [SizeCategory.APOTOME]: "A" as SizeCategoryAbbreviation,
    [SizeCategory.SCHISMA_PLUS_APOTOME]: "s+A" as SizeCategoryAbbreviation,
    [SizeCategory.KLEISMA_PLUS_APOTOME]: "k+A" as SizeCategoryAbbreviation,
    [SizeCategory.COMMA_PLUS_APOTOME]: "C+A" as SizeCategoryAbbreviation,
    [SizeCategory.SMALL_DIESIS_PLUS_APOTOME]: "S+A" as SizeCategoryAbbreviation,
    [SizeCategory.MEDIUM_DIESIS_PLUS_APOTOME]: "M+A" as SizeCategoryAbbreviation,
    [SizeCategory.LARGE_DIESIS_PLUS_APOTOME]: "L+A" as SizeCategoryAbbreviation,
    [SizeCategory.SMALL_SEMITONE_PLUS_APOTOME]: "SS+A" as SizeCategoryAbbreviation,
    [SizeCategory.LIMMA_PLUS_APOTOME]: "MS+A" as SizeCategoryAbbreviation,
    [SizeCategory.LARGE_SEMITONE_PLUS_APOTOME]: "LS+A" as SizeCategoryAbbreviation,
    [SizeCategory.DOUBLE_APOTOME]: "A+A" as SizeCategoryAbbreviation,
}

const SIZE_CATEGORY_NAME_ALTERNATIVES: Record<SizeCategory, SizeCategoryName[]> = {
    [SizeCategory.UNISON]: [] as SizeCategoryName[],
    [SizeCategory.SCHISMINA]: ["atom", "skismina", "skhismina"] as SizeCategoryName[],
    [SizeCategory.SCHISMA]: ["skisma", "skhisma"] as SizeCategoryName[],
    [SizeCategory.KLEISMA]: ["semicomma"] as SizeCategoryName[],
    [SizeCategory.COMMA]: ["diaschisma", "diaskisma", "diaskhisma"] as SizeCategoryName[],
    [SizeCategory.SMALL_DIESIS]: ["minor-diesis", "fifth-tone"] as SizeCategoryName[],
    [SizeCategory.MEDIUM_DIESIS]: ["diesis", "quarter-tone", "enharmonic-diesis", "enharmonic"] as SizeCategoryName[],
    [SizeCategory.LARGE_DIESIS]: ["major-diesis", "third-tone"] as SizeCategoryName[],
    [SizeCategory.SMALL_SEMITONE]: ["chromatic-semitone"] as SizeCategoryName[],
    [SizeCategory.LIMMA]: ["medium-semitone"] as SizeCategoryName[],
    [SizeCategory.LARGE_SEMITONE]: ["diatonic-semitone"] as SizeCategoryName[],
    [SizeCategory.APOTOME]: [] as SizeCategoryName[],
    [SizeCategory.SCHISMA_PLUS_APOTOME]: [] as SizeCategoryName[],
    [SizeCategory.KLEISMA_PLUS_APOTOME]: [] as SizeCategoryName[],
    [SizeCategory.COMMA_PLUS_APOTOME]: [] as SizeCategoryName[],
    [SizeCategory.SMALL_DIESIS_PLUS_APOTOME]: ["neutral-second"] as SizeCategoryName[],
    [SizeCategory.MEDIUM_DIESIS_PLUS_APOTOME]: [] as SizeCategoryName[],
    [SizeCategory.LARGE_DIESIS_PLUS_APOTOME]: [] as SizeCategoryName[],
    [SizeCategory.SMALL_SEMITONE_PLUS_APOTOME]: [] as SizeCategoryName[],
    [SizeCategory.LIMMA_PLUS_APOTOME]: [] as SizeCategoryName[],
    [SizeCategory.LARGE_SEMITONE_PLUS_APOTOME]: [] as SizeCategoryName[],
    [SizeCategory.DOUBLE_APOTOME]: [] as SizeCategoryName[],
}

export {
    SIZE_CATEGORY_NAMES,
    SIZE_CATEGORY_ABBREVIATIONS,
    SIZE_CATEGORY_NAME_ALTERNATIVES,
}
