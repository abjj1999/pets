<?php
   session_start();

   if(session_destroy()) {
      header("Location: \pets\login.html");
   }
?>