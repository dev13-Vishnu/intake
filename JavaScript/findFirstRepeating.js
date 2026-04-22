function findFirstRepeating (arr) {
    let set = new Set();

    for(let num of arr) {
        if(set.has(num)){
            return num;
        }
        set.add(num);
    }
    return null;
}
const numbers = [2, 5, 1, 2, 3, 5];
console.log(findFirstRepeating(numbers));
