type TPoints = {
    x: number;
    y: number;
    z: number;
}

type TReadonlyPoint<T> = {
   readonly [key in keyof T]: T[key];
}

const preparedPoints: TReadonlyPoint<TPoints> = {
    x: 0,
    y: 0,
    z: 0,
}
