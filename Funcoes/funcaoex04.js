//fatorando

function fatorial(n){
    let fac = 1
    for(let c =n; c > 1; c--){
        fac *= c
    }
    return fac

}

console.log(fatorial(10))