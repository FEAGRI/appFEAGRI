      (function () {
    "use strict";
    /* hook up event handlers */
    function register_event_handlers() {
 
        //window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
   
        var notificationOpenedCallback = function(jsonData) {
            alert("Mensagem enviada da FEAGRI \n " +jsonData.message);
            //alert('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
        };
 
        window.plugins.OneSignal.init("18c07249-56aa-4a8c-8959-c8fa2ced859a", {
                googleProjectNumber: "109045822504"
        },
        notificationOpenedCallback);
             
        //window.plugins.OneSignal.sendTag("free","livre" );
 
 
        window.plugins.OneSignal.getTags(function(tags) {
                //alert('Tags Received: ' + JSON.stringify(tags));
        });
 
        // Show an alert box if a notification comes in when the user is in your app.
        window.plugins.OneSignal.enableInAppAlertNotification(true);
        window.plugins.OneSignal.enableNotificationsWhenActive(true);
        window.plugins.OneSignal.enableSound(true);
       

    }
    document.addEventListener("app.Ready", register_event_handlers, false);
})();

