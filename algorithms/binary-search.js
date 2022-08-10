/** Алгоритм: Бинарный поиск**/

const ARRAY = []
for (let i = 1; i <= 1000; i++) {
    ARRAY.push(i);
}

const value = 862;

function binarySearch(array, value) {
    let count = 0;
    let min = array[0];
    let max = array.at(-1);
    while (min <= max) {
        const middle = Math.floor((min + max) / 2);
        let result = ARRAY[middle]
        if (result === value) {
            count++
            return {res: middle, count}
        }
        if (result < value) {
            count++
            min = middle - 1
        }
        if (result > value) {
            count++
            max = middle + 1
        }
    }
    return 'Not found!'
}


const result = binarySearch(ARRAY, value);

const {res, count} = result
console.log(res, count);