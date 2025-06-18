function numberVerify() {
    const n1 = Number(document.getElementById("v1").value);
    if (n1 % 2 != 1) {
         document.getElementById("resultado").textContent = `${n1} é par!`;
    } 
    else {
        document.getElementById("resultado").textContent = `${n1} é impar!`;
    }
}