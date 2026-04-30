function falttenAndUnique(arr, seen = new Set()){
    for(let item of arr) {
        if(Array.isArray(item)){
            falttenAndUnique(item, seen);
        } else {
            seen.add(item);
        }
    }
    return [...seen];
}


const arr = [1,[2,3, [4,2]], 5,[3,[6, 1]]];

console.log(falttenAndUnique(arr));

const result = [... new Set(arr.flat(Infinity))]

console.log(result);