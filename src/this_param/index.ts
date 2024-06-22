function setParam (this: {
    value: string;
}) {
    this.value = 'value';
}

const obj = {
    value: '',
    setParam,
}
