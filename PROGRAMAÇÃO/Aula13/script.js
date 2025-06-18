const v1 = document.getElementById("btn")
const reset = document.getElementById("btn1")
var contador = 0

v1.addEventListener("click", function(){
    contador = contador + 1
    document.getElementById("resposta").textContent = `Você clicou ${contador} vezes`;
});

reset.addEventListener("click", function(){
    contador = 0
    document.getElementById("resposta").textContent = `Você clicou ${contador} vezes`;
});