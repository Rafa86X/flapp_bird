import criarBloco from "./criaBlocos.js";

let fase = 0;
let intervaloCriarBloco = "";
const paramove = () => {
  clearInterval(intervaloCriarBloco);
};

const setaFase = (n = 0) => {
  fase = n;
  console.log("entrou no setafase " + n);
  console.log("bloco superior");

  switch (fase) {
    case 0:
      clearInterval(intervaloCriarBloco);
      intervaloCriarBloco = setInterval(
        () => criarBloco.criarBloco(0, "scaleY(-1)", 1),
        1500
      );
      break;
    case 1:
      clearInterval(intervaloCriarBloco);
      intervaloCriarBloco = setInterval(
        () => criarBloco.criarBloco(0, "scaleY(-1)", 1),
        900
      );
      break;
    case 2:
      clearInterval(intervaloCriarBloco);
      intervaloCriarBloco = setInterval(
        () => criarBloco.criarBloco(0, "scaleY(-1)", 1),
        600
      );
      break;
    case 3:
      clearInterval(intervaloCriarBloco);
      intervaloCriarBloco = setInterval(
        () => criarBloco.criarBloco(0, "scaleY(-1)", 1),
        300
      );
      break;
    default:
      console.log("Valor de fase não corresponde a nenhum caso");
      break;
  }
};

export default {
  paramove: paramove,
  setaFase: setaFase,
};
