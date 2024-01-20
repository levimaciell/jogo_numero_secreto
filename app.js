let numerosSorteados = [];

let numeroSecreto = gerarNumeroAleatorio(10);
let tentativas = 1;

exibirMensagemInicial();

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute(){
    let input = document.querySelector('input').value;

    if(numeroSecreto == input){
        let msg = `Você descobriu o número secreto em 
        ${tentativas} ${tentativas == 1? 'tentativa' : 'tentativas'}`;

        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', msg);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroSecreto < input){
            tentativas++;
            exibirTextoNaTela('p', 'O número secreto é menor!');
        }
        else{
            tentativas++;
            exibirTextoNaTela('p', 'O número secreto é maior!')
        }
        limparCampo();
    }
    
}

function gerarNumeroAleatorio(limiteMaximo){
    let numeroSorteado = parseInt(Math.random() * limiteMaximo + 1);

    if(numerosSorteados.length == limiteMaximo){
        numerosSorteados = [];
    }


    if(numerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatorio(limiteMaximo);
    }
    else{
        numerosSorteados.push(numeroSorteado);
        console.log(numerosSorteados);
        return numeroSorteado;
    }
}

function exibirTextoNaTela(tag, texto){
    let documentTag = document.querySelector(tag);
    documentTag.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function limparCampo(){
    input = document.querySelector('input');
    input.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio(10);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}