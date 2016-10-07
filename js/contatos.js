$(document).ready(function(){

		//var url = "http://www.feagri.unicamp.br/portal/sistemas-intranet/contatos";
		var url = 'http://www.feagri.unicamp.br/portal/templates/simplesimon/includes/contatos.json';
		//var url = 'http://www.feagri.unicamp.br/portal/app/contatos.json';
		
		var $listacontatos = $("#listacontatos");
		$.getJSON(url)
		.done(function(data){

			$listacontatos.empty();
			
			var contatosHTML = '<ul data-role="listview" data-filter="true" data-autodividers="true" data-filter-placeholder="Buscar..." data-inset="true">';           
            $.each(data, function(i, data){
            	contatosHTML += '<li>';
	            contatosHTML += '<a href="#contatoItem';
	            contatosHTML += i;
	            contatosHTML += '">';//link;
				contatosHTML += '<img src="http://www.feagri.unicamp.br/portal/';
				contatosHTML += data.foto;
				contatosHTML += '">';
				contatosHTML += '<h2>';
				contatosHTML += data.nome;
				contatosHTML += '</h2>';
				contatosHTML += '<p>';
				contatosHTML += data.gruponame +' | '+ data.funcao;
				contatosHTML += '</p>';
				contatosHTML += '</a></li>';	 
            });
            contatosHTML += '</ul>';
            
            $listacontatos.html(contatosHTML);
			            
			var contatoPage = '';
			
            $("#listacontatos li a").click(function(){
            	var j = $(this).attr("href");
            	var k = j.replace('#contatoItem','');
            	if (data[k].lattes == null){
            		var l = '#';
            	} else {
            		var l = data[k].lattes;
            	}

            	contatoPage += '<div data-role="page" id="contatoItem' + k + '">';
            	contatoPage += '<div data-role="header" align="center" data-position="fixed"><a href="#contato" class="btn-normal">Voltar</a><img src="images/lg_feagri36.png"/></div>';
				contatoPage += '<div role="main" class="ui-content">';
				contatoPage += '<img src="http://www.feagri.unicamp.br/portal/'+data[k].foto+'">';
				contatoPage += '<h3 class="ui-bar ui-bar-a">'+data[k].nome+'</h3>';
				contatoPage += '<div class="ui-body">';
          		contatoPage += '<p><strong>Grupo de Usuário: </strong>'+data[k].gruponame+'</p>';
          		contatoPage += '<p><strong>Função: </strong>'+data[k].funcao+'</p>';
          		contatoPage += '<p><strong>Email: </strong>';
				contatoPage += '<a href="mailto:'+data[k].email+'">'+data[k].email+'</a></p>';
          		contatoPage += '<p><strong>Telefone: </strong>';
				contatoPage += '<a href="tel:'+data[k].telefone+'">'+data[k].telefone+'</a></p>';
				contatoPage += '<p><strong>Orgão: </strong>'+data[k].orgao+'</p>';
          		contatoPage += '<p><a href="'+l+'" target="_blank" >LATTES</a></p>';
				contatoPage += '</div>';
				contatoPage += '</div></div>';
            	$("body").append(contatoPage);
            	
            });

            

            /*
            for (var i = 0; i <data.length; i++) {
                $( 'div#listacontatos' ).append('<div data-role="collapsible" data-collapsed="true">'+'<h3>'+data[i]['nome']+'</h3>'+'<ul class="listitems" data-role="listview">'+'<li>'+'<img src="http://www.feagri.unicamp.br/portal/'+data[i]['foto']+'">'+'</li>'+'<li>'+data[i]['nome']+'</li>'+'<li>'+data[i]['funcao']+'</li>'+'<li><a href="mailto:'+data[i]['email']+'">'+data[i]['email']+'</a></li>'+'<li><a href="tel:'+data[i]['telefone']+'">'+data[i]['telefone']+'</a></li>'+'<li>'+data[i]['orgao']+'</li>'+'<li><a href="'+data[i]['lattes']+'" target="_blank" >'+'LATTES'+'</a></li>'+'</ul></div>');
          	} 
			//+'<li><a href="'+data[i]['link']+'" target="_blank" >'+'LATTES'+'</a></li>'
			*/
		})
		.fail(function(msg, textStatus, erro){
			document.getElementById("listacontatos").innerHTML="não foi possível exibir os contatos...";
            //alert(textStatus);
			//alert(msg);
			//alert(erro);
            //console.log(erro);
            //console.log(textStatus);
            //console.log(msg);            
		});
		
	
});

