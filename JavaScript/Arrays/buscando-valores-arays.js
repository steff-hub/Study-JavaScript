/* 
    num.indexOf (7)
     O VALOR VAI DENTRO DO PARENTESES E NÃO A CHAVE DO
     se não houve ocorrencia do valor desejado ele retornara como -1 = não há ocorrencia 
     */

let num = [8, 10, 20, 5, 6, 35, 2, 4]
num.sort
num.push(1)
console.log(num)
console.log(`O vetor tem  ${num.length} posições.`)


let pos = num.indexOf(35)
console.log(`A posição ${pos} tem o valor ${num[pos]}`)
console.log(`o Valor 35 esta na posição ${pos}`)// aparece na posição 5 devido ao sort la em cima.





// Quando o valor não existe , rertorna o valor -1
let num = [8, 10, 20, 5, 6, 35, 2, 4]
let pos = num.indexOf(12)
console.log(`o Valor 35 esta na posição ${pos}`)
    //:3
 // pode acrescentar ali entao um if ( pos == -1){ console.log(O valor não foi encontrado!)} else {console.log(`o Valor esta na posição ${pos}`) }