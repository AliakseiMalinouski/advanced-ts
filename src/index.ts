class Factory<T> {

    list: T[] = [];

    push(value: T) {
        this.list.push(value);
    }

    pop() {
        return this.list.pop();
    }

    find(index: T) {
        return this.list.find((_, idx) => idx === index);
    }

}

const factory = new Factory<number>();

factory.pop();
factory.push(999);
const result = factory.find(1);