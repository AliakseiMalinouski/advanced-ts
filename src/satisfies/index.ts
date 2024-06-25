type TColor = {
    name: 'purple' | [r: number, g: number, b: number];
    gradient: null;
}

const purple = {
    name: 'purple',
    gradient: null,
} satisfies TColor;