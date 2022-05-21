
const concatArrayUnique = (arrA,arrB) => {
    return [...new Set([...arrA,...arrB])];
}

console.log(concatArrayUnique([1,2,3],[4,5,6]));
console.log(concatArrayUnique([1,2,3],[3,3,2]));




