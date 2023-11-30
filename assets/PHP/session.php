<?php
   include('config.php');
   session_start();

   // Checks if the user is logged in
   if(isset($_SESSION['login_user'])) {
    $email_check = $_SESSION['login_user'];


    $ses_sql = mysqli_query($db, "select * from customers where email = '$email_check' ");

    $row = mysqli_fetch_array($ses_sql, MYSQLI_ASSOC);

    $login_session = $row['email'];
   }

   else {
      header("location: \pets\login.html");
    die();
   }
?>