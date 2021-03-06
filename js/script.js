/*var dados
function carregaJSON(filename) {
    fetch(`${filename}`)
    .then(response => response.json())
    .then(data => {console.log(data);
    dados = data})
    .catch(error => console.error(error));
}
carregaJSON('');*/
let imagens = [];

for(let i = 0; i < 6; i++) imagens.push(`https://picsum.photos/id/${i}/80`);
let fundo = `./img/logo.png`;

// Estado do jogo
let cartas = [0,0,1,1,2,2,3,3,4,4,5,5];

onload = () => {

// Carrega as imagens de fundo 
let elemImagens = document.querySelectorAll('#memoria img');
elemImagens.forEach((img, i) =>{
    img.src = fundo;
    img.setAttribute('data-valor', i);
    img.style.opacity = 0.4;
});

// Cria o evento do botão de inicio
document.querySelector('#btInicio').onclick = iniciaJogo;
};

// Inicia Jogo
const iniciaJogo = () => {

//Embaralhar cartas
    for(let i = 0; i < cartas.length; i++){
        let p = Math.trunc(Math.random() * cartas.length);
        let aux = cartas[p];
        cartas[p] = cartas[i];
        cartas[i] = aux;
    }
    

    // Associar evento as imagens
    let elemImagens = document.querySelectorAll('#memoria img');
    elemImagens.forEach((img, i) =>{
        img.onclick = trataCliqueImagem;
        img.style.opacity = 1;
    });
};

//Processa o clique na imagem 
const trataCliqueImagem = (e) => {
    const p = +e.target.getAttribute('data-valor');
    const valor = cartas[p];
    e.target.src = imagens[valor - 1];
    e.target.onclick = null;
};