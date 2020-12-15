/*var idade = 12

if (idade < 18) {
    console.log('Menor de idade')
} else {
    console.log('Maior de idade')
}

*/




/*var idade = 65

console.log(`você tem ${idade} anos.`)

if (idade < 16) {
    console.log('Não vota ')
} else if (idade < 18)/*como esta implicito nem seria necessario declarar a idade de maior de 18, esta seria subentendida*/ {

    /*  console.log('voto opcional')
  }else {
  
      console.log('voto obrigatorio')
  }
  */



    /*var  agora = new Date()
    var hora = agora.getUTCHours()
    console.log(`Agora são exatamente ${hora} hora.`)
    if (hora < 12){
        console.log('Bom dia!')
    
    }else if( hora <= 18){
        console.log('Boa tarde!')
    }else{
        console.log('Boa Noite!')
    }
    */









    /*
    0-  Domingo
    1- segunda 
    2- terça 
    3- quarta 
    4- quinta 
    5- sexta 
    6- sabado 
     */

    var agora = new Date()
    var dia = agora.getDay()
    console.log(dia)

    switch (dia) {
        case 0:
            console.log('Domingo')
            break

        case 1:
            console.log('Segunda-Feira')
            break
        case 2:
            console.log('Terça-Feira')
            break
        case 3:
            console.log('Quarta- Feira ')
            break
        case 4:
            console.log('Quinta-Feira')
            break
        case 5:
            console.log('Sexta-Feira')
            break
        case 6:
            console.log('Sabado')
            break
            
            default:
                console.log('[ERRO] Dia invalido')
                break

    }
