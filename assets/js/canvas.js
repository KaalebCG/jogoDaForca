function desenhaCanvas() {
  const tela = document.getElementById("forca");
  const pincel = tela.getContext("2d");

  pincel.lineWidth = 8;
  pincel.lineCap = "round";
  pincel.lineJoin = "round";
  pincel.fillStyle = "#F3F5FC";
  pincel.strokeStyle = "#0A3871";

  pincel.fillRect(0, 0, 1200, 800);
  pincel.beginPath();
  pincel.moveTo(900, 500);
  pincel.lineTo(650, 500);
  pincel.stroke();
  pincel.closePath();
}

function desenhaLinha() {
  const tela = document.getElementById("forca");
  const pincel = tela.getContext("2d");
  pincel.lineWidth = 6;
  pincel.lineCap = "round";
  pincel.lineJoin = "round";
  pincel.fillStyle = "#F3F5FC";
  pincel.strokeStyle = "#0A3871";

  let largura = 600 / palavraSecreta.length;
  for (let i = 0; i < palavraSecreta.length; i++) {
    pincel.moveTo(500 + largura * i, 640);
    pincel.lineTo(550 + largura * i, 640);
  }
  pincel.stroke();
  pincel.closePath();
}

function escreverLetraCorreta(index) {
  const tela = document.getElementById("forca");
  const pincel = tela.getContext("2d");
  pincel.font = "bold 52px Inter";
  pincel.lineCap = "round";
  pincel.fillStyle = "#0A3871";
  pincel.lineWidth = 6;
  let largura = 600 / palavraSecreta.length;
  pincel.fillText(palavraSecreta[index], 505 + largura * index, 620);
}

function escreverLetraIncorreta(letra, erros) {
  const tela = document.getElementById("forca");
  const pincel = tela.getContext("2d");
  pincel.font = "bold 40px Inter";
  pincel.lineCap = "round";
  pincel.fillStyle = "#0A3871";
  pincel.lineWidth = 6;
  pincel.fillText(letra, 520 + 40 * erros, 720);
}

function desenhaForca() {
  const tela = document.getElementById("forca");
  const pincel = tela.getContext("2d");
  pincel.lineWidth = 6;
  pincel.lineCap = "round";
  pincel.lineJoin = "round";
  pincel.fillStyle = "#F3F5FC";
  pincel.strokeStyle = "#0A3871";

  if (erros == 1) {
    pincel.moveTo(775, 500);
    pincel.lineTo(775, 300);
    pincel.stroke();
    pincel.closePath();
  }
  if (erros == 2) {
    pincel.moveTo(775, 300);
    pincel.lineTo(875, 300);
    pincel.stroke();
    pincel.closePath();
  }
  if (erros == 3) {
    pincel.moveTo(875, 300);
    pincel.lineTo(875, 320);
    pincel.stroke();
    pincel.closePath();
  }
  if (erros == 4) {
    pincel.arc(875, 330, 15, 0, 2 * 3.14);
    pincel.stroke();
    pincel.closePath();
  }
  if (erros == 5) {
    pincel.moveTo(875, 345);
    pincel.lineTo(875, 400);
    pincel.stroke();
    pincel.closePath();
  }
  if (erros == 6) {
    pincel.moveTo(875, 400);
    pincel.lineTo(850, 430);
    pincel.stroke();
    pincel.closePath();
  }
  if (erros == 7) {
    pincel.moveTo(875, 400);
    pincel.lineTo(900, 430);
    pincel.stroke();
    pincel.closePath();
  }
  if (erros == 8) {
    pincel.moveTo(875, 355);
    pincel.lineTo(900, 370);
    pincel.stroke();
    pincel.closePath();
  }
  if (erros == 9) {
    pincel.moveTo(875, 355);
    pincel.lineTo(850, 370);
    pincel.stroke();
    pincel.closePath();
  }
  if (erros == 10) {
    erros = 0;
    window.alert(`Você Perdeu a palavra era ${palavraSecreta}`);
    location.reload();
  }
}
