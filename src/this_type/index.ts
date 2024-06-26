type TObj = ThisType<{
    value: number;
}>

const someObj: TObj = {
    value: 0,
    inc () {
        this.value = this.value++;
    }
}
 