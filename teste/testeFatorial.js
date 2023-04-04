import { inserir, limpar, fatorial } from "../calculadora";

function testeFatorial (numero, resultado) {
    inserir(numero)
    fatorial()
    var valor = document.getElementById('resultado').innerHTML
    if (valor != resultado) {
        alert(numero + "! é " + resultado + ", não" + valor)
    }
    limpar()
}
/*
testeFatorial("-5", "ERRO")

testeFatorial("0", 1)

testeFatorial("5", 120)

fatorial()
var valor = document.getElementById('resultado').innerHTML
if (valor != "verifique o cálculo") {
    alert('Calculo incorreto! No comando "!n" com o display vazio deve aparecer "verifique o cálculo"')
}
limpar()
*/