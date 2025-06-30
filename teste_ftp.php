<?php
$ftp_server = "189.127.225.249";
$ftp_server_port = "2252";
$ftp_user_name = "cliregdoc";
$ftp_user_pass = "Ibipora@2015";


// set up basic ssl connection
$conn_id = ftp_connect($ftp_server,$ftp_server_port);

// login with username and password
$login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass);

echo ftp_pwd($conn_id);

// close the ssl connection
ftp_close($conn_id);
?>