type TUppercaseUnion<Union extends string> = Uppercase<Union>;
type TLowercaseUnion<Union extends string> = Lowercase<Union>;

type TSizeType = TUppercaseUnion<'medium'>;
type TSearchString = TLowercaseUnion<'VALUE'>;

type TCap = Capitalize<'fe fu fa fi'>;

type TUNCap = Uncapitalize<'FE FU FI FA'>;
