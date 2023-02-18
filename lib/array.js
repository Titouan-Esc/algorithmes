"use strict";
class MyArray {
    value;
    constructor() {
        this.value = new Array(0);
    }
    /* INSERT */
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
            for (let i = 0; i < this.value.length + 1; i++) {
                if (i === position) {
                    arr[i] = item;
                }
                else if (i < position) {
                    arr[i] = this.value[i];
                }
                else {
                    arr[i] = this.value[i - 1];
                }
            }
            this.value = arr;
        }
    };
    /* REMOVE */
    removeItemAtBeginning = () => {
        if (this.value.length === 0) {
            return;
        }
        else {
            const arr = new Array(this.value.length - 1);
            for (let i = 1; i < this.value.length; i++) {
                arr[i - 1] = this.value[i];
            }
            this.value = arr;
        }
    };
    removeItemAtEnd = () => {
        if (this.value.length === 0) {
            return;
        }
        else {
            const arr = new Array(this.value.length - 1);
            for (let i = 0; i < this.value.length - 1; i++) {
                arr[i] = this.value[i];
            }
            this.value = arr;
        }
    };
    removeItem = (position) => {
        if (!this.value[position]) {
            return;
        }
        else {
            const arr = new Array(this.value.length - 1);
            for (let i = 0; i < this.value.length; i++) {
                if (i < position) {
                    arr[i] = this.value[i];
                }
                else if (i > position) {
                    arr[i - 1] = this.value[i];
                }
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
myarr.removeItemAtBeginning();
console.log(myarr.value);
myarr.removeItemAtEnd();
console.log(myarr.value);
myarr.removeItem(1);
console.log(myarr.value);
