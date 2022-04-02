// ativar links do menu//
const links = document.querySelectorAll(".header-menu a");
function ativarLink(link) {
  const href = link.href;
  const url = location.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

// ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

// galeria de bicicletas//

const galeria = document.querySelectorAll(".bicicletas-imagens img");
console.log(galeria);
const galeriaContainer = document.querySelector(".bicicletas-imagens");

function trocarImagem(event){
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
  galeriaContainer.prepend(img);
 }
}

function eventosGaleria(img){
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria)

console.log(galeria, galeriaContainer);

// const perguntas = document.querySelectorAll('.perguntas button');

// function ativarPergunta (event){
//  const pergunta = event.currentTarget;
//  const controls = pergunta.getAttribute ('aria-controls');
//  const resposta = document.getElementById (controls);

//  resposta.classList.toggle("ativa");
//  const ativa = resposta.classList.contains("ativa");
//  pergunta.setAttribute("aria-expanded", ativa);
// }
// function eventosPerguntas(pergunta){
//   pergunta.addEventListener("click", ativarPergunta);
// }

// perguntas.forEach(eventosPerguntas);

// const params = new URLSearchParams(location.search);

// params.forEach((item) => {
//   const element = document.querySelector(`[type="radio"][value="${item}"]`);
//   if (element) element.checked = true;
// });

const dts = document.querySelectorAll("dt");

dts.forEach((dt) => {
  dt.addEventListener("click", () => {
    dt.parentElement.classList.toggle("ativa");
  });
});

// const links = document.querySelectorAll(".header-menu a");

// links.forEach((link) => {
//   if (location.href.includes(link.href)) {
//     link.classList.add("ativo");
//   }
// });

// const galeria = document.querySelectorAll(".bicicleta-imagens img");
// const galeriaContainer = document.querySelector(".bicicleta-imagens");

// galeria.forEach((img) => {
//   img.addEventListener("click", () => {
//     if (matchMedia("(min-width: 1000px)").matches) {
//       galeriaContainer.prepend(img);
//     }
//   });
// });

// // if (window.SimpleAnime) new SimpleAnime();
