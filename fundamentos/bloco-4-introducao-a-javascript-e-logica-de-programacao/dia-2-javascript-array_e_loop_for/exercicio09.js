let meuArray = [];


for (let index = 1; index <= 25; index += 1) {
    meuArray.push(index);
}

let divisaoMeuArray = []

for (i = 0; i < meuArray.length; i += 1) {
    divisaoMeuArray.push(meuArray[i] * 2);
    
}

console.log(divisaoMeuArray);