let palavras = ["ALURA", "ORACLE", "BANANA", "XICARA", "PRATO", "JAVASCRIPT"];
let palavraSecreta = "";
let letras = [];
let erros = 0;

function iniciar() {
  const tela = document.getElementById("forca");
  const pincel = tela.getContext("2d");
  pincel.fillStyle = "blue";
  pincel.fillRect(10, 10, 250, 200);
}

function sorteiaPalavra() {
  let palavra = palavras[Math.floor(Math.random() * palavras.length)];
  palavraSecreta = palavra;
  console.log(palavra);
  return palavra;
}

function verificarLetra(key) {
  let estado = false;
  if (
    (key >= 65 && letras.indexOf(key)) ||
    (key <= 90 && letras.indexOf(key))
  ) {
    letras.push(key);
    return estado;
  } else {
    estado = true;
    return estado;
  }
}

function adicionarLetraErrada(){
  erros += 1
}

document.onkeydown = (event) => {
  let letra = event.key.toUpperCase();
  console.log(letra);
  if (verificarLetra(letra) && palavraSecreta.includes(letra)) {
    for (let i = 0; i < palavraSecreta.length; i++) {
      if (palavraSecreta[i] === letra) {
        escreverLetraCorreta(i);
      }
    }
  }else{
    adicionarLetraErrada(letra);
    escreverLetraIncorreta(letra, erros);
    desenhaForca()
  }
};

function iniciJogo() {
  document.getElementById("div-desaparece").style.display = "none";
  sorteiaPalavra();
  desenhaCanvas();
  desenhaLinha();
}
