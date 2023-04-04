import { inserir, limpar } from '../calculadora.js';

function testeDividir (calculo, resultado) {
    inserir(calculo)
    var valor = eval(document.getElementById('resultado').innerHTML)
    if (valor != resultado) {
        alert(calculo + " é " + resultado + ", não " + valor)
    }
    limpar()
}
/*
testeDividir("2/10", 0.2)

testeDividir("10/2", 5)

testeDividir("4/0", "ERRO")

testeDividir("0/4", 0)

testeDividir("400/500", 0.8)

testeDividir("500/400", 1.25)

testeDividir("0/0", 1)

inserir("/")
var valor = document.getElementById('resultado').innerHTML
if (valor != "verifique o cálculo") {
    alert('Calculo incorreto! No comando "/=" deve aparecer "verifique o cálculo"')
}
limpar()
*/