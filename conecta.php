<?php
$txt_usuario = trim(@$_POST['txt_usuario']);
$txt_senha = md5(trim(@$_POST['txt_senha']));

@session_start();
$_SESSION['usuario'] = NULL;
$_SESSION['senha'] = NULL;
if ($txt_usuario && $txt_senha != '') {
    $_SESSION['usuario'] = $txt_usuario;
    $_SESSION['senha'] = $txt_senha;
}

$host = 'localhost';
if ($_SERVER['SERVER_NAME'] != 'localhost') {
    $host = 'cliregdoc.mysql.dbaas.com.br';
}

$db = 'cliregdoc';
$usuario = 'cliregdoc';
$senha = 'Ibipora@2015';

$conexao = mysqli_connect($host,$usuario,$senha);

mysqli_select_db($conexao,$db);
?>