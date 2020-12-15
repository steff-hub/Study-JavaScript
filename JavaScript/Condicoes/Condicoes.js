// comandos sequenciais

/*var vel  = 65.5
console.log(`A velocidade do carro e ${vel} km por hora `)


console.log(`voce ultrapassou a velocidade permitida. MULTADO!`)

console.log('dirija sempre usando cinto de segurança!')*/

                // comandos com desvio condicional

                    // condição simples

/*var vel = 70.0
    console.log(`A velocidade do carro e ${vel} km por hora `)

if (vel > 80){
    console.log('Você ultrapassou a veocidade permitida. Multado!')
  
} 

    console.log('dirija sempre usando cinto de segurança!')*/

                  // condição composta
       /* var pais = 'França'

        console.log(`Nascido em ${pais}`)

        if (pais == 'Brasil'){
            console.log( 'Você é Brasileiro')
        }else{
            console.log( 'Você é Estrangeiro')
        }
        */




       function calcular() {
        var velo =   window.document.getElementById('vel')
        var res = window.document.getElementById('res')
        var velocity = Number.parseInt(velo.value)

       res.innerHTML =`Velocidade ${vel} km`

            if(vel>60){
                res.innerHTML += `<p> Voce esta multado </p>`

            }




       res.innerHTML += `<p>Dirija sempre com cinto de segurança</P>`
     

    }



    function verificar(){
        var nas = window.document.getElementById('pais')
        var verifi = window.document.getElementById('nas')

        if(nas == "Brasil"){
            document.write ('Voce é Brsileiro')

        }else{
            document.write( 'Voce é estrangeiro')

        }
    
    }