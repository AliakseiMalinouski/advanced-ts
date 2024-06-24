export type Readonly<T> = {
    readonly [K in keyof T]: T[K];
}

export const roles = {
    admin: 'admin',
    developer: 'developer',
}

export type TRole = keyof typeof roles;

export type TEmployerData = {
    salary: number;
    position: TRole;
}

export type TInfo = Record<TRole, TEmployerData>;
