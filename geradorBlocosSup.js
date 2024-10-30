const geradorBlocoInf = document.getElementById("geradorBlocoInf");
let move = 10;
let criablocoX;

const paramove = () => {
  move = 0;
};

const criarBloco = () => {
  if (move > 0) {
    const novoBloco = document.createElement("div");
    novoBloco.style.width = "80px";
    const alturaAleatoria = Math.floor(Math.random() * (260 - 100 + 1)) + 100;
    novoBloco.style.height = alturaAleatoria + "px";
    novoBloco.style.background = "url('./desenhos/blocoinf.png')";
    novoBloco.style.backgroundSize = "100%"; // Garante que a imagem cubra 100% da div
    novoBloco.style.backgroundPosition = "botton";
    novoBloco.style.transform = "scaleY(-1)";

    novoBloco.style.backgroundRepeat = "no-repeat";
    novoBloco.style.position = "absolute";
    const posicaoBase = 0;
    novoBloco.style.top = `${posicaoBase}px`;
    novoBloco.style.left = "730px";
    novoBloco.className = "bloco";
    geradorBlocoInf.appendChild(novoBloco);
    let posicaoLeft = 730;

    const moverBloco = setInterval(() => {
      posicaoLeft -= move;
      novoBloco.style.left = posicaoLeft + "px";

      if (posicaoLeft > window.innerWidth) {
        clearInterval(moverBloco);
        geradorBlocoInf.removeChild(novoBloco);
      }
    }, 50);

    setTimeout(() => {
      clearInterval(moverBloco);
      geradorBlocoInf.removeChild(novoBloco);
    }, 4000);
  }
};

setInterval(criarBloco, 1500);

export default {
  criarBloco: criarBloco,
  paramove: paramove,
};
