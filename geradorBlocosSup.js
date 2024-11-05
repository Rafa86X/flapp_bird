import { criarBloco } from "./criaBlocos.js";

let move = 10;
let fase = 0;
let intervaloCriarBloco = "";
const paramove = () => {
  move = 0;
};

const setaFase = (n = 0) => {
  fase = n;
  console.log("entrou no setafase " + n);
  console.log("bloco superior");

  switch (fase) {
    case 0:
      clearInterval(intervaloCriarBloco);
      intervaloCriarBloco = setInterval(
        () => criarBloco(move, 0, "scaleY(-1)", 1),
        1500
      );
      break;
    case 1:
      clearInterval(intervaloCriarBloco);
      intervaloCriarBloco = setInterval(
        () => criarBloco(move, 0, "scaleY(-1)", 1),
        900
      );
      break;
    case 2:
      clearInterval(intervaloCriarBloco);
      intervaloCriarBloco = setInterval(
        () => criarBloco(move, 0, "scaleY(-1)", 1),
        600
      );
      break;
    case 3:
      clearInterval(intervaloCriarBloco);
      intervaloCriarBloco = setInterval(
        () => criarBloco(move, 0, "scaleY(-1)", 1),
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
