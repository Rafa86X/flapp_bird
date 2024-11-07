const bolinha = document.getElementById("bolinha");
const tetaReverter = document.getElementById("tela");

bolinha.style.left = "300px";
bolinha.style.top = "550px";
let posicaoTop = 300;
let paramoveAgora = false;
let move = 0;

bolinha.style.top = posicaoTop + "px";

const paramove = () => {
  move = 0;
  paramoveAgora = true;
  clearInterval(moverBolinha);
};

const moverBolinha = setInterval(() => {
  posicaoTop += move;
  bolinha.style.top = posicaoTop + "px";

  if (posicaoTop > 500 || posicaoTop < 120) {
    move=0;
  }

  
}, 50);


function iniciarMovimento(direcao) {
  if (direcao === "cima" && bolinha.offsetTop > 119) {
    move = -10;
  } else if (direcao === "baixo" && bolinha.offsetTop < 499) {
    move = 10;
  }
}


if (!paramoveAgora) {
  tela.addEventListener("mousedown", () => iniciarMovimento("cima"));
  tela.addEventListener("mouseup", () => iniciarMovimento("baixo"));

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") iniciarMovimento("cima");
  });

  document.addEventListener("keyup", (event) => {
    if (event.code === "Space") iniciarMovimento("baixo");
  });

  tela.addEventListener("touchstart", () => iniciarMovimento("cima"));
  tela.addEventListener("touchend", () => iniciarMovimento("baixo"));
}

export default {
  paramove: paramove,
};
