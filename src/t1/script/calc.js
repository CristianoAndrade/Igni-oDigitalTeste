console.log('Implemente a funcionalidade da Calculadora acima em javascript');

function adicionaValor() {
    $('input[name=btn]').click(function(){

    $('#inputNum').val($('#inputNum').val()+$(this).val());

  });

}

function limpaValor() {
    $('.btn_clr').click(function() {
    $('#inputNum').val('');

  });

}

var valor, valor_2, operacao;

function somaValor() {

    $('#btn_sum').click(function() {

    if ($("#inputNum").val() != "") {

      valor = parseFloat($('#inputNum').val());

      $('#inputNum').val('');
      operacao = "soma"
      $('.btn_sum').addClass('btn-active');

    } else {
      alert('Informe um valor para efetuar a operação.');
    }

  });

    $('#inputNum').keypress(function(e) {

      var tecla = (window.event)?event.keyCode:e.wich;

      if ((tecla == 43 && $("#inputNum").val() != "")) {

        valor = parseFloat($('#inputNum').val());

        $('#inputNum').val('');
        operacao = "soma"
        $('.btn_sum').addClass('btn-active');

      }
    });
}

function subtraiValor() {

    $('#btn_menos').click(function() {

    if ($("#inputNum").val() != "") {

      valor = parseFloat($('#inputNum').val());

      $('#inputNum').val('');
      operacao = "subtração"
      $('.btn_menos').addClass('btn-active');

    } else {
      alert('Informe um valor para efetuar a operação.');
    }

  });

    $('#inputNum').keypress(function(e) {

      var tecla = (window.event)?event.keyCode:e.wich;

      if ((tecla == 45 && $("#inputNum").val() != "")) {

        valor = parseFloat($('#inputNum').val());

        $('#inputNum').val('');
        operacao = "subtração"
        $('.btn_menos').addClass('btn-active');

      }
    });
}

function multiplicaValor() {

    $('#btn_multi').click(function() {

    if ($("#inputNum").val() != "") {

      valor = parseFloat($('#inputNum').val());

      $('#inputNum').val('');
      operacao = "multiplicação"
      $('.btn_multi').addClass('btn-active');

    } else {
      alert('Informe um valor para efetuar a operação.');
    }

  });

    $('#inputNum').keypress(function(e) {

      var tecla = (window.event)?event.keyCode:e.wich;

      if ((tecla == 42 && $("#inputNum").val() != "")) {

        valor = parseFloat($('#inputNum').val());

        $('#inputNum').val('');
        operacao = "multiplicação"
        $('.btn_multi').addClass('btn-active');

      }
    });
}

function divideValor() {

    $('#btn_div').click(function() {

    if ($("#inputNum").val() != "") {

      valor = parseFloat($('#inputNum').val());

      $('#inputNum').val('');
      operacao = "divisão"
      $('.btn_div').addClass('btn-active');

    } else {
      alert('Informe um valor para efetuar a operação.');
    }

  });

    $('#inputNum').keypress(function(e) {

      var tecla = (window.event)?event.keyCode:e.wich;

      if ((tecla == 47 && $("#inputNum").val() != "")) {

        valor = parseFloat($('#inputNum').val());

        $('#inputNum').val('');
        operacao = "divisão"
        $('.btn_div').addClass('btn-active');

      }
    });
}

function totalValor() {

  $('.btn_eql').click(function(){

    if ($('#inputNum').val() != "") {
      valor_2 = parseFloat($('#inputNum').val());

      switch (operacao) {
        case 'soma':
          $('#inputNum').val(valor + valor_2);
          break;
        case 'subtração':
          $('#inputNum').val(valor - valor_2);
          break;
        case 'multiplicação':
          $('#inputNum').val(valor * valor_2);
          break;
        case 'divisão':
          $('#inputNum').val(valor / valor_2);
          break;
      }

    } else {
      alert('Informe um valor para efetuar a calculo.');
    }

    $('.btn').removeClass('btn-active');
  });

    $('#inputNum').keypress(function(e) {

      var tecla = (window.event)?event.keyCode:e.wich;

      if (((tecla == 61 || tecla == 13) && $("#inputNum").val() != "")) {

        valor_2 = parseFloat($('#inputNum').val());

        switch (operacao) {
          case 'soma':
            $('#inputNum').val(valor + valor_2);
            break;
          case 'subtração':
            $('#inputNum').val(valor - valor_2);
            break;
          case 'multiplicação':
            $('#inputNum').val(valor * valor_2);
            break;
          case 'divisão':
            $('#inputNum').val(valor / valor_2);
            break;
        }
      $('.btn').removeClass('btn-active');
      }
    });
}



function onlyNumber(){
  $('#inputNum').keypress(function(e) {

    var tecla = (window.event)?event.keyCode:e.wich;

      if ((tecla > 47 && tecla < 58)) {

        return true;

      } else {

        return (tecla == 8 || tecla == 0)?true:false;
      }
  });
}
