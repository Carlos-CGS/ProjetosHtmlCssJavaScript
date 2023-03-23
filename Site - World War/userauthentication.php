<?php
$host = "local host";
$user = "root";
$pass = "";
$banco = "cadastro";
$conexao = mysql_connect ($host, $user, $pass) or die (mysql_error ());
mysql_select_db ($banco) or die (mysql_error ());
?>

<html>

<head>
<title> Autenticando Militar </title>
<link rel="shortcut icon" type="image/x-icon" href="img/FavconWorldWar.jpg">
<script type="text/javascript">
function loginsuccessfully(){
	setTimeout ("window.location='painel.php'", 5000);
}

function loginfailed(){
	setTimeout("window.location='login.php'", 5000);
}
</head>

<body bgcolor="#AAAAAA">
<?php
$email=$_POST['email'];
$senha=$_POST['senha'];
$sql = mysql_query ("select * FROM usuarios WHERE email='$email' and senha='$senha'") or die (mysql_error());
$row = mysql_num_rows($sql);
if ($row > 0) {
	session_start();
	$_SESSION['email']=$_POST['email'];
	$_SESSION['senha']=$_POST['senha'];
	echo "<br /><br /><h1><center>Credenciais Válidas - Militar autorizado...<br />
	Aguarde um instante...<br />
	Redirecionando...</center></h1>";
	echo "<script>,loginsuccessfully()</script>";
}else{
	echo = "<br /><br /><h1><center>Acesso Negado - Verifique suas Credenciais...<br />
	Aguarde um Instante...<br />
	Redirecionando...</center></h1>";
	echo = "<script>loginfailed()</Script>";
}
?>
</body>

</html>