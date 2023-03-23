<html>

<head>
<title> Cadastrando... </title>
<link rel="shortcut icon" type="image/x-icon" href="img/FavconWorldWar.jpg">
</head>

<body background="img/info4.jpg">
<?php
$host = "localhost";
$user = "root";
$pass = "";
$banco = "cadastro";
$conexao = mysql_connect(host, user, pass) or die(mysql_error());
mysql_selec_db($banco) or die(mysql_error());
?>
<?PHP
$nome=$_POST['nome'];
$sobrenome=$_POST['sobrenome'];
$nasc=$_POST['nasc'];
$email=$_POST['email'];
$senha=$_POST['senha'];
$sql = mysql_query("INSERT INTO usuarios(nome, sobrenome, nasc, email, senha)
values('$nome', '$sobrenome', '$nasc', '$email, '$senha')");
echo "<br />

<h1>Cadastro efetuado com sucesso!</h1>
<h2>Efetue o Login para iniciar sua carreira militar...</h2>"

?>

</body>

</html>