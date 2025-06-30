<?php
include_once ('conecta.php');

if ($_SESSION['usuario'] && $_SESSION['senha'] != NULL) {
    header('Location: principal.php');
    while (@ob_end_flush()) ;
}

?>
