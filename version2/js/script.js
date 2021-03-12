function carregaJSON(filename) {
    fetch(`${filename}`)
    .then(response => response.json())
    .then(data => {console.log(data);
    dados = data})
    .catch(error => console.error(error));
}
function limpaPagina(){
    document.getElementById("memoria").innerHTML = ``;
}
function adicionaDivImagens(){
    document.getElementById("memoria").innerHTML += `<div id="imagens"><div id="cLol" class="card-header bg-primary text-white">League of Legends</div></div>`;
}
function adicionaLinha(){
    document.getElementById("imagens").innerHTML += `<div class="row" id="linha"></div>`;
}
function adicionaColuna(Id,Url) {
    document.getElementById(`linha`).innerHTML += `<div class="col-3"><img class="front-face" id="${Id}" src="${Url}" alt="Face da Carta" ></div>`;
}
var temas = document.getElementById("tema");

var select = document.getElementById('dificuldade');
temas.addEventListener('change',function carregaTema(){
    if (temas.selectedIndex == 1){
        carregaJSON('json/imagensPokemon.json');
    } else if (temas.selectedIndex == 2) {
        carregaJSON('json/imagensLol.json')
    } else {
        carregaJSON('json/imagensMarvel-DC.json')
    }
})
const cards = document.querySelectorAll('.col-3');
function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.nodeValue = ramdomPos;
    });
} 
function Teste(){
    limpaPagina();
    adicionaDivImagens();
    adicionaLinha();
if (select.selectedIndex == 1) {
    for (i = 0; i < 6; i++) {
            var num = Math.floor(Math.random() * 50);
            adicionaColuna(dados[num].Id, dados[num].Url);
            adicionaColuna(dados[num].Id, dados[num].Url);
        }
    }
else if (select.selectedIndex == 2) {
        for (i = 0; i < 12; i++) {
            var num = Math.floor(Math.random() * 50);
            adicionaColuna(dados[num].Id, dados[num].Url);
            adicionaColuna(dados[num].Id, dados[num].Url);
        }
    } else {
        for (i = 0; i < 24; i++) {
            var num = Math.floor(Math.random() * 50);
            adicionaColuna(dados[num].Id, dados[num].Url);
            adicionaColuna(dados[num].Id, dados[num].Url);
        }
    }
}
