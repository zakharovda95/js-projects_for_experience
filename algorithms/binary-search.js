/** Алгоритм: Бинарный поиск**/

const ARRAY = []
for (let i = 1; i <= 1000; i++) {
    ARRAY.push(i);
}

const target = 863;

function binarySearch(array, value) {
    let count = 0;
    let min = 0;
    let max = array.length;
    let mid;
    const sortedArr = array.sort()
    while (min <= max) {
        mid = Math.round((min + max) / 2);
        let result = sortedArr[mid]
        if (result === value) {
            count++
            return {val: result, index: mid, count}
        }
        if (result < value) {
            count++
            min = mid - 1
        }
        if (result > value) {
            count++
            max = mid + 1
        }
    }
    return 'Not found!'
}


const result = binarySearch(ARRAY, target);

const {val, index, count} = result
console.log(val, index, count);