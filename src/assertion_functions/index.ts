const getData = () => {
    const data = {};
    return data || null;
}

function hasData (data: unknown, message: string): asserts data {
    if(!data) throw new Error(message);
}


const someData = getData();

hasData(someData, 'Data is not defined');

const checkedData = someData;
