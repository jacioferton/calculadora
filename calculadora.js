function inserir (num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
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
 }
 function raiz () {
     var numero = document.getElementById('resultado').innerHTML;
     if (numero) {
         document.getElementById('resultado').innerHTML = Math.sqrt(numero,2)
     }
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