/** Алгоритм: Бинарный поиск**/

const ARRAY= []
for (let i = 1; i <= 1000; i++) {
    ARRAY.push(i);
}

const value = 863;

function binarySearch(array, value) {
    let min = array[0];
    let max = array[array.length - 1];
     while (min <= max) {
        const middle = (min + max) / 2;
        let result = ARRAY[middle]
         if (result === value) {
             result = value
         }
         if (result < value) {
             min = middle + 1
         }
         if (result > value) {
             max = middle - 1
         }
     }
}

binarySearch(ARRAY, value)