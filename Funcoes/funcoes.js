            /* *Funções*

            Ações executadas assim que chamadas ou em decorrencia de algum evento.

                                chamada =
             
             
             function ação (parametro){
                 bloco                      
                 retorno resultado 
             }
             Essa função precisa de uma chamada

             ação(5) a chamada esta qui em baixo.
             

             // passmos um valor que vai executar a ação(paramentro la de cima )                             
            
             depois ele retorna o resultado 


                                parâmetro =
              Elas podem receber paramentros e retornar um resultado.        

              existe dois tipos =  parametro real 
                                   parametro formal
                                 
                               
            
            */


                                    //Exemplo


            function parimp(n/*parametro*/ ){
                if(n%2==0){/*ação*/
                    return 'par'
                }else{
                    return 'impar'/*retorno*/
                }
            }   // se eu deixar meu codigo assim ele não vai ser executado, por que eu necessito de uma chamada.
            
            let res = parimp/*chamada*/(15)// 15 será meu parametro.
