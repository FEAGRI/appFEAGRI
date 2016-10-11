$(document).ready(function() {

    $('.btn-circular').click(function() {
        var baseurl = "http://www.feagri.unicamp.br/portal/sistemas-intranet/circular-interno?";
        var ci_circular = $("#ci_circular").val();
        var ci_ponto = $("#ci_ponto").val();

        //var url = baseurl + "ci_circular=" + ci_circular + "&ci_ponto=" + ci_ponto;
        var url = "js/mock/circular.json";
        // busca a URL e cria o array
        $.getJSON(url)
            .done(function(data) {
                var result = '';
                //limpa a div (se vc modificar ela não duplica resultados)	
                $("#result").empty();
                for (var i = 0; i < data.length; i++) {
                    var listHtml = '<li>';
                    listHtml += '<div class="circular-num">' + data[i]["C"] + '</div>';
                    listHtml += '<div class="circular-via">' + data[i]["Via"] + '</div>';
                    listHtml += '<div class="circular-pne">' + data[i]["PNE"] + '</div>';
                    listHtml += '<div class="circular-ponto">' + data[i]["Ponto"] + '</div>';
                    listHtml += '<div class="circular-horario">' + data[i]["Horário"] + '</div>';
                    listHtml += '</li>';
                    result += listHtml;

                }
                $("#result").append(result);

            })
            .fail(function() {
                $("#result").append("Não existem resultados a exibir!");
            });
    });


});