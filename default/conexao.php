<?php

//$servername = "193.123.113.234";
$servername = "204.216.145.129";//Banco temporario
//$servername = " 4.228.56.140";
$username   = "iea";
$password   = "iea";
$dbname     = "iea";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}


/*BACKUP
$servername = "127.0.0.1";
$username   = "root";
$password   = "";
$dbname     = "iea";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}*/

?>