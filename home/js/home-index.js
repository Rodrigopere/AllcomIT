var fields = [
    {
        Value: ''
    },
    {
        Value: ''
    },
    {
        Value: ''
    },
    {
        Value: ''
    }
];

// $('input.date-style').on('keyup', function() {
//     console.log('keyup');
//     console.log($(this).val());
//     if ($(this).val()) {
//         $(this).next().focus();
//     }
// });

function isValid() {
    return fields.every((field) => {
        return field.Value != '';
    })
}

function tryValidate() {
    if (isValid()) {
        var validImg = document.getElementById('validImg').style.display = 'block';
        var elements = document.getElementsByClassName('date-style');
        for (var i = 0; i < elements.length; i++) {
            var element = elements.item(i);
            element.classList.add('codigo-input-valido');
        }
        var buttonElements = document.getElementsByClassName('button0');
        if (buttonElements.length > 0) {
            var button0 = buttonElements[0];
            button0.classList.add('button0-valid');
            button0.disabled = false;
        }
        var codigoTituloElements = document.getElementsByClassName('codigo-titulo');
        if (codigoTituloElements.length > 0) {
            var codigoTitulo = codigoTituloElements[0];
            codigoTitulo.classList.add('codigo-titulo-valido');
        }
    }
    else {
        document.getElementById('validImg').style.display = 'none';
        var elements = document.getElementsByClassName('date-style');
        for (var i = 0; i < elements.length; i++) {
            var element = elements.item(i);
            element.classList.remove('codigo-input-valido');
        }
        var buttonElements = document.getElementsByClassName('button0');
        if (buttonElements.length > 0) {
            var button0 = buttonElements[0];
            button0.classList.remove('button0-valid');
            button0.disabled = true;
        }
        var codigoTituloElements = document.getElementsByClassName('codigo-titulo');
        if (codigoTituloElements.length > 0) {
            var codigoTitulo = codigoTituloElements[0];
            codigoTitulo.classList.remove('codigo-titulo-valido');
        }
    }
}

function textChanged(elementName, index) {
    var fieldCode = document.getElementById(elementName).value;
    // console.log('Field ' + index + ' code: ' + fieldCode);
    fields[index].Value = fieldCode;
    // setFocusToNextInput(index);
    tryValidate();
}

function setFocusToNextInput(currentIndex) {
    
    if (currentIndex < fields.length - 1) {
        var inputs = document.getElementsByClassName('date-style');
        // for (var i = 0; i < inputs.length; i++) {
    console.log(currentIndex);        
        var nextInput = inputs.item(currentIndex + 1);
        nextInput.focus();
        // }
    }
    else {
        var button = document.getElementById('confirmCodeButton');
        button.focus();
    }
}

function getInputCode() {
    var code = '';
    fields.forEach((element) => {
        code += element.Value;
    });
    return code;
}


function confirmCode() {
    var code = getInputCode();
    /*Executar validação do código aqui*/
    console.log('Confirmando código: ' + code);
}

$(document).ready(function(){
    // console.log('document ready');
    $('.date-style').keyup(function(){
        // console.log('keyup');
        var currentInput = $(this);
        if(currentInput.val().length==currentInput.attr("maxlength")){
            // console.log('focus');
            var nextInput = currentInput.parent().next().children('.date-style')[0];
            if ($(currentInput).attr('id') == 'inputField_4') {
                var confirmCodeButton = $('#confirmCodeButton');
                // console.log(confirmCodeButton);
                confirmCodeButton.focus();
            }
            else {
                nextInput.focus();
            }
        }
    });
});