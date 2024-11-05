import { criarBloco } from "./criaBlocos.js";

let move = 10;
let fase = 0;
let intervaloCriarBloco2 = "";

const paramove = () => {
  move = 0;
  clearInterval(intervaloCriarBloco2);
};

const setaFase = (n = 0) => {
  fase = n;
  console.log("entrou no setafase " + n);
  console.log("bloco inferior");

  switch (fase) {
    case 0:
      clearInterval(intervaloCriarBloco2);
      intervaloCriarBloco2 = setInterval(
        () => criarBloco(move, 610, "scaleY(1)", 2),
        2000
      );
      break;
    case 1:
      clearInterval(intervaloCriarBloco2);
      intervaloCriarBloco2 = setInterval(
        () => criarBloco(move, 610, "scaleY(1)", 2),
        1200
      );
      break;
    case 2:
      clearInterval(intervaloCriarBloco2);
      intervaloCriarBloco2 = setInterval(
        () => criarBloco(move, 610, "scaleY(1)", 2),
        600
      );
      break;
    case 3:
      clearInterval(intervaloCriarBloco2);
      intervaloCriarBloco2 = setInterval(
        () => criarBloco(move, 610, "scaleY(1)", 2),
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
