data = new Date()
hora = data.getHours()

function hello() {
     if (hora > 4 && hora < 12) {
         document.getElementById("resposta").textContent = `Bom dia!`;
    } 
    else if (hora >= 12 && hora < 18 ) {
        document.getElementById("resposta").textContent = `Boa tarde!`;
    }
    else {
         document.getElementById("resposta").textContent = `Boa noite!`;
    }
}