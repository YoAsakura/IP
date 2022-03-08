<?php
$fio = $_POST['fio'];
$fio = htmlspecialchars($fio);
$fio = urldecode($fio);
$fio = trim($fio);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("Данные с сайта", "Заявка с сайта", "Информация:".$fio,"From: romamurunov@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>