function carregaJSON(filename) {
    fetch(`${filename}`)
    .then(response => response.json())
    .then(data => {console.log(data);
    dados = data})
    .catch(error => console.error(error));
}
function adicionaDivImagens(){
    document.getElementById("memoria").innerHTML += `<div id="imagens"></div>`;
}
function adicionaLinha(){
    document.getElementById("imagens").innerHTML += `<div class="row" id="linha"></div>`;
}
function adicionaColuna(Id,Url) {
    document.getElementById(`linha`).innerHTML += `<div class="col-3"><img class="front-face" id="${Id}" src="${Url}" alt="Face da Carta" ></div>`;
}
carregaJSON('json/imagens.json');
function Teste(){
    adicionaDivImagens();
    adicionaLinha();
    for (i = 0; i < 6; i++) {
        var num = Math.floor(Math.random() * 50);
        adicionaColuna(dados[num].Id, dados[num].Url);
        adicionaColuna(dados[num].Id, dados[num].Url);
    }
}
/*const cards = document.querySelectorAll('.col-3');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));*/