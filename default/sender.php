<?php
require("verifica_login.php");
include 'conexao.php';


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$id_email = $_POST['id_email'];//Pega o ID do e-mail cadastrado

$sql = "SELECT id, destinatario, assunto, mensagem FROM email WHERE id = $id_email";
//Busca apenas esse e-mail no banco para enviar e atualizar status 

$result = $conn->query($sql);//// Executa a query e guarda o resultado



if ($result->num_rows == 0) {
    die("Nenhum e-mail pendente para enviar.");
}

// Configurações SMTP protocolo de transporte de email
$smtpConfig = [
    'host'       => 'smart.iagentesmtp.com.br',//servidor
    'port'       => 587,
    'username'   => 'brum@faculdadedombosco.edu.br',//login do seervidor smtp
    'password'   => 'UXTSQ@Z&',
    'from_email' => '24221014@faculdadedombosco.com.br',//minha matricula
    'from_name'  => 'FDB Integrador - Teste',
    'encryption' => null
];

while ($email = $result->fetch_assoc()) {
  
    $mail = new PHPMailer(true);

    try {
        // CONFIG SMTP
        $mail->isSMTP();
        $mail->Host       = $smtpConfig['host'];
        $mail->SMTPAuth   = true;
        $mail->Username   = $smtpConfig['username'];
        $mail->Password   = $smtpConfig['password'];
        $mail->SMTPSecure = $smtpConfig['encryption'];
        $mail->Port       = $smtpConfig['port'];
        $mail->CharSet    = 'UTF-8';

        // REMETENTE
        $mail->setFrom($smtpConfig['from_email'], $smtpConfig['from_name']);

        // DESTINATÁRIO
        $mail->addAddress($email['destinatario']);

        // ASSUNTO E CORPO
        $mail->Subject = $email['assunto'];
        $mail->Body    = $email['mensagem'];
        $mail->AltBody = strip_tags($email['mensagem']);

        // ENVIAR
        if ($mail->send()) {

        // ATUALIZAR STATUS
        $id = $email['id'];
        $conn->query("UPDATE email SET status='e', data_envio=NOW() WHERE id = $id");

        // ====== INSERE LOG DE EMAIL ENVIADO ======
            $data_hora = date('Y-m-d H:i:s');
            $acao = "email enviado";
            $sqlLog = "INSERT INTO logs (data_hora, matricula, aluno, documento, acao)
                       VALUES ('$data_hora', '-', '{$email['destinatario']}', '-', '$acao')";
            $conn->query($sqlLog);
            // ========================================
         // Mensagem para a sessão e log no console
            $_SESSION['msg_email'] = "E-mail enviado com sucesso!";
            echo "<script>console.log('E-mail ID $id enviado');</script>";
            header("Location: enviar_comunicado.php");
            exit;

        } else {
            // ====== INSERE LOG DE ERRO ======
            $data_hora = date('Y-m-d H:i:s');
            $acao = "falha no envio: {$mail->ErrorInfo}";
            $aluno = $conn->real_escape_string($email['destinatario']);
            $sqlLog = "INSERT INTO logs (data_hora, matricula, aluno, documento, acao)
                       VALUES ('$data_hora', '-', '$aluno', '-', '$acao')";
            $conn->query($sqlLog);
            // ========================================
            
            echo "Falha ao enviar e-mail ID {$email['id']}: {$mail->ErrorInfo}<br>";
        }


    } catch (Exception $e) {
        $_SESSION['msg_email'] = "Falha ao enviar e-mail ID $id: {$mail->ErrorInfo}";
    header("Location: enviar_comunicado.php");
    exit;
        //echo "Erro ao enviar e-mail ID {$email['id']}: " . $e->getMessage() . "<br>";
    
    }
    
}

?>