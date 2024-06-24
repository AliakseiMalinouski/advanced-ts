export type Partial<T> = {
    [K in keyof T]?: T[K]
}

export type Required<T> = {
    [K in keyof T]-?: T[K]; 
}
