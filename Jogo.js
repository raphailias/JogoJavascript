var pontuacao, pontuacaoRodada,jogadorAtual,pontuacaoGlobal0,pontuacaoGlobal1,pontuacaoRodada0,pontuacaoRodada1,pontuacoesGlobais,pontuacoesRodadas;

var novojogo = function () {
    //seta o arry da pontuacao pra 0
    pontuacao = [0, 0];
    // pontuacao da rodada setada pra 0
    pontuacaoRodada = 0;
    // seta o jogador 1 para comecar
    jogadorAtual = 0;
    
    pontuacaoRodada0 = document.querySelector('#pontuacao-rodada-0');
    pontuacaoRodada1 = document.querySelector('#pontuacao-rodada-1');
    pontuacaoGlobal0 = document.querySelector('#pontuacao-global-0');
    pontuacaoGlobal1 = document.querySelector('#pontuacao-global-1');
    
    //seta a pontuacao global do player 1 pra zero 
    pontuacaoGlobal0.textContent = '0';
    // seta a pontuacao global do player 2 pra zero
    pontuacaoGlobal1.textContent = '0';
    // seta a pontuacao global do player 1 pra zero
    pontuacaoRodada0.textContent = '0';
    // seta a pontuacao global do player 2 pra zero
    pontuacaoRodada1.textContent = '0';
    // seta o array dos players pra zero
    pontuacoesGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];
    //seta o array dos players para zero
    pontuacoesRodadas = [pontuacaoRodada0, pontuacaoRodada1];
}
novojogo();

//document.querySelector('#pontuacao-rodada-0').textContent = dado;
var botaoLancarDado = document.querySelector("#botao-lancar-dado");
var botaoNovoJogo = document.querySelector("#botao-novo-jogo");
var botaoPassaVez = document.querySelector("#botao-passar-vez");
var jogador = document.querySelector("#vencedor");
botaoNovoJogo.addEventListener("click", novojogo)

botaoLancarDado.addEventListener("click", function () {
    var dado = Math.floor(Math.random() * 6) + 1;
    if (dado == 1) {
        pontuacao[jogadorAtual] = 0;
        pontuacoesRodadas[jogadorAtual].textContent = 0;
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        jogadorAtual = 1 - jogadorAtual;
    }

     else {
        pontuacao[jogadorAtual] += dado;
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        pontuacoesRodadas[jogadorAtual].textContent = dado;
    }
    if (pontuacao[0] >= 10 || pontuacao[1] >= 10){
        $("#Modal").modal();
        jogador.textContent = "Jogador" + (jogadorAtual + 1) + "Vence!!";
        novojogo();
    }
})

botaoPassaVez.addEventListener("click", function(){
    jogadorAtual = 1 - jogadorAtual;

})



