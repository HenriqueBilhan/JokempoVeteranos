// pegamos os botões da escolha : pedra, papel e tesoura
//la no html podemos colocar todos os botôes dentro da area com classe "choices"
const botoes = document.querySelectorAll(".choices button") // essa linha de codigo seleciona vários botoes no html e guarda eles em uma variavel chamada botoes 
//pegamos os textos que mostram as mensagens na tela 
//essas mensagens são para mostrar o que o jogador fez e quem venceu 
const textoJ1 = document.getElementById("player1-choice") //onde vai aparecer a escolha do jogador 1
const textoJ2 = document.getElementById("player2-choice") // onde vai aparecer a escolha do jogador 2
const textoresultado = document.getElementById("winner") //onde aparece o resultado do jogo

//variaveis que guardam o que cada jogador escolheu
//começando com "null", ou seja, sem nenhuma escolha
let jogador1 = null
let jogador2 = null
/** função que recebe as escolhas dos dois jogadores
 * compara as jogadas e devolve (return) quem venceu ou se foi empate
 */
function verificarvencedor(j1, j2){
// se os dois escolheram a mesma coisa, é empate
if(j1===j2){
return "empate!"
//aqui estão as regras do jogo:
//pedra ganha de tesoura
//papel ganha de pedra
//tesoura ganha de papel
}if(
    (j1 === "pedra" && j2 === "tesoura" ) ||
    (j1 === "papel" && j2 == "pedra") ||
    (j1 == "tesoura" && j2 === "papel")
) { return "jogador 1 Venceu!🎉"
} else // se nenhuma das condiçoes acima for verdadeira , então o jogador 2 venceu
return "jogador 2 verceu !🎉"
}

// função que reinicia o jogo para uma nova rodada
//apaga as escolhas anteriores e atualiza os textos na tela
function novojogo(){
jogador1 = null //zera a escolha do jogador 1
jogador2 = null //zera a escolha do jogador 2
textoJ1.textContent = "jogador 1: escolha" //mostra essa mensagem orientando o jogador 1
textoJ2.textContent = "jogador 2: escolha" //mostra essa mensagem orientando o jogador 2
textoresultado.textContent= "" //apaga o resultado anterior
    
}  
/** aqui é onde tratamos os cliques nos botoes
 * no caso, quando alguem clicar em "pedra, papel ou tesoura"
 */
botoes.forEach( botao => {
    botao.addEventListener("click", () => { // pegamos uma escolha que está no botão clicando (esse valor está guardado no atributo data-choice la no html)
    const escolha = botao.getAttribute("data-choice") // ela vai pegar o valor do atributo data-choice ou botao que foi clicando. Esse valor pode ser: pedra, papel ou tesoura}

    // se o jogador 1 ainda não escolheu
    if(jogador1 === null){
jogador1 = escolha //guarda a escolha
textoJ1.textContent = "jogador 1 já escolheu" //mostra que já escolheu (mas não revela o que)
textoresultado.textContent = "vez do jogador 2!" //informa que agora é a vez do jogador 2
    }else if(jogador2 === null) { // se o jogador 1 já escolheu, agora é a vez do jogador 2
    jogador2 = escolha // guarda a escolha
    textoJ2.textContent = "jogador 2 já escolheu"
    // agora que os dois jogadores já escolheram, chamamos a função para quem venceu 
    const resultado = verificarvencedor(jogador1, jogador2)
//mostramos o resultado na tela junto com as jogadas
textoresultado.textContent = `${resultado} (J1:${jogador1} | J2:${jogador2})`
    }
    
// se os dois jogadores já jogaram, começamos uma nova rodada automaticamente
    
else{
novojogo() //zera tudo para começar de novo
jogada1 = escolha // o jogador 1 faz sua nova escolha
textoJ1.textContent = "Jogador 1 já escolheu"
textoresultado.textContent = "vez do jogador 2!"

}
});
});
// quando a pagina  é carregada,chamamos 

