export const criarBloco = (move, base, scala = "", sup) => {
  if (move > 0) {
    const novoBloco = document.createElement("div");
    novoBloco.style.width = "80px";
    const alturaAleatoria = Math.floor(Math.random() * (260 - 100 + 1)) + 100;
    novoBloco.style.height = alturaAleatoria + "px";
    novoBloco.style.backgroundColor = "red";
    novoBloco.style.background = "url('./desenhos/blocoinf.png')";
    novoBloco.style.backgroundSize = "100%"; // Garante que a imagem cubra 100% da div
    novoBloco.style.backgroundPosition = "botton";
    novoBloco.style.transform = scala; //scaleY(-1)

    novoBloco.style.backgroundRepeat = "no-repeat";
    novoBloco.style.position = "absolute";
    const posicaoBase = base;

    if (sup == 1) {
      novoBloco.style.top = `${posicaoBase}px`;
    } else {
      novoBloco.style.top = `${posicaoBase - alturaAleatoria}px`;
    }

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
