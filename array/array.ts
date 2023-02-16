class MyArray {
    public value: Array<string>;
    constructor() {
        this.value = new Array(0);
    }

    addItemAtBeginning = (item: string) => {
        const arr: Array<string> = new Array(this.value.length + 1);
        arr[0] = item;
        for (let i = 0; i < this.value.length; i++) {
            arr[i + 1] = this.value[i];
        }
        this.value = arr;
    }
}

const myarr: MyArray = new MyArray();
myarr.addItemAtBeginning('a');

console.log(myarr.value)