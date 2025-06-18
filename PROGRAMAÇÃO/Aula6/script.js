function ageVerify() {
    const idade = Number(document.getElementById("v1").value);
    if (idade >= 18) {
         document.getElementById("resultado").textContent = `Você é maior de idade`;
    } else {
         document.getElementById("resultado").textContent = `Você é menor de idade`;
    }
}