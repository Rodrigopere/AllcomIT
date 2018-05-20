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
        document.getElementById('validImg').style.display = 'inline';
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