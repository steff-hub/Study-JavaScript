/*var
AS VARIAVEIS COMPOSTAS ARMAZENAM VARIOS VALORES EM UMA MESAM ESTRUTUTRA! 

    let num = [5,10,12,5,9] // SEMPRE COLOQUE NOMES CLAROS EM SUAS VARIAVEIS.
    VEMOS ACIMA O MEU VETOR QUE É O ''NUM'' 
    OS ELEMENTOS QUE SÃO OS NUMEROS [5,10,12,5,9]
    E CADA UM DELES TEM UMA IDENTIFICAÇÃO OU UMA CHAVE/ INDICE.


    console.log(`nosso vetor é ${num}`)
    */
    
/*
let num = [5,10,12,5,9] 

console.log(`O vetor tem  ${num.length} posições.`)
//num.length = comprimento do vetor , length é um ATRIBUTO , portanto ele não tem () no final!

// mostrar uma posição isolada 
console.log(num[0]) // ele retorna o numero 5 , que esta na posição 0.


    */

   let num = [5,10,12,5,9]
   //é possivel colocar os elementos em ordem crescente.
   num.sort() 
    // num.push() vai add o VALOR  que esta entre parenteses na ultima posição.
   num.push(8) 
   // se desejar acrescentar um valor a posição especifica e so fazer :
   num.[3] = 6
   // o [3] se refere a posição, e o 6 é valor que a variavel recebe para acrescentar na posição 3. 

