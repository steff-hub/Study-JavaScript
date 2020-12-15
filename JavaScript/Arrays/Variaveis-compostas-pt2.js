// Em vez de usar o console.log varias vezes colocando cada posição vamos usar o seguinte:

let valores = [8,10,20,5,6,35,2,4]
valores.sort

 //console.log(valores) = os valores vão aprecer sem formatação é com o []
/*
DESSA MANEIRA FUNCIONA, MAS IMAGINA SÓ A QUANTIDADE DE CODIGO QUE IRIA CONSUMIR?
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])
console.log(valores[7])

DEUS ME FREE! KKKK
*/ 

// vamos fazer assim: 

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
// Isso é chamado de percurso de exebição de vetor.










//Da para simplificar aida mais, veja só 

for (let pos in valores){//Então para cada possição dentro de num vamos .....
    console.log(valores[pos])
    //mostrar o num[pos]
}// mas isso aqui so funciona para arrays e objetos 

