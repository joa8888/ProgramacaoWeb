const v1 = document.getElementById("input");
const contador = document.getElementById("contador");

v1.addEventListener("input", function() {
    contador.innerText = v1.value.length;
    
});