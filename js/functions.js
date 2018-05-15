
var robo=[
    {question:'1ª - Qual o <strong>dia do seu nascimento</strong>?',
        answer: ['02','30','14','17','21']
    },
    {question:'2ª - Quais os <strong>4 últimos dígitos de seu número de celular?</strong>',
        answer: ['4871','1210','7040','2220','9877']
    },
    {question:'3º - Qual é o <strong>primeiro nome de sua mãe</strong>?',
        answer: ['CARLA','SABRINA','MARIA','PAULA','CAROLINA']
    }
]

//pega primeira pergunta e exibe na tela
function pushQuestion(){
            $("#answer_robo").empty();
            firstElement = robo.shift();   
            if (firstElement!=undefined){
                var pai = document.getElementById("pagebody");
                var filho = document.createElement("div");
                $(filho).addClass('question row');
                filho.innerHTML=firstElement.question;
                pai.appendChild(filho);      
        
                //Criando as opções de resposta
                firstElement.answer.forEach(function (element) {
                    var pai = document.getElementById("answer_robo");
                    var filho = document.createElement("li");
                    filho.setAttribute('onclick', 'insertAnswer(this.value)');
                    $(filho).addClass('option');
                    filho.value=element;
                    filho.innerHTML=element;
                    pai.appendChild(filho);                
                });
            }else{
                alert("não existem mais perguntas");
            }
}

//Cria resposta selecionada pelo Usuário
function insertAnswer (value){
    var pai = document.getElementById("pagebody");
    var filho = document.createElement("div");
    $(filho).addClass('answer row');
    filho.innerHTML=value;
    pai.appendChild(filho);
    pushQuestion();
}

