$(document).ready(function(){
	
	$('.button-ui').click(function(){
		var protoc_pessoa = $("#protoc_pessoa").val();
		var protoc_num = $("#protoc_num").val();
		switch (protoc_pessoa) {
			case '0':
				var protoc_aluno = $("#protoc_aluno").val();
				var url = "http://www.feagri.unicamp.br/portal/sistemas-intranet/consulta-protocolo?protoc_pessoa="+protoc_pessoa+"&protoc_aluno="+protoc_aluno+"&protoc_num="+protoc_num;
				break;
			case '1':
				var protoc_funcionario = $("#protoc_funcionario").val();
				var url = "http://www.feagri.unicamp.br/portal/sistemas-intranet/consulta-protocolo?protoc_pessoa="+protoc_pessoa+"&protoc_funcionario="+protoc_funcionario+"&protoc_num="+protoc_num;
				break;
			case '2':
				var protoc_outros = $("#protoc_outros").val();
				var url = "http://www.feagri.unicamp.br/portal/sistemas-intranet/consulta-protocolo?protoc_pessoa="+protoc_pessoa+"&protoc_outros="+protoc_outros+"&protoc_num="+protoc_num;
				break;
		}		
		$.getJSON(url)
		.done(function(data){
			//limpa a div (se vc modificar ela não duplica resultados)	
			$("#resultprotoc").empty();
			$("#resultprotoc").append('<h3>Status</h3>');
			var statustext, dataretorno, datas, dia, dias, mes, mess, ano, anos, dataatual;
						
			for (var i = 0; i <data.length; i++) {
				switch (data[i]['status']) {
					case '0':
						statustext = 'PENDENTE';
						break;
					case '1':
						statustext = 'ANDAMENTO';
						break;
					case '2':
						statustext = 'ANALISE';
						break;
					case '3':
						statustext = 'EMITIDO PARECER';
						break;
					case '4':
						statustext = 'FINALIZADO';
						break;
					case '5':
						statustext = 'ARQUIVADO';
						break;
			}		
				dataretorno = data[i]['data'];
				dia = dataretorno.substring(10,8);
				mes = dataretorno.substring(8,4);
				ano = dataretorno.substring(0,4);
				dataatual=dia+mes+ano;
				datas = data[i]['datasolicita'];
				dias = datas.substring(10,8);
				mess = datas.substring(8,4);
				anos = datas.substring(0,4);
				datas=dias+mess+anos;
				
				$( "#resultprotoc" ).append('<div id="'+data[i]['id']+'"><button type="button" class="ui-btn ui-shadow ui-corner-all">'+dataatual+'</button><div style="display:none" class="protocoloa">'+'<div><b>Data Envio/Retorno:</b> '+ dataatual+'</div>'+'<div><b>Status:</b> '+ statustext+'</div>'+'<div><b>Local:</b> '+ data[i]['local']+'</div>'+'<div><b>Descrição:</b> '+data[i]['descricao']+'</div>'+'<div><b>Data Solicitação:</b> '+datas+'</div>'+'<div><b>Serviço Solicitado:</b> '+data[i]['servico']+'</div>'+'<div><b>Solicitante:</b> '+data[i]['nome']+'</div>'+'</div></div>');
			}
		})
		.fail(function(msg, textStatus, erro){
			document.getElementById("resultprotoc").innerHTML="não foi possível exibir o resultado...";            
		});
	});
	$(document).on('click', '#resultprotoc div', function() {
		$(this).find('.protocoloa').toggle();
	});
	
});
	
