import { inserir, limpar } from '../calculadora.js';

function testeMultiplicar (calculo, resultado) {
    inserir(calculo)
    var valor = eval(document.getElementById('resultado').innerHTML)
    if (valor != resultado) {
        alert(calculo + " é " + resultado + ", não " + valor)
    }
    limpar()
}
/*
testeMultiplicar("6*7", 42)

testeMultiplicar("4*0", 0)

testeMultiplicar("400*600", 240000)

testeMultiplicar("0*0", 0)

testeMultiplicar("1*(-3)", -3)

inserir("*")
var valor = document.getElementById('resultado').innerHTML
if (valor != "verifique o cálculo") {
    alert('Calculo incorreto! No comando "*=" deve aparecer "verifique o cálculo"')
}
limpar()
*/