
let soma = 0;
    for (let index = 0; index < 10 ; index += 1) {
        if (index % 3 === 0 || index % 5 === 0) {
            soma += index;
        }
    }   

    console.log(soma);