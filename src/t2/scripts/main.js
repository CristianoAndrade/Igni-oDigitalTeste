  console.log('Implemente o layout que se encontra na pasta design de forma responsiva, utilizando html5 e as boas práticas do front end. O site será testado em todos os navegadores e também em dispositivos móveis');

$.get("http://localhost/server",selecionaImagem);

function selecionaImagem(imagens) {
  $('.learn').append(`<img src="${imagens.imagens[4].imagem}" alt="">`);

  $(".banner").append(`<img src="${imagens.imagens[0].imagem}" alt="Banner">`);

  $(".imagens").append(`<img src="${imagens.imagem[1].imagem}" alt="Imagem 1" class="col">
    <img src="${imagens.imagem[2].imagem}" alt="Imagem 2" class="col">
    <img src="${imagens.imagem[3].imagem}" alt="Imagem 2" class="col">`);
}
