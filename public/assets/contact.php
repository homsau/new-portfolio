<?php
if($_POST["submit"]) {
    mail("james.p.cowart@gmail.com", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>