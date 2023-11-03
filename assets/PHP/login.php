<?php
   include("config.php");
   session_start();
   
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      
      // email and password sent from form 
      $myEmail = mysqli_real_escape_string($db,$_POST['email']);
      $myPassword = mysqli_real_escape_string($db,$_POST['password']);
      
      $hashedPassword = password_hash($myPassword, PASSWORD_BCRYPT);
      
      $sql = "SELECT id FROM client WHERE email = '$myEmail' and password = '$hashedPassword'";
      $result = mysqli_query($db,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      $active = $row['active'];
      
      $count = mysqli_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count == 1) {
         session_register("myEmail");
         $_SESSION['login_user'] = $myEmail;
         
         header("location: welcome.php");
      }
      else {
         $error = "Your Email or Password is invalid";
      }
   }
?>