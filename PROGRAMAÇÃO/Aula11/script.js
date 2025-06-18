const btnRed = document.getElementById("buttonRed");
const btnBlue = document.getElementById("buttonBlue");
const btnGreen = document.getElementById("buttonGreen");

btnRed.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
});

btnBlue.addEventListener("click", function() {
     document.body.style.backgroundColor = "blue";
});

btnGreen.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
});
