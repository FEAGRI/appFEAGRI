$(document).ready(function(){

		var urls = "http://www.feagri.unicamp.br/portal/templates/simplesimon/includes/weblinks.php";
		$.getJSON(urls)
		.done(function(data){
			console.log(data);
            $("#weblinks").empty();
/*			$("#weblinks").append('<div data-role="collapsible" data-collapsed="true">'+'<h3>Acadêmico</h3>'+'<ul class="listitems" data-role="listview">');
            for (var i = 0; i <data.length; i++) {
                $( 'ul.listitems' ).append('<li><a href="'+data[i]['url']+'" target="_blank" >'+data[i]['title']+'</a></li>');
          	}                  
*/			
			var mostraacademico="";
			var mostraadm="";
			
			fechar = "</ul></div>";
			academico = '<div data-role="collapsible" data-collapsed="true">'+'<h3>Acadêmico</h3>'+'<ul class="listitems" data-role="listview">';
			$.each(data.academico, function(i, x){
				mostraacademico += '<li><a href="'+x.url+'" target="_blank" >'+x.title+'</a></li>';
			});
			$("#weblinks").html(academico+mostraacademico+fechar);
			
			adm = '<div data-role="collapsible" data-collapsed="true">'+'<h3>Administrativo</h3>'+'<ul class="listitems" data-role="listview">';
			$.each(data.administrativo, function(i, x){
				mostraadm += '<li><a href="'+x.url+'" target="_blank" >'+x.title+'</a></li>';
			});
			$("#weblinks").html(adm+mostraadm+fechar);
		})
        
		.fail(function(msg, textStatus, erro){
			document.getElementById("weblinks").innerHTML="não foi possível exibir as informações(links)...";
            //alert(textStatus);
			//alert(msg);
			//alert(erro);
            console.log(erro);
            console.log(textStatus);
            console.log(msg);            
		});
		

	
});

