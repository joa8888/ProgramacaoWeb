var numberRandom = Math.floor(Math.random()* 9) + 1;
const resposta = document.getElementById("resposta");

document.getElementById("btn1").addEventListener("click", () => {
    verify(1)
    console.log(numberRandom)
});
document.getElementById("btn2").addEventListener("click", () => {
    verify(2)
});
document.getElementById("btn3").addEventListener("click", () => {
    verify(3)
});
document.getElementById("btn4").addEventListener("click", () => {
    verify(4)
});
document.getElementById("btn5").addEventListener("click", () => {
    verify(5)
});
document.getElementById("btn6").addEventListener("click", () => {
    verify(6)
});
document.getElementById("btn7").addEventListener("click", () => {
    verify(7)
});
document.getElementById("btn8").addEventListener("click", () => {
    verify(8)
    console.log(numberRandom)
});
document.getElementById("btn9").addEventListener("click", () => {
    verify(9)
});

function verify(numberSecret) {
    if (numberSecret === numberRandom) {
        resposta.textContent = "Você acertou!"
    }else {
         resposta.textContent = "Você errou!"
    }
}