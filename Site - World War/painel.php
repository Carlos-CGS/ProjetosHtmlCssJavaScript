<?php
$host = "local host";
$user = "root";
$pass = "";
$banco = "cadastro";
$conexao = mysql_connect ($host, $user, $pass) or die (mysql_error ());
mysql_select_db ($banco) or die (mysql_error ());
?>
<?php
Session_Start();
if(!isset($_SESSION["email"]) || !isset($_SENHA["senha"])){
	reader(location: index.html);
	exit;
}else{
	echo "<br /><center><h1>Militar On-line...<h1><center>";
}
?>
<html>

<head>
<title>Painel</title>
<link rel="shortcut icon" type="image/x-icon" href="img/FavconWorldWar.jpg">
</head>

<body>
<br />
<a href="logout.php"><center>Sair do Game</center></a>

</body>


</html>