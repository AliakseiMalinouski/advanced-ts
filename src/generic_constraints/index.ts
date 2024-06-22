type TRequiredFields = {
    data: string;
    salary: string;
}

type TResult = { info: string };

function addFullInfo<T extends TRequiredFields>(obj: T): T & TResult {
    return {
        ...obj,
        info: `${obj.data}${obj.salary}`
    };
}

const info = addFullInfo({
    email: 'aaa',
    data: 'aa',
    salary: 'aa'
});
