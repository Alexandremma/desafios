function calculando() {
    let numero = document.getElementById("input").value;

    document.getElementById("par").innerHTML = calculaPar(numero);
    document.getElementById("impar").innerHTML = calculaImpar(numero);
    document.getElementById("maior").innerHTML = calculaMaior(numero);
    document.getElementById("dobro").innerHTML = calculaDobro(numero);
    document.getElementById("primo").innerHTML = calculaPrimo(numero);
}

// Verifica se é ou não par
function calculaPar(num) {
    if ((num % 2) == 0) {
        return ("É par");
    } else {
        return ("Não é par");
    }
}

// Verifica se é ou não ímpar
function calculaImpar(num) {
    if ((num % 2) != 0) {
        return ("É ímpar");
    } else {
        return ("Não é ímpar");
    }
}

// Verifica se é ou não maior que 10
function calculaMaior(num) {
    if (num > 10) {
        return ("É maior que 10");
    } else {
        return ("Não é maior que dez");
    }
}

// Calcula o dobro do número
function calculaDobro(num) {
    let dobro = num * 2;
    return ("O dobro de " + num + " é " + dobro);
}

// Verifica se é ou não um número primo
function calculaPrimo(num) {
    var count = 0;

    for(var i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }

    if (count == 2) {
        return ("É primo");
    } else {
        return ("Não é primo");
    }
}