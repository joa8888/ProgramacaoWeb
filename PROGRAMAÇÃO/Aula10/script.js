const personagem = {
    nome: "", 
    classe: "", 
    nivel: 0, 
    imagem: ""
};



function veja() {

personagem.nome = document.getElementById("v1").value
personagem.classe = document.getElementById("v2").value
personagem.nivel = document.getElementById("v3").value
personagem.imagem = document.getElementById("v4").value



document.getElementById("resposta").textContent =  `${personagem.nome }
                                                    ${personagem.classe }
                                                    ${personagem.nivel }`
}