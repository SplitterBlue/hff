var KEY = prompt("paste login key")
$('<meta name="google-signin-client_id" content="' + KEY + '">').appendTo("head");