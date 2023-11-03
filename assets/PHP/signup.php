<?php
   include("config.php");
   session_start();
   
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      
      //Information sent from signup form
      $myName = mysqli_real_escape_string($db,$_POST['name']);
      $myEmail = mysqli_real_escape_string($db,$_POST['email']);
      $myPassword = mysqli_real_escape_string($db,$_POST['password']);

      $hashedPassword = password_hash($myPassword, PASSWORD_BCRYPT);
      
      $msg = "";
      
      //Will check if email exists in the database
      $sqlSelect = "SELECT id FROM client WHERE email = '$myEmail'";
      $result = mysqli_query($db,$sqlSelect);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      
      $count = mysqli_num_rows($result);
      
      if($count == 0) {
         
          $sqlInsert = "INSERT INTO cient (name, email, password) VALUES ('$myName', '$myEmail', '$hashedPassword')";
    	
          if(mysqli_query($db,$sqlInsert)) {
             $msg = "User successfully added."
          }
          else {
             $msg = "User not added.";
          }
      }
      else {
         $msg = "An account with that email already exists.";
      }

   }
?>