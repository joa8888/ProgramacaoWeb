const b1 = document.getElementById("btn1");
const b2 = document.getElementById("btn2");
const b3 = document.getElementById("btn3");


b1.addEventListener("click", function(){
    document.getElementById("resposta").textContent = `Você acertou o número secreto! :)`
})

b2.addEventListener("click", function(){
    document.getElementById("resposta").textContent = `Você errou o número secreto! :(`
})

b3.addEventListener("click", function(){
    document.getElementById("resposta").textContent = `Você errou o número secreto! :(`
})