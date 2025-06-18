let numero = 0


function diminuir5() {
    numero = numero - 5;
    atualizarDisplay();
    
    console.log(numero);
}

function diminuir() {
    numero-- ;
    atualizarDisplay();
    
    console.log(numero);
}

function aumentar() {
    numero++ ;
    atualizarDisplay();
    console.log(numero);
}

function aumentar5() {
    numero = numero + 5 ;
    atualizarDisplay();
    console.log(numero);
}

function atualizarDisplay() {
    document.getElementById("valor").textContent = numero
}

document.addEventListener("keydown", function(evento) {
if (evento.key==="+") {
    aumentar();

} else if (evento.key === "-") {
    diminuir();
    }
});

document.addEventListener("keypress", function(evento) {
if (evento.key===",") {
    aumentar5();

} else if (evento.key === ".") {
    diminuir5();
    }
});