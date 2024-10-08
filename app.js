function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);     // .value = retorna o valor do id em uma String
    let ate = parseInt(document.getElementById('ate').value);   // parseInt = converte o retorno do .value em um int
    let intervalo = (ate - de + 1);

    if (de >= ate) {    
        alert('O número inserido no campo "Do número" deve ser menor que no campo "Até o número". Verifique!');
        return;
    } 
    if (quantidade > intervalo) {
        alert('Valor do intervalo de números é menor que o valor da quantidade solicitada para sorteio!');
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }    

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        
        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }    
        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML =  `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value =  '';
    document.getElementById('ate').value = '';       
    document.getElementById('resultado').innerHTML = ' <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';     
    alterarStatusBotao();
}