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

function isValid() {
    return fields.every((field) => {
        return field.Value != '';
    })
}

function tryValidate() {
    if (isValid()) {
        var validImg = document.getElementById('validImg');
        validImg.style.display = 'block'; //'inline';
        // validImg.style.cssFloat = 'left';
        var elements = document.getElementsByClassName('date-style');
        for (var i=0; i < elements.length; i++) {
            var element = elements.item(i);
            element.classList.add('codigo-input-valido');
        }
        var buttonElements = document.getElementsByClassName('button0');
        if (buttonElements.length > 0) {
            var button0 = buttonElements[0];
            button0.classList.add('button0-valid');
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
        for (var i=0; i < elements.length; i++) {
            var element = elements.item(i);
            element.classList.remove('codigo-input-valido');
        }
        var buttonElements = document.getElementsByClassName('button0');
        if (buttonElements.length > 0) {
            var button0 = buttonElements[0];
            button0.classList.remove('button0-valid');
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
    tryValidate();
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
}