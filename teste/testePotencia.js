import { inserir, limpar } from '../calculadora.js';

function testePotencia (calculo, resultado) {
    inserir(calculo)
    var valor = eval(document.getElementById('resultado').innerHTML)
    if (valor != resultado) {
        alert(calculo + " é " + resultado + ", não " + valor)
    }
    limpar()
}
/*
testePotencia("5**3", 125)

testePotencia("5**-3", -125)

testePotencia("-5**3", -125)

testePotencia("-5**-3", 125)

testePotencia("5**2", 25)

testePotencia("5**-2", -25)

testePotencia("-5**2", -25)

inserir("**")
var valor = document.getElementById('resultado').innerHTML
if (valor != "verifique o cálculo") {
    alert('Calculo incorreto! No comando "**=" deve aparecer "verifique o cálculo"')
}
limpar()
*/