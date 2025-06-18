function Ligada() {
    document.getElementById("lampOff").src = "imagens/lampOn.png";
    document.querySelector("body").style.backgroundColor = "white"
    document.querySelector("h1").style.color = "black"
}

function Desligada() {
    document.getElementById("lampOff").src = "imagens/lampOff.png";
       document.querySelector("body").style.backgroundColor = "black"
       document.querySelector("h1").style.color = "white"
}

function playAudio() {
      var audio = document.getElementById("audio");
    audio.play();
  }