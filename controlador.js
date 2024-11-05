import geradorBlocosSup from "./geradorBlocosSup.js";
import geradorBlocosInf from "./geradorBlocosInf.js";

let tempo = 0;

const tempoJogo = setInterval(() => {
  tempo++;
  if (tempo < 2) {
    geradorBlocosInf.setaFase(0);
    geradorBlocosSup.setaFase(0);
  }

  if (tempo == 10) {
    geradorBlocosInf.setaFase(1);
    geradorBlocosSup.setaFase(1);
  }

  if (tempo == 20) {
    geradorBlocosInf.setaFase(2);
    geradorBlocosSup.setaFase(2);
  }

  if (tempo == 30) {
    geradorBlocosInf.setaFase(3);
    geradorBlocosSup.setaFase(3);
  }
}, 1000);

export default { tempoJogo };
