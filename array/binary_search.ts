const tableau: Array<number> = new Array(100).map( (x, i) => i +1);
const numberToGuess: number = Math.floor(Math.random() * 100);

let numberOfTries: number = 0;

console.log('number to guess : ', numberToGuess)

function binarySearch(tableau: Array<number>, numberToGuess: number): number | null {
     let min = 0
    let max = tableau.length -1;

     while (min <= max) {
         const mid = Math.floor((min + max) / 2);
         const guess = tableau[mid];

         numberOfTries++

         if (guess === numberToGuess) {
             return mid;
         } else if (guess > numberToGuess) {
             max = mid - 1;
         } else {
             min = mid + 1;
         }
     }
     return null
}

const result: number | null = binarySearch(tableau, numberToGuess);
console.log('result : ', result)
console.log('number of tries : ', numberOfTries)