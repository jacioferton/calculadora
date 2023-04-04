import { inserir, limpar } from '../calculadora.js';

function testeSoma (calculo, resultado) {
    inserir(calculo)
    var valor = eval(document.getElementById('resultado').innerHTML)
    if (valor != resultado) {
        alert(calculo + " é " + resultado + ", não " + valor)
    }
    limpar()
}
/**
testeSoma("6+7", 13)

testeSoma("4+0", 4)

testeSoma("400+600", 1000)

testeSoma("0+0", 0)

testeSoma("0+(-3)", -3)

inserir("+")
var valor = document.getElementById('resultado').innerHTML
if (valor != "verifique o cálculo") {
    alert('Calculo incorreto! No comando "+=" deve aparecer "verifique o cálculo"')
}
limpar()
 */