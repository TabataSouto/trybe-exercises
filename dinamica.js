
function comp(array1, array2) {
    array1.sort((a,b)=> a - b);
    array2.sort((a,b)=> a - b);
    let resultArray = [];
    //console.log(array1);
    for (let index = 0; index < array1.length; index += 1) {
//se os dois arrays têm os "mesmos" elementos, com as mesmas multiplicidades
        let multpArrays = array1[index] * array1[index];
        resultArray.push(multpArrays);
    }
    if (JSON.stringify(resultArray) === JSON.stringify(array2)){
        return true;
    }
    return false;
}


console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]));