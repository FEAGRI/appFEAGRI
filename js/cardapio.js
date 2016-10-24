$(document).ready(function() {
        switch (new Date().getDay()) {
            case 0:
                diasemana = "Domingo"
                break;
            case 1:
                diasemana = "Segunda-feira"
                break;
            case 2:
                diasemana = "Terça-feira"
                break;
            case 3:
                diasemana = "Quarta-feira"
                break;
            case 4:
                diasemana = "Quinta-feira"
                break;
            case 5:
                diasemana = "Sexta-feira"
                break;
            case 6:
                diasemana = "Sábado"
        }

    //var url = 'http://www.feagri.unicamp.br/portal/templates/simplesimon/includes/lercardapio.html';
    var url = 'http://www.feagri.unicamp.br/portal/templates/simplesimon/includes/cardapio.json';

    var $cardapio = $(".cardapio");

    $.getJSON(url)
        .done(function(data) {
            $cardapio.empty();

            var cafe = '<div class="cafe"><h3>Café da Manhã</h3><p>'
            cafe += data['Café da manhã'];
            cafe += '</p></div>';

            var almoco = '<div class="almoco"><h3>Almoço</h3><p>'
            almoco += data['Almoço'].replace(/(?:\r\n|\r|\n)/g, '<br />');
            almoco += '</p></div>';

            var almocoVeg = '<div class="almocoVeg"><h3>Almoço Vegetariano</h3><p>'
            almocoVeg += data['Almoço Vegetariano'].replace(/(?:\r\n|\r|\n)/g, '<br />');
            almocoVeg += '</p></div>';

            var jantar = '<div class="jantar"><h3>Jantar</h3><p>'
            jantar += data['Jantar'].replace(/(?:\r\n|\r|\n)/g, '<br />');
            jantar += '</p></div>';

            var jantarVeg = '<div class="jantarVeg"><h3>Jantar Vegetariano</h3><p>'
            jantarVeg += data['Jantar Vegetariano'].replace(/(?:\r\n|\r|\n)/g, '<br />');
            jantarVeg += '</p></div>';

            $cardapio.append(cafe + almoco + almocoVeg + jantar + jantarVeg);
            document.getElementById("diacardapio").innerHTML = diasemana;

        })
        .fail(function() {
            $cardapio.append('<p class="alerta">Não existem cardápios disponíveis!</p>');;
        }); // end fail

}); // end document ready