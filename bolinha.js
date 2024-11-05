const bolinha = document.getElementById("bolinha");
const tetaReverter = document.getElementById("tela");

bolinha.style.left = "300px";
bolinha.style.top = "550px";
let posicaoTop = 200;
let paramoveAgora = false;
let move = 10;

bolinha.style.top = posicaoTop + "px";

const paramove = () => {
  move = 0;
  paramoveAgora = true;
};

const moverBolinha = setInterval(() => {
  posicaoTop += move;
  bolinha.style.top = posicaoTop + "px";

  if (posicaoTop > 550 || posicaoTop < 10) {
    bolinha.style.top = "550px";
    clearInterval(moverBolinha);
  }
  if (posicaoTop < 10) {
    bolinha.style.top = "10px";
    clearInterval(moverBolinha);
  }
}, 50);

if (!paramoveAgora) {
  tetaReverter.addEventListener("mousedown", () => {
    if (!paramoveAgora) {
      move = -10;
    }
  });

  tetaReverter.addEventListener("mouseup", () => {
    if (!paramoveAgora) {
      move = 10;
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && !paramoveAgora) {
      if (!paramoveAgora) {
        move = -10;
      }
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.code === "Space" && !paramoveAgora) {
      if (!paramoveAgora) {
        move = 10;
      }
    }
  });
}

export default {
  paramove: paramove,
};
