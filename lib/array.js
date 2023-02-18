"use strict";
class MyArray {
    value;
    constructor() {
        this.value = new Array(0);
    }
    addItemAtBeginning = (item) => {
        const arr = new Array(this.value.length + 1);
        arr[0] = item;
        for (let i = 0; i < this.value.length; i++) {
            arr[i + 1] = this.value[i];
        }
        this.value = arr;
    };
    addItemAtEnd = (item) => {
        const arr = new Array(this.value.length + 1);
        let i = 0;
        while (i < this.value.length) {
            arr[i] = this.value[i];
            i++;
        }
        arr[i] = item;
        this.value = arr;
    };
    addItemAtPosition = (item, position) => {
        if (position < 0 || position > this.value.length) {
            throw new Error("wrong input");
        }
        else {
            const arr = new Array(this.value.length + 1);
            let i = 0;
            let j = 0;
            while (i < this.value.length) {
                if (i === position) {
                    arr[j] = item;
                    j++;
                }
                arr[j] = this.value[i];
                i++;
                j++;
            }
            this.value = arr;
        }
    };
}
const myarr = new MyArray();
myarr.addItemAtBeginning('a');
myarr.addItemAtBeginning('b');
myarr.addItemAtEnd('c');
myarr.addItemAtPosition('d', 0);
console.log(myarr.value);
myarr.addItemAtPosition('e', 1);
console.log(myarr.value);
