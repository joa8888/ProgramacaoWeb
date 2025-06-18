const btn = document.getElementById("btn");
const resposta = document.getElementById("msg");


btn.addEventListener("click", function() {

    if (resposta.style.visibility ==  "hidden") {
        resposta.style.visibility = "visible"
    }else {
        resposta.style.visibility = "hidden"
    }
});

