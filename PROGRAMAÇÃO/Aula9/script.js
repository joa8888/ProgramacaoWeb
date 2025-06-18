const personagem = {
    nome: "", 
    classe: "", 
    nivel: 0, 
    vida: ""
};



function veja() {

personagem.nome = document.getElementById("v1").value
personagem.classe = document.getElementById("v2").value
personagem.nivel = document.getElementById("v3").value
personagem.vida = document.getElementById("v4").value

document.getElementById("resposta").textContent = `O ${personagem.nome } é um ${personagem.classe } de level ${personagem.nivel } e com vida de ${personagem.vida} hp`;
}