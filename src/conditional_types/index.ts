type TNumberOrString = string | number;

type TIsString<T> = T extends string ? 'string' : 'other';

type TWithString = TIsString<string>;
type TWithOther = TIsString<number>;

const isStringGuard = (type: TNumberOrString): type is string => typeof type === 'string';
