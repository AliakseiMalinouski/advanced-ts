type Square = {
    size: number;
}

type Rectangle = {
    width: number;
    height: number;
}

type Shape = Square | Rectangle;

const isSquare = (shape: Shape): shape is Square => {
    return 'size' in shape;
}

const isRectangle = (shape: Shape): shape is Rectangle => {
    return 'width' in shape && 'height' in shape;
}

const getShapeArea = (shape: Shape) => {
    const hasSquare = isSquare(shape);
    const hasRectangle = isRectangle(shape);
    if(hasSquare) {
        return shape.size * shape.size;
    }

    if(hasRectangle) {
        return shape.width * shape.height;
    }
}