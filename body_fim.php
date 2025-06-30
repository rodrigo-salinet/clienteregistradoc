<SCRIPT LANGUAGE="JAVASCRIPT" TYPE="TEXT/JAVASCRIPT">
    <?php $msg = NULL;
        if (@$_GET['msg']) {
            $msg = trim(@$_GET['msg']);
        }
        if (@$msg != '') { ?>
    window.alert('<?php echo $msg; ?>');
    <?php } ?>
</SCRIPT>

<!-- Rodapé -->
<footer>
    <div class="container-footer" id="rodape">
        <div class="row">
            <div class="col"><img src="images/mundo.png"/> Copyright  www.clienteregistradoc.com.br © - Todos os direitos reservados.</div>
            <div class="col" title="Horário de atendimento: de segunda a sexta feira das 09:00 às 16:00."><img src="images/gps.png"/> Rua João Wyclif, 111, sala 206, Londrina/PR – CEP 86050-450</div>
            <div class="col">Desenvolvido por Rodrigo Salinet © <a href="mailto:suporte@registradoc.com.br" style="color: #fff;">suporte@registradoc.com.br</a></div>
            <div class="col" title="Horário de atendimento: de segunda a sexta feira das 09:00 às 16:00."><img src="images/fone.png"/> Central de atendimento: <a href="tel:+554333390900" style="color: #fff;">(43) 3339-0900</a></div>
            <div class="col" title="Horário de atendimento: de segunda a sexta feira das 09:00 às 16:00."><img src="images/whatsapp.png"/> Whatsapp Suporte: <a href="https://api.whatsapp.com/send?phone=5543984464716" style="color: #fff;">(43) 98446-4716</a></div>
        </div>
    </div>
</footer>
