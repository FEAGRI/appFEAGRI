$(document).ready(function(){

	//var url = "http://www.feagri.unicamp.br/portal/templates/simplesimon/includes/weblinks.php";
	var url = "js/teste.json";
	var $weblinks = $("#weblinks");

	$.getJSON(url)
	.done(function(data){
        
        $weblinks.empty();
		
		var stringHTML = "";	
		$.each(data, function(i, data){
			stringHTML += '<div data-role="collapsible" data-collapsed="true"><h3>';
			stringHTML += data.catname;
			stringHTML += '</h3><ul class="listitems" data-role="listview">';
			$.each(data.data, function(i, datain){
				stringHTML += '<li><a href="';
				stringHTML += datain.url;
				stringHTML += '" target="_blank" >';
				stringHTML += datain.title;
				stringHTML += '</a></li>';	
			});
			stringHTML += '</ul></div>';
		});

		$weblinks.html(stringHTML);
	})
    
	.fail(function(msg, textStatus, erro){
		$weblinks.html("Não foi possível exibir as informações(links)...");
        //alert(textStatus);
		//alert(msg);
		//alert(erro);
        console.log(erro);
        console.log(textStatus);
        console.log(msg);            
	});
	
});

