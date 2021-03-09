function carregaJSON(filename) {
    fetch(`${filename}`)
    .then(response => response.json())
    .then(data => {console.log(data);
    dados = data})
    .catch(error => console.error(error));
}

function adicionaLinha(){
    document.getElementById("imagens").innerHTML += `<div class="row" id="linha"></div>`
}

function adicionaColuna(Id,Url) {
    document.getElementById("linha").innerHTML += `<div class="col-3"><img id="${Id}" src="${Url}" alt="" ></div>`;
}
carregaJSON('json/imagens.json');

function Teste(){
    for (i = 0; i < 3; i++) {
        adicionaLinha();
        adicionaColuna(dados[i].Id, dados[i].Url);
        adicionaColuna(dados[i].Id, dados[i].Url);
        adicionaColuna(dados[i].Id, dados[i].Url);
        adicionaColuna(dados[i].Id, dados[i].Url);
     }
}