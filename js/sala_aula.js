	$(document).ready(function(){
	switch (new Date().getDay()) {
		case 0:
			semana = "0domingo";
			diasemana="Domingo"
			break;
		case 1:
			semana = "1segunda";
			diasemana="Segunda-feira"
			break;
		case 2:
			semana = "2terça";
			diasemana="Terça-feira"
			break;
		case 3:
			semana = "3quarta";
			diasemana="Quarta-feira"
			break;
		case 4:
			semana = "4quinta";
			diasemana="Quinta-feira"
			break;
		case 5:
			semana = "5sexta";
			diasemana="Sexta-feira"
			break;
		case 6:
			semana = "6sábado";
			diasemana="Sábado"
	}
		var url = "http://www.feagri.unicamp.br/portal/sistemas-intranet/grade-horarios?salaaula_ativa=S&salaaula_ano=2016&salaaula_anosemestre=2&salaaula_semana="+semana;
		// busca a URL e cria o array
		$.getJSON (url, function(data){
		// vendo o array no console
		console.log(data);
		//limpa a div (se vc modificar ela não duplica resultados)	
		$("#result").empty();
		// inicio do for no array data
		// ver resultado console.log(data[i]['Disciplina']);
			//$("#result").append('<div class="ui-block-a ui-bar-b">Horário</div><div class="ui-block-b ui-bar-b">Sala</div><div class="ui-block-b ui-bar-b">Turma</div><div class="ui-block-d ui-bar-b">Disciplina</div><div class="ui-block-e ui-bar-b">Docente</div>');
			for (var i = 0; i <data.length; i++) {
				$( "#result" ).append('<tr><td>'+data[i]['Horario']+'</td><td>'+data[i]['Sala']+' </td><td>'+data[i]['Sigla']+' - '+data[i]['Turma']+'<br/>'+data[i]['Disciplina']+'</td>'+'<td>'+'<img src="http://www.feagri.unicamp.br/portal/'+data[i]['Img']+'"><br/>'+data[i]['Docente']+'</td></tr>');
			}
			document.getElementById("dia").innerHTML=diasemana;
	   //append joga os resultados do for dentro da div #result 
	   //ver um dado unitario use data[i]['Disciplina']
	   //append só joga na div, vc pode usar dentro do append tags html, select por exemplo

		});
});