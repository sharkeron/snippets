<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['mail'])&&$_POST['mail']!="")&&(isset($_POST['message'])&&$_POST['message']!="")){ //Check data for empty

$to = 'gg@gg.gg'; // email addresses
$subject = $_POST['subject']; // Title of message

 if((isset($_POST['mail'])&&$_POST['mail']!="")) {
     $mail = '<p>Почта: '.$_POST['mail'].'</p>';
 } else {
     $mail = '';
 }
 if((isset($_POST['question'])&&$_POST['question']!="")) {
     $message_text = '<p>Вопрос: '.$_POST['question'].'</p>';
 } else {
     $message_text = '';
 }

$message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        '.$mail.'
                        '.$message_text.'
                    </body>
                </html>'; 
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
// $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
mail($to, $subject, $message, $headers); 
?>