type TNeat = readonly number[];

type TLong = ReadonlyArray<number>;

const list = [1,2,3,4];

const reverseList = (list: TNeat) => {
    return list.slice().sort().reverse();
}

reverseList(list);