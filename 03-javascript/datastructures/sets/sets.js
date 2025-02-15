// Function to extract unique elements from an array using a Set
export function uniqueElements(arr) {
    let s= new Set()
    arr.forEach(i => s.add(i))
    return s
}

// Function to perform a union operation on two sets
export function union(setA, setB) {
    let s= new Set()
    setA.forEach(i => s.add(i))
    setB.forEach(i => s.add(i))
    return s
}

// Function to perform an intersection operation on two sets
export function intersection(setA, setB) {
    let s = new Set()
    for (let i of setA){
        for (let j of setB){
            if (i==j){
                s.add(i)
            }
        }
    }
    return s
}

// Function to perform a difference operation on two sets
export function difference(setA, setB){
    let s = new Set([...setA].filter(i=> !setB.has(i)))
    return s
}

// Function to check if one set is a subset of another
export function isSubset(setA, setB) {
   if ([...setA].every(i=> setB.has(i)) || [...setB].every(i=> setA.has(i))){
    return true
   }
   else{
    return false
   }
}

// Exporting the functions for use
export default {
    uniqueElements,
    union,
    intersection,
    difference,
    isSubset,
};