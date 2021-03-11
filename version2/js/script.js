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
function adicionaColuna(Id,Url,col) {
    document.getElementById(`linha`).innerHTML += `<div class="col-${col}"><img class="front-face" id="${Id}" src="${Url}" alt="Face da Carta" ></div>`;
}
carregaJSON('json/imagens.json');
var select = document.getElementById('dificuldade');
var value = select.options[select.selectedIndex].value;
/*select.addEventListener('change', function(){
    console.log(select.value)
})*/
function Teste(){
    limpaPagina();
    adicionaDivImagens();
    adicionaLinha();
if (select.value == 500) {
    for (i = 0; i < 6; i++) {
            var num = Math.floor(Math.random() * 50);
            adicionaColuna(dados[num].Id, dados[num].Url,3);
            adicionaColuna(dados[num].Id, dados[num].Url,3);
        }
    }
else if (select.value == 600) {
        for (i = 0; i < 12; i++) {
            var num = Math.floor(Math.random() * 50);
            adicionaColuna(dados[num].Id, dados[num].Url,3);
            adicionaColuna(dados[num].Id, dados[num].Url,3);
        }
    } else {
        for (i = 0; i < 24; i++) {
            var num = Math.floor(Math.random() * 50);
            adicionaColuna(dados[num].Id, dados[num].Url,3);
            adicionaColuna(dados[num].Id, dados[num].Url,3);
        }
    }   
}