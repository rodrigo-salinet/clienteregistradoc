<?php include_once ('script_inicio.php'); ?>
<html>
<head>
    <title>Área do Cliente Registradoc</title>
    <?php include_once ('css.php'); ?>
    <?php include_once ('js.php'); ?>
</head>
<body id="body_login" style="background-color: #000;">
<?php require_once ('body_inicio.php'); ?>
<form action="logar.php" method="post">
    <table width="100%" style="padding: 30px; z-index: 999;">
        <tr>
            <td align="center">
                <div id="div_frm_login">
                    <div class="container">
                        <div class="row">
                            <div class="col" style="padding: 10px;"><img src="images/biodigital.png" style="width: 40px; vertical-align: text-bottom;"> <span style="font-family: Comfortaa; font-size: 30px; font-weight: bolder;">ÁREA DO CLIENTE</span></div>
                        </div>
                        <div class="row">
                            <div class="col" style="padding: 10px;">
                                <div class="container">
                                    <div class="row">
                                        <div class="col" style="padding: 10px;">
                                            <input type="radio" name="rdo_doc" id="CPF" value="CPF"/>
                                            <label for="rdo_doc">CPF</label>
                                        </div>
                                        <div class="col" style="padding: 10px;">
                                            <input type="radio" name="rdo_doc" id="CNPJ" value="CNPJ"/>
                                            <label for="rdo_doc">CNPJ</label>
                                        </div>
                                    </div>
                                    <div class="row" style="text-align: right">
                                        <div class="col" style="padding: 10px;">
                                            <label for="txt_usuario">Usuário:</label> <input type="text" name="txt_usuario" id="txt_usuario" placeholder="Digite seu usuário"/>
                                        </div>
                                    </div>
                                    <div class="row" style="text-align: right">
                                        <div class="col" style="padding: 10px;">
                                            <label for="txt_senha">Senha:</label> <input type="password" name="txt_senha" id="txt_senha" placeholder="Digite sua senha"/>
                                        </div>
                                    </div>
                                    <div class="row" style="text-align: right">
                                        <div class="col" style="padding: 10px;">
                                            <a href="esqueci_senha.php">Esqueci minha senha</a>
                                        </div>
                                    </div>
                                    <div class="row" style="text-align: right">
                                        <div class="col" style="padding: 10px;">
                                            <input type="submit" value="Acessar" style="background-color: #11b503;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col" style="padding: 10px;">
                                <div class="container">
                                    <div class="row">
                                        <div class="col" style="padding: 10px;">Ainda não é cliente?</div>
                                    </div>
                                    <div class="row" style="color: #194798; padding: 10px;">.</div>
                                    <div class="row">
                                        <div class="col" style="padding: 10px;">
                                            <a class="btn btn-success" href="frm_cadastro_pf.php" style="background-color: #11b503;">CADASTRO PARA VOCÊ (CPF)</a>
                                        </div>
                                    </div>
                                    <div class="row" style="color: #194798; padding: 10px;">.</div>
                                    <div class="row">
                                        <div class="col" style="padding: 10px;">
                                            <a class="btn btn-success" href="frm_cadastro_pj.php" style="background-color: #11b503;">CADASTRO PARA SUA EMPRESA (CNPJ)</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </table>
                </div>
            </td>
        </tr>
    </table>
</form>
<br/>
<?php require_once ('body_fim.php'); ?>
</body>
</html>
<?php require_once ('script_fim.php'); ?>
