let listaDeNumerosSorteados = [];
let limiteValores = 10;
let somAtivado = false;
let numeroAleatorio = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTextoInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `escolha um número entre 1 e ${limiteValores}`);
    somAtiva();
}

exibirTextoInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroAleatorio){
        exibirTextoNaTela('h1', 'Parabéns!!');
        exibirTextoNaTela('p', 'Você acertou o número secreto!!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exibirTextoNaTela('h1', 'Tente novamente');
        if(chute > numeroAleatorio){
            exibirTextoNaTela('p', 'O número secreto é menor que o número digitado');
            limparCampo();
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior que o número digitado');
            limparCampo();
        }
    }
    somAtiva();
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio(){
    let num = parseInt(Math.random() * limiteValores + 1);
    if(listaDeNumerosSorteados.length == limiteValores){
        listaDeNumerosSorteados  = [];
    }
    if(listaDeNumerosSorteados.includes(num)){
        gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(num);
        console.log(listaDeNumerosSorteados);
        return num;
    }
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function ativarSom(){
    somAtivado = true;
    responsiveVoice.speak(document.getElementById('h1').textContent, 'Brazilian Portuguese Female', {rate: 1.2});
    responsiveVoice.speak(document.getElementById('p').textContent, 'Brazilian Portuguese Female', {rate: 1.2});
}

function somAtiva(){
    if(somAtivado == true){
        ativarSom();
    }
}