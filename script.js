let seuVoto = document.querySelector('.d1-1 span');
let cargo = document.querySelector('.d1-2 span');
let descricao = document.querySelector('.d1-4');
let aviso = document.querySelector('.d2');
let areaImagens = document.querySelector('.d1-right');
let numeros = document.querySelector('.d1-3');

// Variaveis de ambiente

let etapaAtual = 0;
let numeroTela = '';
let votoBranco = false;
let votos = [];

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHTML = '';
    numeroTela = '';
    votoBranco = false;

    for(let i = 0; i < etapa.numeros; i++){

        if(i === 0){
            numeroHTML += '<div class="numero pisca"></div>';
        }else { 
            numeroHTML += '<div class="numero"></div>';
        }
        
    }

    seuVoto.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    areaImagens.innerHTML = '';
    numeros.innerHTML = numeroHTML;
}

function atualizarInterface(){
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=> {
        if(item.numero === numeroTela){
            return true;
        }else{
            return false;
        }
    })
    if(candidato.length > 0 ){
        candidato = candidato[0];
        seuVoto.style.display = 'block';
        aviso.style.display = 'block';

        if(candidato.vice !== undefined){
            descricao.innerHTML = `Nome: ${candidato.nome} <br />Partido: ${candidato.partido}<br />Vice: ${candidato.vice}`;
        }else{
            descricao.innerHTML = `Nome: ${candidato.nome} <br />Partido: ${candidato.partido}<br />`;
        }

        let fotosHtml = '';

        for(let i in candidato.fotos){
            if(candidato.fotos[i].small){
                fotosHtml += `<div class="d1-img small"> <img src="images/${candidato.fotos[i].url}" alt=""> ${candidato.fotos[i].legenda}</div>`;
            }else{
                fotosHtml += `<div class="d1-img"> <img src="images/${candidato.fotos[i].url}" alt=""> ${candidato.fotos[i].legenda}</div>`;
            }
        }

        areaImagens.innerHTML = fotosHtml;

    }else{
        seuVoto.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
    }


}

function clicou(num){
    let numero = document.querySelector('.numero.pisca');
    if(numero != null){
        numero.innerHTML = num;
        numeroTela = `${numeroTela}${num}`;
    }

    numero.classList.remove('pisca');
    if(numero.nextElementSibling !== null){
        numero.nextElementSibling.classList.add('pisca');
    }else{
        atualizarInterface();
    }
}

function branco(){
    if(numeroTela === ''){
        votoBranco = true;
        seuVoto.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
        areaImagens.innerHTML = '';
    }else {
        alert('Para votar em branco, não pode digitar nenhum número!')
    }
}

function corrige(){
    comecarEtapa();
}

function confirma(){
    let etapa = etapas[etapaAtual];

    let votoConfirmado = false;

    if(votoBranco === true){
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
        });
    }else if(numeroTela.length === etapa.numeros){
        votoConfirmado = true;
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numeroTela
        });
    }

    if(votoConfirmado){
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
            comecarEtapa();
        }else{
            document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca">FIM!</div>';
            console.log(votos);
        }
    }
}

comecarEtapa();