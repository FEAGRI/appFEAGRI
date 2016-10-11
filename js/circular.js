$(document).ready(function() {


    $('a.btn-circular').click(function() {
        $("#result-circular").empty();
        var baseurl = "http://www.feagri.unicamp.br/portal/sistemas-intranet/circular-interno?";
        var ci_circular = $("#ci_circular").val();
        var ci_ponto = $("#ci_ponto").val();
        var url = baseurl + "ci_circular=" + ci_circular + "&ci_ponto=" + ci_ponto;
        //var url = "js/circular.json";
        $.getJSON(url)
            .done(function(data) {
                var result = '';
                var pne = '';
                //limpa a div (se vc modificar ela não duplica resultados)	
                $("#result-circular").empty();
                $("#result-circular").append('<h4>Circular ' + ci_circular + ' - Ponto: ' + ci_ponto + '</h4>');
                for (var i = 0; i < data.length; i++) {
                    if (data[i]["PNE"] === "SIM") {
                        pne = '<i class="fa fa-wheelchair fa-lg"></i>';
                    } else { pne = '' }
                    var listHtml = '<li>';
                    listHtml += '<div class="circular-num">' + data[i]["C"] + '</div>';
                    if (data[i]["Via"] !== "") {
                        listHtml += '<div class="circular-via">' + data[i]["Via"] + '</div>';
                    }
                    listHtml += '<div class="circular-pne">' + pne + '</div>';
                    listHtml += '<div class="circular-ponto">' + data[i]["Ponto"] + '</div>';
                    listHtml += '<div class="circular-horario">' + data[i]["Horário"] + '</div>';
                    listHtml += '</li>';
                    result += listHtml;

                }

                $("#result-circular").append(result);

            })
            .fail(function() {
                $("#result-circular").empty();
                $("#result-circular").append('<p class="alerta">Não existem resultados a exibir!</p>');
            });
    });


});