<?php
    $name = $_POST['input-name'];
    $email = $_POST['input-email'];
    $message = $_POST['input-message'];
    $subject = $_POST['input-subject'];
    $from = 'From: TangledDemo'; 
    $to = 'flowvlad@gmail.com'; 
    $human = 4;
			
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
				
    if ($_POST['input-submit'] && $human == '4') {				 
        if (mail ($to, $subject, $body, $from)) { 
	    echo '<p>Your message has been sent!</p>';
	} else { 
	    echo '<p>Something went wrong, go back and try again!</p>'; 
	} 
    } else if ($_POST['submit'] && $human != '4') {
	echo '<p>You answered the anti-spam question incorrectly!</p>';
    }
?>