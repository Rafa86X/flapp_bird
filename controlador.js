import geradorBlocosSup from "./geradorBlocosSup.js";
import geradorBlocosInf from "./geradorBlocosInf.js";
import criaBlocos from "./criaBlocos.js";

let tempo = 0;

const tempoJogo = setInterval(() => {
  tempo++;

  // switch (criaBlocos.getMove() > 0) {
  //   case tempo < 2:
  //     geradorBlocosInf.setaFase(0);
  //     geradorBlocosSup.setaFase(0);
  //     break;

  //   case tempo === 10:
  //     geradorBlocosInf.setaFase(1);
  //     geradorBlocosSup.setaFase(1);
  //     break;

  //   case tempo === 20:
  //     geradorBlocosInf.setaFase(2);
  //     geradorBlocosSup.setaFase(2);
  //     break;

  //   case tempo === 30:
  //     geradorBlocosInf.setaFase(3);
  //     geradorBlocosSup.setaFase(3);
  //     break;

  //   default:
  //     break;
  //}

  if (criaBlocos.getMove() < 1) {
    console.log("bateu, sequencia parada");

    clearInterval(tempoJogo);
  }
}, 1000);

export default { tempoJogo };
