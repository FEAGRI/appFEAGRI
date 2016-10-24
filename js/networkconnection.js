"use strict";

// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.

document.addEventListener('deviceready', function() {
    // Enable to debug issues.
    // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

    var notificationOpenedCallback = function(jsonData) {
        alert(jsonData.additionalData.title + "\n " + jsonData.message);
        //alert('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
    };

    // var notificationOpenedCallback = function(jsonData) {
    //     console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    // };

    window.plugins.OneSignal
        .startInit("18c07249-56aa-4a8c-8959-c8fa2ced859a", "109045822504")
        .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.InAppAlert)
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();

    // Show an alert box if a notification comes in when the user is in your app.
    //window.plugins.OneSignal.enableInAppAlertNotification(true);
    //window.plugins.OneSignal.enableNotificationsWhenActive(true);
    window.plugins.OneSignal.enableSound(true);

}, false);