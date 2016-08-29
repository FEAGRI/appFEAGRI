      (function () {
    "use strict";
    /* hook up event handlers */
    function register_event_handlers() {
 
        window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
   
        var notificationOpenedCallback = function(jsonData) {
            alert("Você recebeu uma mensagem \n " +jsonData.message);
            //alert('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
        };
 
        window.plugins.OneSignal.init("18c07249-56aa-4a8c-8959-c8fa2ced859a", {
                googleProjectNumber: "109045822504"
        },
        notificationOpenedCallback);
             
        window.plugins.OneSignal.sendTag("free","livre" );
 
        // Show an alert box if a notification comes in when the user is in your app.
        
        $("button").on("click", function (e) {
            e.preventDefault();
            var usuario = $("#usuario option:selected").text();
            var aluno = $("#aluno option:selected").text();
            var ano = $("#ano option:selected").text();

            var usuarioVal = $("#usuario option:selected").attr("value");
            var alunoVal = $("#aluno option:selected").attr("value");
            var anoVal = $("#ano option:selected").attr("value");
            
            var mydate = new Date();
            var year = mydate.getFullYear();    
            var idade = (year - ano);

            
            if(usuarioVal !== "0" ){
                window.plugins.OneSignal.sendTag("Usuario", usuario);
                window.plugins.OneSignal.sendTag("Aluno", aluno);
                window.plugins.OneSignal.sendTag("ano", ano);

                var resHtml = '<div> Usuário: ' + usuario + '</div>';
                resHtml += '<div> Ano de ingresso: ' + ano + '</div>';
                $("#dadosuser").html(resHtml);
            } else {
                alert("Campo usuário é necessário!");
            }
            
            
        });

        window.plugins.OneSignal.getTags(function(tags) {
                alert('Tags Received: ' + JSON.stringify(tags));
        });
 
        // Show an alert box if a notification comes in when the user is in your app.
        window.plugins.OneSignal.enableInAppAlertNotification(true);
        window.plugins.OneSignal.enableNotificationsWhenActive(true);
        window.plugins.OneSignal.enableSound(true);
       

    }
    document.addEventListener("app.Ready", register_event_handlers, false);
})();

