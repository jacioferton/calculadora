import { inserir, limpar } from '../calculadora.js';

function testeSubtrair (calculo, resultado) {
    inserir(calculo)
    var valor = eval(document.getElementById('resultado').innerHTML)
    if (valor != resultado) {
        alert(calculo + " é " + resultado + ", não " + valor)
    }
    limpar()
}
/*
testeSubtrair("6-7", -1)

testeSubtrair("7-6", 1)

testeSubtrair("4-0", 4)

testeSubtrair("0-4", -4)

testeSubtrair("400-600", -200)

testeSubtrair("600-400", 200)

testeSubtrair("0+0", 0)

testeSubtrair("0-(-3)", -3)

testeSubtrair("(-3)-0", -3)

inserir("-")
var valor = document.getElementById('resultado').innerHTML
if (valor != "verifique o cálculo") {
    alert('Calculo incorreto! No comando "-=" deve aparecer "verifique o cálculo"')
}
limpar()
*/