function Soma() {
    const n1 = Number(document.getElementById("v1").value);
    // console.log(document.getElementById("v1").value) 

    const n2 = Number(document.getElementById("v2").value);  
     //console.log(document.getElementById("v2").value) 

    const resultado = n1 + n2;

    console.log(resultado);

    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function Subtracao() {
    const n1 = Number(document.getElementById("v1").value);
    // onsole.log(document.getElementById("v1").value) 

    const n2 = Number(document.getElementById("v2").value);
    // console.log(document.getElementById("v2").value) 

    const resultado = n1 - n2;

    console.log(resultado);

    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function Multiplicacao() {
    const n1 = Number(document.getElementById("v1").value);
    // console.log(document.getElementById("v1").value)

    const n2 = Number(document.getElementById("v2").value);
    // console.log(document.getElementById("v2").value)

    const resultado = n1 * n2;

    console.log(resultado);

    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function Divisao() {
    const n1 = Number(document.getElementById("v1").value);
    // console.log(document.getElementById("v1").value)

    const n2 = Number(document.getElementById("v2").value);
    // console.log(document.getElementById("v2").value)
    
    const resultado = n1 / n2;

    console.log(resultado);

    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}