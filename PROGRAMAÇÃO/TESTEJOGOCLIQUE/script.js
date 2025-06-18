
const contador = document.getElementById("texto");
const body = document.querySelector("body")
var contagem = 0;

body.addEventListener("click", function () {
    contagem++;
    contador.textContent = `${contagem}`;

    if (contagem == 10) {
        document.getElementById("resposta").textContent = `Parabéns! Você atingiu a meta!`
    }
});

document.addEventListener("keydown", function(evento) {
if (evento.key==="+") {
    contagem++
    contador.textContent = `${contagem}`;
}});

