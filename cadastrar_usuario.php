<?php
include_once ('cabecalho.php');
include_once ('funcoes.php');
include_once ('conecta.php');

$txt_usuario = @$_POST['txt_usuario'];
$txt_senha = @$_POST['txt_senha'];
$rdo_pf_pj = @$_POST['rdo_pf_pj'];
$txt_cpf = @$_POST['txt_cpf'];
$txt_cnpj = @$_POST['txt_cnpj'];
$txt_nome = @$_POST['txt_nome'];
$txt_razao_social = @$_POST['txt_razao_social'];
$txt_contato = @$_POST['txt_contato'];
$txt_fone = @$_POST['txt_fone'];
$txt_celular = @$_POST['txt_celular'];
$txt_fax = @$_POST['txt_fax'];
$txt_data_nascimento = @$_POST['txt_data_nascimento'];
$rdo_sexo = @$_POST['rdo_sexo'];
$txt_inscricao_estadual = @$_POST['txt_inscricao_estadual'];
$txt_rg = @$_POST['txt_rg'];
$txt_cnh = @$_POST['txt_cnh'];
$txt_simples_nacional = @$_POST['txt_simples_nacional'];
$txt_cep = @$_POST['txt_cep'];
$txt_endereco = @$_POST['txt_endereco'];
$txt_n_endereco = @$_POST['txt_n_endereco'];
$txt_complemento = @$_POST['txt_complemento'];
$txt_bairro = @$_POST['txt_bairro'];
$txt_municipio = @$_POST['txt_municipio'];
$txt_uf = @$_POST['txt_uf'];
$txt_email = @$_POST['txt_email'];
$txt_email_nf = @$_POST['txt_email_nf'];
$txt_email_cobranca = @$_POST['txt_email_cobranca'];
$txt_obs = @$_POST['txt_obs'];

$tbl_usuarios = "usuarios";
$tbl_clientes = "clientes";

$sql_usuarios_inserir = "INSERT INTO `$tbl_usuarios` (`nome`,`senha`) VALUES ('$txt_usuario','" . md5($txt_senha) . "')";

//die($sql_usuarios_inserir);

if (mysqli_query($conexao,$sql_usuarios_inserir) === TRUE) {
    header('Location: index.php?msg=Usuário cadasrtado com sucesso. Faça login para continuar.');
} else {
    exit("Não foi possível inserir o usuário $txt_usuario. - STRING SQL: $sql_usuarios_inserir - Erro: " . mysqli_error($conexao));
}
?>