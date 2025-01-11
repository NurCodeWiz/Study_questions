
// Write a function to deeply clone a nested object.

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) return obj.map(deepClone);

    const clone = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

const obj = { a: 1, b: { c: 2, d: [3, 4] } };
const clonedObj = deepClone(obj);
clonedObj.b.c = 42;
console.log(obj.b.c); // 2
