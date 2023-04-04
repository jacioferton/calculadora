import { inserir, limpar, raiz} from "../calculadora.js"


function testeRaizQ (numero, resultado) {
    inserir(numero)
    raiz()
    var valor = document.getElementById('resultado').innerHTML
    if (valor != resultado) {
        alert("√" + numero + " é " + resultado + ", não " + valor)
    }
    limpar()
}
/*
testeRaizQ("9", 3)

testeRaizQ("-9", -3)

testeRaizQ("3", 1.73205080757)

testeRaizQ("-3", -1.73205080757)

raiz()
var valor = document.getElementById('resultado').innerHTML
if (valor != "verifique o cálculo") {
    alert('Calculo incorreto! No comando "√" com o display vazio deve aparecer "verifique o cálculo"')
}
limpar()
*/