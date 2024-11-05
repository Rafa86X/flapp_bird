import geradorBlocosSup from "./geradorBlocosSup.js";
import geradorBlocosInf from "./geradorBlocosInf.js";
import ComportamentoBolinha from "./bolinha.js";
import criaBlocos from "./criaBlocos.js";

const bolinha = document.getElementById("bolinha");
const passarinho = document.getElementById("passarinho");

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
      criaBlocos.setaMove(0);

      bloco.style.background = "url('./desenhos/pilar.gif')";
      bloco.style.backgroundSize = "100%";
      bloco.style.backgroundPosition = "botton";

      passarinho.style.background = "url('./desenhos/Pmorre.gif')";
      passarinho.style.backgroundSize = "100%";
      passarinho.style.backgroundPosition = "botton";
      geradorBlocosSup.paramove();
      geradorBlocosInf.paramove();
      ComportamentoBolinha.paramove();
    }
  });
};

// Verifica colisões a cada 50ms
setInterval(verificarColisoesComBlocos, 50);

export default verificarColisoesComBlocos;
