var numberRandom = Math.floor(Math.random()* 10) + 1;
const numberSelect = document.getElementById("number");
const resposta = document.getElementById("resposta");

document.getElementById("btn").addEventListener("click", () => {
    verify(numberSelect)
});

function verify(numberSelect) { 
    var numero = parseInt(numberSelect.value)
    if (numero === numberRandom) {
        resposta.textContent = "Você acertou!"
    }else {
         resposta.textContent = `Não é ${numero}`
    }
}