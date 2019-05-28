  console.log('Implemente o layout que se encontra na pasta design de forma responsiva, utilizando html5 e as boas práticas do front end. O site será testado em todos os navegadores e também em dispositivos móveis');

  $.get("http://localhost/front-teste/server/data.json",selecionaImagem);

function selecionaImagem(data) {
  data = JSON.parse(data);
  $('.learn').html(`<img src="${data.imagens[4].imagem}" alt="">`);

  $(".banner").html(`<img src="${data.imagens[0].imagem}" alt="Banner">`);

  $(".imagens").html(`<img src="${data.imagens[1].imagem}" alt="Imagem 1" class="col">
     <img src="${data.imagens[2].imagem}" alt="Imagem 2" class="col">
    <img src="${data.imagens[3].imagem}" alt="Imagem 2" class="col">`);
}
