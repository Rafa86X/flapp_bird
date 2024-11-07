const modalFimJogo = document.getElementById("modalFimJogo");
const btnReiniciar = document.getElementById("btnReiniciar");


function fimDeJogo() {
    pontuacaoFinal.textContent = pontuacao; 
    modalFimJogo.style.display = "flex";
}

btnReiniciar.addEventListener("click", ()=>location.reload());