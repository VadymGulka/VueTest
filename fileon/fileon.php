<!doctype html>
<html lang="es">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>fileON - Register</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet">
	<link rel="icon" href="https://i.imgur.com/QiAVEd7.jpg" type="image/png">

</head>

<body class="bg-light">
<div class="container">
	<div class="row">
		<div class="text-center col-12" style="padding-top: 16%">

<?php
//Deshabilita errores en la web
ini_set('display_errors', '0');
//Variables de POST
$codigo = $_POST["codigo"];
$nombre = $_POST["nombre"] . " " . $_POST["apellido"];
$username = $_POST["username"];
$email = $_POST["email"];
$quota = $_POST["quota"];
$grupo = $_POST["grupo"];
$is_ftp = $_POST["ftp"];
$pass = $_POST["pass"];
//Import de JSON
$string = file_get_contents("./fileon.json");
$json_a = json_decode($string, true);
$arr_index = array();
//Variables para BD
$code_status = false;
$is_admin = 0;
$created = null;
//Comprobacion del codigo en POST
foreach ($json_a as $key => $value) {
    if ($value['id'] == $codigo) {
        $arr_index[] = $key;
        $code_status = true;
    }
}
//Si es correcto se bora del archivo JSON
if ($code_status) {
    echo "Codigo correcto";
    foreach ($arr_index as $i) {
        if ($json_a[$i]['isAdmin'] == 1) {
            $is_admin = 1;
        }
        unset($json_a[$i]);
    };
    $json_a = array_values($json_a);
    file_put_contents('fileon.json', json_encode($json_a, JSON_PRETTY_PRINT));
    echo `sudo su -s /bin/sh www-data -c 'export OC_PASS="'$pass'" && php /var/www/nextcloud/occ user:add --password-from-env --group="'$grupo'" --display-name="'$name'"  "'$username'"'`;
    echo `sudo su -s /bin/sh www-data -c 'php /var/www/nextcloud/occ user:setting "'$username'" settings email "'$email'" '`;
    echo `sudo su -s /bin/sh www-data -c 'php /var/www/nextcloud/occ user:setting "'$username'" files quota "'$quota'"GB '`;
    if ($is_admin == 1) {
        echo `sudo su -s /bin/sh www-data -c 'php occ group:adduser admin "'$username'"'`;
    }
    if ($is_ftp) {
        echo `sudo useradd {$username} || true`;
        echo `sudo echo -e {$pass}"\n"{$pass} | sudo passwd {$username}`;

        echo `sudo mkdir /var/datacloud/{$username}/files || true`;
        echo `sudo chown -R www-data:www-data /var/datacloud/{$username}/files`;
        echo `sudo chmod -R 775 /var/datacloud/{$username}/files`;

        echo `sudo usermod -d /var/datacloud/{$username}/files {$username}`;
        echo `sudo usermod -a -G www-data {$username}`;
    }
//TODO CHECK FTP
    //TODO ADD GROUPUS NEXCLOUD/HTML
} else {
    echo "Codigo incorrecto";
}

//Logs en la BD "fileon"
$conn = new mysqli("localhost", "fileon", "fileon", "fileon");
if ($conn->connect_error) {
    die("Error de conexion: " . $conn->connect_error);
};
$sql = "INSERT INTO `fileon`.`users` (`nombre`, `username`, `email`, `quota`, `grupo`, `is_admin`, `is_ftp`, `creado`, `code`) VALUES ('$nombre', '$username', '$email', '$quota', '$grupo', '$is_admin', '$is_ftp' , '$code_status', '$codigo')";
if (!$conn->query($sql) === true) {
    echo "Error de conexion" . "<br>" . $conn->error;
}
$conn->close();




  //echo '<div class="alert alert-success" role="alert">Usuario creado correctamente, pulsa <a href="http://3.90.208.115/nextcloud/" class="alert-link"> aqui</a> para acceder al sitio "fileON" con su usuarios y contraseña</div>';









?>

















</div>
	</div>
	</div>
</body>

</html>











