
    //simulação de dados oriundos do servidor
    var robo=[
        {question:'1ª - Qual o dia do seu nascimento?',
            answer: ['02','30','14','17','21']
        },
        {question:'2ª - Quais os 4 últimos dígitos de seu número de celular?',
            answer: ['4871','1210','7040','2220','9877']
        },
        {question:'3º - Qual é o primeiro nome de sua mãe?',
            answer: ['CARLA','SABRINA','MARIA','PAULA','CAROLINA']
        }
    ]   

        //simulação de dados oriundos do servidor
        var robonegociacao=[
             {question:'Você pode pagar à vista todo o valor do seu contrato ou somente as parcelas atrasadas. Em ambas opções você tem descontos incríveis.'}
            ,{question:'Escolha a melhor opção para você:'}
            ,{question:'3º - Qual é o primeiro nome de sua mãe?'}
        ]   
        
    

    //pega primeira pergunta e exibe na tela
    function negociacao(){
        //Esvazia opções anteriores de resposta
        $("#answer_robo").empty();
        
        //pega próximo elemento da fila
        firstElement = robonegociacao.shift();

        console.log("elementos");
        console.log(firstElement);

        if (firstElement!=undefined){
            createQuestion(firstElement, function (callback){
                if (callback){
                    alert("terminei de criar minha pergunta")
                    alert(callback);

                }
            });
            

            // if(robonegociacao.length>0){

            //     efeitoCarregamento();

            // }
        }
    }



    //pega primeira pergunta e exibe na tela
    function pushQuestion(){
        //Esvazia opções anteriores de resposta
        $("#answer_robo").empty();
        
        //pega próximo elemento da fila
        firstElement = robo.shift();

        console.log("elementos");
        console.log(firstElement);

        if (firstElement!=undefined){
            createQuestion(firstElement);                

            //Para cada opção de resposta
            firstElement.answer.forEach(function (element) {
                //Cria elemento de resposta
                createAnswer(element);              
            });
        }else{
            alert("não existem mais perguntas");
        }
    }


    //Cria elemento de pergunta ao usuário
    function createQuestion(firstElement, callback){
        var pai = document.getElementById("pagebody");
        var filho = document.createElement("div");
        $(filho).addClass('question row');
        pai.appendChild(filho); 

        var neto1 = document.createElement("div");
        $(neto1).addClass('nd');
        filho.appendChild(neto1); 
            var img = document.createElement("img");
            img.setAttribute('src', 'images/ND.png');
            neto1.appendChild(img);
       
        var neto2 = document.createElement("div");
        $(neto2).addClass('boxQuestion');
        
        //função com efeito de máquina de escrever
        // neto2.innerHTML=firstElement.question;
        typingEffect(firstElement.question, neto2, function (callback){
            if(callback){
                efeitoCarregamento(function (callback){
                    return callback('OI true');
                });
            }
        });
        filho.appendChild(neto2);        
    }


    //Cria resposta selecionada pelo Usuário
    function insertAnswer (value){
        var pai = document.getElementById("pagebody");
        var filho = document.createElement("div");
        $(filho).addClass('answer row');
        pai.appendChild(filho); 

        var neto1 = document.createElement("div");
        $(neto1).addClass('m');
        filho.appendChild(neto1); 
            var img = document.createElement("img");
            img.setAttribute('src', 'images/m.png');
            neto1.appendChild(img);
       
        var neto2 = document.createElement("div");
        $(neto2).addClass('boxAnswer');
        
        neto2.innerHTML=value;
        filho.appendChild(neto2);
        efeitoCarregamento(function (callback){
            alert("aqui1");
            alert(callback);
        });
    }


    //Cria opções de elementos de resposta (usuário escolhe um)
    function createAnswer(element){
        var pai = document.getElementById("answer_robo");
        var filho = document.createElement("li");
        filho.setAttribute('onclick', 'insertAnswer(this.value)');
        $(filho).addClass('option');
        filho.value=element;
        filho.innerHTML=element;
        pai.appendChild(filho); 
    }

//função que gera o efeito de pontilhado
function efeitoCarregamento(callback){
    var pai = document.getElementById("pagebody");
        var filho = document.createElement("div");
        $(filho).addClass('efeito question row');
        pai.appendChild(filho);
        filho.innerHTML=".";
        
        var repeticao=1;
        var cores=['rgb(34, 144, 216)', 'rgb(90, 172, 226)', 'rgb(133, 199, 235)']

       var efeito = setInterval(function(){
            cor = cores.shift();

            if(repeticao<3){
                filho.innerHTML+="<div style = 'color:"+cor+"; display: inline-block'>.</div>";
            }
            repeticao++;

            if(repeticao>=4){
                $(".efeito").remove();
                // pushQuestion(); //chama próxima pergunta
                clearInterval(efeito); //para chamada de execução da pergunta
                return callback('Ai sim');
            }
        }, 600);
}

//Função efeito digitação do texto
function typingEffect (str, el, callback) {
    
    var char = str.split('').reverse();
    var typer = setInterval(function() {
      if (!char.length){
        clearInterval(typer);
        return callback(true);
      }
      var next = char.pop();
      el.innerHTML += next;
    }, 30);
  }
