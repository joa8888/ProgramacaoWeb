const box = document.getElementById("caixa")

box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "blue";
});
box.addEventListener("mouseout", function(){
    box.style.backgroundColor = "green";
});