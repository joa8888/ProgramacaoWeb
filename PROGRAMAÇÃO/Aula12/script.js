const btnUm = document.getElementById("Mostrar");
const btnDois = document.getElementById("Esconder");

btnUm.addEventListener("click", function(){
    document.getElementById("resposta").textContent = `PARABÉNS, VOCÊ ACHOU A MENSAGEM SECRETA🎇✨🎉🎊`;
});

btnDois.addEventListener("click", function(){
    document.getElementById("resposta").textContent = ``;
});