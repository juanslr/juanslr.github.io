get_server_status();
function get_server_status() {
    $('#statue').html("");
    $('#favicon').attr('src', "pack.png");

    let server_url = '90.106.175.28';
    let server_port = '25565';
    let server_url_full = `https://api.minetools.eu/ping/${server_url}/${server_port}`;


    $.getJSON(server_url_full, function(api) {
        if (api.error) {
            $('#statue').html('Server cerrado.');
            return false;
        }
        let online_player = '';
        if (api.players.sample.length > 0) {
            online_player = '<br>Online Player: ' + api.players.sample[0].name;
        }

        $('#statue').html(`<br><span class="fw-bold">Jugadores online:</span> ${api.players.online}/${api.players.max}`);
        if (api.favicon == null) {
            api.favicon = "pack.png";
        }

        $('#name').html(api.description.replace(/§(.+?)/gi, '') + `<br><span class="fw-bold">version:</span> ${api.version.name}`);
        if (api.favicon == null) {
            api.favicon = "pack.png";
        }

        $('#favicon').attr('src', api.favicon);
    });

    $("#server_url_title").html("IP: "+server_url);
}