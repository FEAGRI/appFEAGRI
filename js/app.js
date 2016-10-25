/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */


// For improved debugging and maintenance of your app, it is highly
// recommended that you separate your JavaScript from your HTML files.
// Use the addEventListener() method to associate events with DOM elements.

// For example:

// var el ;
// el = document.getElementById("id_myButton") ;
// el.addEventListener("click", myEventHandler, false) ;

// The function below is an example of the best way to "start" your app.
// This example is calling the standard Cordova "hide splashscreen" function.
// You can add other code to it or add additional functions that are triggered
// by the same event or other events.

function onAppReady() {
    if (navigator.splashscreen && navigator.splashscreen.hide) { // Cordova API detected
        navigator.splashscreen.hide();
    }
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'Conexão não detectada';
    states[Connection.ETHERNET] = 'Ethernet conexão';
    states[Connection.WIFI] = 'Conexão WiFi';
    states[Connection.CELL_2G] = 'Conexão 2G';
    states[Connection.CELL_3G] = 'Conexão 3G';
    states[Connection.CELL_4G] = 'Conexão 4G';
    states[Connection.CELL] = 'Conexão Genérica Celular';
    states[Connection.NONE] = 'Nenhuma conexão de rede';

    //alert('Connection type: ' + states[networkState]);

    document.getElementById("network").innerHTML = states[networkState];

    //document.getElementById("cordova").innerHTML = device.cordova;
    //document.getElementById("model").innerHTML = device.model;
    //document.getElementById("platform").innerHTML = device.platform;
    //document.getElementById("version").innerHTML = device.version;
    //document.getElementById("manufacturer").innerHTML = device.manufacturer;
}
document.addEventListener("app.Ready", onAppReady, false);
document.addEventListener("deviceready", onAppReady, false);
document.addEventListener("onload", onAppReady, false);

// The app.Ready event shown above is generated by the init-dev.js file; it
// unifies a variety of common "ready" events. See the init-dev.js file for
// more details. You can use a different event to start your app, instead of
// this event. A few examples are shown in the sample code above. If you are
// using Cordova plugins you need to either use this app.Ready event or the
// standard Crordova deviceready event. Others will either not work or will
// work poorly.

// NOTE: change "dev.LOG" in "init-dev.js" to "true" to enable some console.log
// messages that can help you debug Cordova app initialization issues.

$(document).ready(function() {


    $('#protoc_pessoa').change(function() {
        $('#documento').css("display", "block");
        $('#documento').empty();
        $("#documento").append('');
        if ($(this).val() == 0) { // Alunos
            $("#documento").append('<label for="protoc_aluno" class="ui-hidden-accessible">Aluno (RA)</label>');
            $("#documento").append('<div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input type="number" name="protoc_aluno" id="protoc_aluno" placeholder="Aluno (RA)" required /></div>');
        } else if ($(this).val() == 1) { // Funcionários/Docentes
            $("#documento").append('<label for="protoc_funcionario" class="ui-hidden-accessible">Funcionário/Docente (Matrícula)</label>');
            $("#documento").append('<div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input type="number" name="protoc_funcionario" id="protoc_funcionario" placeholder="Funcionário/Docente (Matrícula)" required /></div>');
        } else if ($(this).val() == 2) { // Outros
            $("#documento").append('<label for="protoc_outros" class="ui-hidden-accessible">CPF</label>');
            $("#documento").append('<div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input type="number" name="protoc_outros" id="protoc_outros" placeholder="CPF" required /></div>');
        }
    });

    /*Perfil de Usuário*/
    var $select = $("#ano");

    var $select = $("#ano");
    $select.append("<option value='0'>Ano de Ingresso</option>");
    for (var i = 2016; i > 2007; i--) {
        $select.append("<option>" + i + "</option>");
    }
    $("#fieldAluno").hide();
    $("#fieldAno").hide();
    $("#usuario").on("change", function() {
        var $usuario = $(this).val();
        if ($usuario !== "aluno") {
            $("#fieldAluno").hide();
            $("#fieldAno").hide();
        } else {
            $("#fieldAluno").show();
            $("#fieldAno").show();
        }
    });

    // Inicia o Painel
    $("#appmenu").panel();
    /*
        $( "#appmenu li a" ).on('click', function(){
            var currentPage = $(this).attr("href");
            
            var activePage = $( "div[data-role=page]" ).pagecontainer( "getActivePage" );
            console.log(activePage);
            //$( "#appmenu li a" ).addClass("ui-btn-active");
        });
    */

    // Show an alert box if a notification comes in when the user is in your app.

    $("button").on("click", function(e) {
            e.preventDefault();
            var usuario = $("#usuario option:selected").text();
            var aluno = $("#aluno option:selected").text();
            var ano = $("#ano option:selected").text();

            var usuarioVal = $("#usuario option:selected").attr("value");
            var alunoVal = $("#aluno option:selected").attr("value");
            var anoVal = $("#ano option:selected").attr("value");
            var matricula = $("#matricula").prop("value");

            var mydate = new Date();
            var year = mydate.getFullYear();
            var idade = (year - ano);

            if (usuarioVal !== "0") {
                window.plugins.OneSignal.sendTag("usuario", usuarioVal);
                window.plugins.OneSignal.sendTag("matricula", matricula);
                window.plugins.OneSignal.deleteTags(["aluno", "ano"]);

                if (usuarioVal !== "0") {
                    window.plugins.OneSignal.sendTag("usuario", usuarioVal);
                    window.plugins.OneSignal.sendTag("matricula", matricula);
                    window.plugins.OneSignal.deleteTags(["aluno", "ano"]);
                    if (usuarioVal == "funcionario" || usuarioVal == "docente" || usuarioVal == "pesquisador") {
                        window.plugins.OneSignal.deleteTags(["aluno", "ano"]);
                    }
                    if (alunoVal !== "0") {
                        window.plugins.OneSignal.sendTag("aluno", alunoVal);
                        window.plugins.OneSignal.sendTag("ano", ano);
                    } else {
                        if (usuarioVal == 'aluno') {
                            alert("Campo Se Aluno - Escolha, é necessário!");
                            alert("Campo Ano de Ingresso, é necessário!");

                        }
                    }
                    var resHtml = '<div> Matricula: ' + matricula + '</div>';
                    resHtml += '<div> Usuário ' + usuario + '</div>';
                    resHtml += '<div> Tipo de Aluno: ' + aluno + '</div>';
                    resHtml += '<div> Ano de ingresso: ' + ano + '</div>';
                    $("#dadosuser").html(resHtml);
                } else {
                    if (usuarioVal == 'aluno') {
                        alert("Campo Se Aluno - Escolha, é necessário!");
                        alert("Campo Ano de Ingresso, é necessário!");

                    }
                }
                var resHtml = '<div> Matricula: ' + matricula + '</div>';
                resHtml += '<div> Usuário ' + usuario + '</div>';
                resHtml += '<div> Tipo de Aluno: ' + aluno + '</div>';
                resHtml += '<div> Ano de ingresso: ' + ano + '</div>';
                $("#dadosuser").html(resHtml);
            } else {
                alert("Campo usuário é necessário!");
            }
      
    });
});