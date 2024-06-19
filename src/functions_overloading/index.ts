function reverseSomething(value: string): string;
function reverseSomething(value: string[]): string[];

function reverseSomething (value: string | string[]) {
    if(typeof value === 'string') {
        return value.split('').reverse().join('');
    }
    else {
        return value.reverse();
    }
}

const reversedString = reverseSomething('string');
const reversedList = reverseSomething(['l', 'i', 's', 't']);
