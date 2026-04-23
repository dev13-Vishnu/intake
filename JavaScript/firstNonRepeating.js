function firstNonRepeating(arr) {
    let map= new Map();

    for(let num of arr) {
        map.set(num, (map.get(num)||0) +1);
    }

    // console.log(map);

    for (const num of arr){
        // console.log(num)
        if (map.get(num) === 1) {
            return num;
        }
    }
    return null
}

const number = [4, 5, 1, 2, 0, 4, 1, 2]
console.log(firstNonRepeating(number));

function ObjFirstNonRepeating(arr) {
    const obj = {};

    // 1. Use for...of to get actual VALUES
    for (const num of arr) { 
        obj[num] = (obj[num] || 0) + 1;
    }

    // 2. Iterate over the ARRAY again to maintain original order
    for (const num of arr) {
        if (obj[num] === 1) {
            return num; // Returns the actual number in the correct order
        }
    }

    return null;
}

// const number = [4, 5, 1, 2, 0, 4, 1, 2];
console.log(ObjFirstNonRepeating(number)); // Output: 5