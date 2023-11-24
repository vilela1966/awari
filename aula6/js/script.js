function ex1() {
    for(var i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function ex2() {
    for(var i = 10; i >= 1; i--) {
        console.log(i);
    }
}

function ex3() {
    var numero = parseInt(prompt('Informe um número'));
    for(var i = 1; i <= numero; i++) {
        console.log(i);
    }
}


function ex4() {
    for (var i = 2; i <=100; i++) {
        if(primo(i)) {
            console.log(i);
        }
    }
}

function primo(numero) {
    for (var j = 2; j < numero; j++) {
        if(numero % j === 0) {
            return false;
        }
    }
    return numero !== 1;
}

function ex5() {
    var numero = 1;
    for (numero = 1; numero <= 10; numero++) {
        for (var i = 1; i <= 10; i++) {
            var tab = numero * i;
            console.log(tab);
        }
        console.log('----');
    }
}

function ex6() {
    var numero = parseInt(prompt('Informe um número'));
    for (var i = 1; i <= 10; i++) {
        var tab = numero * i;
        console.log(tab);
    }
}

function ex7() {
    var numero = parseInt(prompt('Informe um número'));
    for (var i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
    for (var i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

function ex8() {
    var numero = 0;
    for (var i = 1; i <= 5; i++) {
        numero = numero + parseInt(prompt('Digite a idade:'));
    }
    var media = numero / 5;
    console.log(media);
}

function ex9() {
    var numero = 0;
    var maior = 0;
    for (var i = 1; i <= 10; i++) {
        numero = parseInt(prompt('Digite a idade:'));
        if (numero >= 18) {
            maior = maior + 1;
        }
    }
    console.log(maior);
}

function ex10() {
    var numero = parseInt(prompt('Informe o tamanho dos lados do Quadrado'));
    var quadrado = '';
    for (var j = 1; j <= numero; j++) {
        var quadrado = '';
        for (var i = 1; i <= numero; i++) {
            quadrado += '*';
        }
        console.log(quadrado);
        //console.log('\n');
    }
}

function ex11() {
    var numero = parseInt(prompt('Informe o tamanho dos lados do Quadrado'));
    var a = '';
    for(let i = 1; i <= numero; i++) {
        a += '*';
        console.log(a);
    }
}