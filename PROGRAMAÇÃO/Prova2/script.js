const b1 = document.getElementById("b1");
const contador = document.getElementById("texto");
var contagem = 0;

b1.addEventListener("click", function () {
    contagem++;
    contador.textContent = `${contagem}`;

    if (contagem == 10) {
        resposta.textContent = `Parabéns! Você atingiu a meta!`
    }
});





