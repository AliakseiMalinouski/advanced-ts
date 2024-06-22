type TPerson = {
    age: number;
    name: string;
}

type TMachine = {
    model: string;
}

let person: TPerson = {
    age: 21,
    name: 'Aliaksei',
}

let machine: TMachine = {
    model: 'model'
}

person = machine as unknown as TPerson;