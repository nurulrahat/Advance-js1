const arr1 = [1, 3, 5, 63];
const newArr1 = arr1.map(function (arrElement, arraIndex, arrayFull) {
    console.log(arrElement, arraIndex, arrayFull);
})

//most shortcut 
const mostShortCut1 = arr1.map((elements) => elements * 10);
console.log(mostShortCut1);
const mostShortCut = arr1.map((elements, indexes) => elements * indexes);
console.log(mostShortCut);

//find 
const findElement=arr1.find(elements=>elements<5);
console.log(findElement);