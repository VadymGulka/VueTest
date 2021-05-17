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
ini_set('display_errors', '0');
$codigo = $_POST["codigo"];
$nombre = $_POST["nombre"] . " " . $_POST["apellido"];
$username = $_POST["username"];
$email = $_POST["email"];
$quota = $_POST["quota"];
$is_admin = $_POST["tipo"];
$is_ftp = $_POST["ftp"];
$pass = $_POST["pass"];


$string = file_get_contents("./fileon.json");
$json_a = json_decode($string, true);

foreach ($json_a as $json) {
    echo $json['codigo'] . "<br>";
}




$conn = new mysqli("localhost", "fileon", "fileon", "fileon");
if ($conn->connect_error) {
    die("Error de conexion: " . $conn->connect_error);
};




$sql = "INSERT INTO `fileon`.`users` (`nombre`, `username`, `email`, `quota`, `is_admin`, `is_ftp`) VALUES ('$nombre', '$username', '$email', '$quota', '$is_admin', '$is_ftp')";

if ($conn->query($sql) === true) {
    echo '<div class="alert alert-success" role="alert">Usuario creado correctamente, pulsa <a href="http://3.90.208.115/nextcloud/" class="alert-link"> aqui</a> para acceder al sitio "fileON" con su usuarios y contraseña</div>';
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


  $conn->close();

  echo `export OC_PASS={$pass}`;
  echo `sudo su -s /bin/sh www-data -c 'php /var/www/nextcloud/occ user:add --password-from-env --display-name={$name} {$username}'`;
  echo `sudo -u www-data php /var/www/nextcloud/occ user:setting {$username} settings email {$email};`
  
  ?>printenv





















</div>
	</div>
	</div>
</body>

</html>











