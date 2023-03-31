function inserir (num) {
    document.getElementById('resultado').innerHTML += num;
    limparSpan()
 }
function limpar () {
    document.getElementById('resultado').innerHTML = '';
}
function apagar () {
    var resultado = document.getElementById('resultado').innerHTML;
    resultado = document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}
function calcular () {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    imPar(resultado)
    nPrimo(resultado)
}
function raiz () {
    var numero = document.getElementById('resultado').innerHTML;
    if (numero) {
        document.getElementById('resultado').innerHTML = Math.sqrt(numero,2)
    }
    imPar(numero)
}
function fatorial() {
    var numero = document.getElementById('resultado').innerHTML;
    if (numero < 0) 
    document.getElementById('resultado').innerHTML = '-1';
    else if (numero == 0) 
    document.getElementById('resultado').innerHTML = '1';
    else {
        var fat = numero
        for (var i = 1; i < numero; i++){
            fat *= i;
        }
        if (fat) {
            document.getElementById('resultado').innerHTML = fat;
        }
    }
}
function imPar(num) {
    if (num % 2 === 0) {
        par.style.color = "#000000"
        impar.style.color = "rgba(0, 0, 0, 0.3)"
    } else {
        impar.style.color = "#000000"
        par.style.color = "rgba(0, 0, 0, 0.3)"
    }
}
function nPrimo(numero) {
    let pri = true;
  for(let i = 2; i < numero; i++) {
    if(numero % i === 0) {
      pri = false;
      break;
    }
  }
  
  if(pri) {
    primo.style.color = '#000000'
  } else {
    primo.style.color = 'rgba(0, 0, 0, 0.3)'
  }
}
function limparSpan() {
    impar.style.color = 'rgba(0, 0, 0, 0.3)'
    par.style.color = 'rgba(0, 0, 0, 0.3)'
    primo.style.color = 'rgba(0, 0, 0, 0.3)'
}