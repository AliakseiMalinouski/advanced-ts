type TPointCreator = new (x: number, y: number) => { x:number, y: number }

// type TPointCreator = { new (x: number, y: number) { x:number, y: number } }

const PointCreator: TPointCreator = class {
    constructor (public x: number, public y: number) {

    }
}

type TSome = {
    (list: number[]): number[]
}

const some: TSome = (list: number[]) => {
    return list
}