import geradorBlocosSup from "./geradorBlocosSup.js";
import geradorBlocosInf from "./geradorBlocosInf.js";
import { criarBloco } from "./criaBlocos.js";
import ComportamentoBolinha from "./bolinha.js";

const bolinha = document.getElementById("bolinha");

// Função para verificar colisão
const verificarColisao = (bolinha, bloco) => {
  const bolinhaRect = bolinha.getBoundingClientRect();
  const blocoRect = bloco.getBoundingClientRect();

  // Verifica se há interseção entre os retângulos
  return !(
    bolinhaRect.top > blocoRect.bottom ||
    bolinhaRect.bottom < blocoRect.top ||
    bolinhaRect.left > blocoRect.right ||
    bolinhaRect.right < blocoRect.left
  );
};

// Função para verificar colisões com todos os blocos
const verificarColisoesComBlocos = () => {
  const blocos = document.querySelectorAll(".bloco");
  blocos.forEach((bloco) => {
    if (verificarColisao(bolinha, bloco)) {
      bloco.style.background = null;
      bloco.style.backgroundColor = "red ";
      geradorBlocosSup.paramove();
      geradorBlocosInf.paramove();
      ComportamentoBolinha.paramove();
    }
  });
};

// Verifica colisões a cada 50ms
setInterval(verificarColisoesComBlocos, 50);

export default verificarColisoesComBlocos;
