$(document).ready(function(){

		var url = "http://www.feagri.unicamp.br/portal/sistemas-intranet/contatos";
		$.getJSON(url)
		.done(function(data){
			console.log(data);
			$("#listacontatos").empty();
            for (var i = 0; i <data.length; i++) {
                $( 'div#listacontatos' ).append('<div data-role="collapsible" data-collapsed="true">'+'<h3>'+data[i]['nome']+'</h3>'+'<ul class="listitems" data-role="listview">'+'<li>'+'<img src="http://www.feagri.unicamp.br/portal/'+data[i]['foto']+'">'+'</li>'+'<li>'+data[i]['nome']+'</li>'+'<li>'+data[i]['funcao']+'</li>'+'<li><a href="mailto:'+data[i]['email']+'">'+data[i]['email']+'</a></li>'+'<li><a href="tel:'+data[i]['telefone']+'">'+data[i]['telefone']+'</a></li>'+'<li>'+data[i]['orgao']+'</li>'+'<li><a href="'+data[i]['lattes']+'" target="_blank" >'+'LATTES'+'</a></li>'+'</ul></div>');
          	} 
			//+'<li><a href="'+data[i]['link']+'" target="_blank" >'+'LATTES'+'</a></li>'
			
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

