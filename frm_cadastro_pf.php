<?php include_once ('script_inicio.php'); ?>
<html>
<head>
    <title>Formulário de CADASTRO PESSOA FÍSICA - Registradoc</title>
    <?php include_once ('css.php'); ?>
    <?php include_once ('js.php'); ?>
    <script type="text/javascript">
        $().ready(function() {
            $("#BUScidade").value = "autocomplete_cidades.php", {
                width: 495,
                matchContains: true,
                //mustMatch: true,
                //minChars: 0,
                //multiple: true,
                //highlight: false,
                //multipleSeparator: ",",
                selectFirst: false
            });
        });
    </script>
</head>
<body>
<?php require_once ('body_inicio.php'); ?>
<H1 align="center">Formulário de CADASTRO PESSOA FÍSICA</H1>
<form action="cadastrar_usuario.php" method="post">
    <table class="table table-borderless" width="100%">
        <tr>
            <td colspan="2" align="center">Digite os dados, conforme solicitado abaixo:</td>
        </tr>
        <tr>
            <td align="right" width="50%">Usuário:</td>
            <td align="left" width="50%"><input type="text" name="txt_usuario" id="txt_usuario" placeholder="Digite o nome do usuário"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">Senha:</td>
            <td align="left" width="50%"><input type="text" name="txt_senha" id="txt_senha" placeholder="Digite a senha"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">CPF:</td>
            <td align="left" width="50%"><input type="text" name="txt_cpf" id="txt_cpf" size="50%" placeholder="Digite o CPF"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">Nome:</td>
            <td align="left" width="50%"><input type="text" name="txt_nome" id="txt_nome" size="100%" placeholder="Digite o nome completo"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">CEP:</td>
            <td align="left" width="50%"><input type="text" name="txt_cep" id="txt_cep" size="50%" placeholder="Digite o CEP"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">Endereço:</td>
            <td align="left" width="50%"><input type="text" name="txt_endereco" id="txt_endereco" size="100%" placeholder="Digite o Endereço (Logradouro, Rua, Av...)"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">Número:</td>
            <td align="left" width="50%"><input type="text" name="txt_n_endereco" id="txt_n_endereco" size="100%" placeholder="Digite o número do imóvel"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">Complemento:</td>
            <td align="left" width="50%"><input type="text" name="txt_complemento" id="txt_complemento" size="100%" placeholder="Digite o Complemento (Casa, Apartamento, Bloco...)"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">Bairro:</td>
            <td align="left" width="50%"><input type="text" name="txt_bairro" id="txt_bairro" size="100%" placeholder="Digite o Bairro"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">Município:</td>
            <td align="left" width="50%"><input type="text" name="txt_municipio" id="txt_municipio" size="100%" placeholder="Digite o Município"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">UF:</td>
            <td align="left" width="50%"><input type="text" name="txt_uf" id="txt_uf" size="10%" placeholder="Digite a UF"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">Data de Nascimento:</td>
            <td align="left" width="50%"><input type="text" name="txt_data_nascimento" id="txt_data_nascimento" size="50%" placeholder="Digite a data de Nascimento DD/MM/AAAA"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">Ramo de atuação:</td>
            <td align="left" width="50%"><input type="text" name="txt_ramo_atuacao" id="txt_ramo_atuacao" size="100%" placeholder="Digite o Ramo de atuação"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">Fone:</td>
            <td align="left" width="50%"><input type="text" name="txt_fone" id="txt_fone" size="50%" placeholder="Digite o fone com DDD"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">Celular:</td>
            <td align="left" width="50%"><input type="text" name="txt_celular" id="txt_celular" size="50%" placeholder="Digite o celular com DDD"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">Fax:</td>
            <td align="left" width="50%"><input type="text" name="txt_fax" id="txt_fax" size="50%" placeholder="Digite o fax com DDD"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">Sexo:</td>
            <td align="left" width="50%">
                <input type="radio" name="rdo_sexo" id="M" value="M"/> <label for="M">M</label>
                <input type="radio" name="rdo_sexo" id="F" value="F"/> <label for="F">F</label>
            </td>
        </tr>
        <tr>
            <td align="right" width="50%">Email de contato:</td>
            <td align="left" width="50%"><input type="text" name="txt_email" id="txt_email" size="100%" placeholder="Digite o Email de contato"/></td>
        </tr>
        <tr>
            <td align="right" width="50%">Deseja receber notificações?</td>
            <td align="left" width="50%">
                <input type="radio" name="rdo_notifica" id="S" value="S"/> <label for="S">Sim</label>
                <input type="radio" name="rdo_notifica" id="N" value="N"/> <label for="N">Não</label>
            </td>
        </tr>
        <tr>
            <td align="right" width="50%">Observações:</td>
            <td align="left" width="50%"><input type="text" name="txt_obs" id="txt_obs" size="100%" placeholder="Digite observações complementares..."/></td>
        </tr>
        <tr>
            <td colspan="2" align="center"><input type="submit" value="Cadastrar"> | <a href="index.php">Cancelar</a></td>
        </tr>
    </table>
</form>
</body>
</html>
<?php require_once ('script_fim.php'); ?>