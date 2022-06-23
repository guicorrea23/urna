let seuVoto = document.querySelector('.d1-1 span');
let cargo = document.querySelector('.d1-2 span');
let descricao = document.querySelector('.d1-4');
let aviso = document.querySelector('.d2');
let areaImagens = document.querySelector('.d1-right');
let numeros = document.querySelector('.d1-3');

// Variaveis de controle

let etapaAtual = 0;
let numeroTela = '';

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHTML = '';

    for(let i = 0; i < etapa.numeros; i++){
        numeroHTML += '<div class="numero"></div>'
    }

    seuVoto.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    areaImagens.innerHTML = '';
    numeros.innerHTML = numeroHTML;
}

function clicou(numero){
    
}

function branco(){
    alert('clicou em branco')
}

function corrige(){
    alert('clicou em corrige')
}

function confirma(){
    alert('clicou em Confirma')
}

comecarEtapa();