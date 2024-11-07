import geradorBlocosSup from "./geradorBlocosSup.js";
import geradorBlocosInf from "./geradorBlocosInf.js";
import criaBlocos from "./criaBlocos.js";

const modalFimJogo = document.getElementById("modalFimJogo");
const btnReiniciar = document.getElementById("btnReiniciar");
const pontuacaoFinal = document.getElementById("pontuacaoFinal");
const pontuacaoJogo = document.getElementById("pontuacaoJogo");
const modalInicioJogo = document.getElementById("modalInicioJogo");
const btnIniciar = document.getElementById("btnIniciar");


let tempo = 0;
let pontuacao = 0;
let iniciou = false;
let rodauma = false
const tempoJogo = setInterval(() => {

  
  if(!rodauma){
    modalInicioJogo.style.display = "flex";
    rodauma=true;
  }
  
  if(iniciou){
    modalInicioJogo.style.display = "none";
    
    tempo++;
    pontuacao++;
    pontuacaoJogo.textContent = pontuacao;
    switch (criaBlocos.getMove() > 0) {
      case tempo < 10:
        geradorBlocosInf.setaFase(0);
        geradorBlocosSup.setaFase(0);
        break;
  
      case tempo === 100:
        geradorBlocosInf.setaFase(1);
        geradorBlocosSup.setaFase(1);
        break;
  
      case tempo === 200:
        geradorBlocosInf.setaFase(2);
        geradorBlocosSup.setaFase(2);
        break;
  
      case tempo === 300:
        geradorBlocosInf.setaFase(3);
        geradorBlocosSup.setaFase(3);
        break;
  
      default:
        break;
    }
  }


  if (criaBlocos.getMove() < 1) {
    iniciou=false;
    console.log("bateu, sequencia parada");
    fimDeJogo();
    clearInterval(tempoJogo);
  }
}, 100);




function fimDeJogo() {
    pontuacaoFinal.textContent = pontuacao; 
    modalFimJogo.style.display = "flex";
}

btnReiniciar.addEventListener("click", ()=>location.reload());
btnIniciar.addEventListener("click", ()=>iniciou=true);

export default { tempoJogo };
