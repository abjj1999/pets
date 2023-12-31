<?php
    include('./assets/PHP/session.php');
?>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Bitter&family=Roboto+Mono:wght@300&display=swap');
    </style>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
      crossorigin="anonymous"
    ></script>
    <script src="https://kit.fontawesome.com/81f4fdfae6.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./assets/css/global.css" />
    <link rel="stylesheet" href="./assets/CSS/quiz.css" />
    <script src="./assets/JS/index.js"></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    />
    <title>Pet</title>
  </head>
  <body class="body ">
    <!-- NavBar -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary background_color">
      <div class="container-fluid">
        <a class="navbar-brand " href="#">
          <!-- <img src="./assets/imgs/logo.png" alt="" class="img-fluid" width="100px" height="0px"> -->
          <h1 class="primary_font">
            Pet Finder
            <i class="fa-solid fa-paw"></i>
          </h1>
          
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav list_styling me-auto">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.php">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./breeds.php">Breeds</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./quiz.php">Quiz</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./aboutus.php">About Us</a>
                </li>
            </ul>

            <div class="buttons_container">
                <button class="btn" id="loginBtn"><a class="nav-link" onclick="logoutRedirect()">Logout</a></button>
            </div>
        </div>
      </div>
    </nav>
    <!-- Focus -->
    <div class="startContainer">
      <button class="start-button">Start</button>
    </div>
    
    <div id="main">
      <h1 class="time" style="text-align: center"></h1>
    </div>
    <div class="questionContainer">
      <h1 class="questionText primary_font"></h1>
      <div class="answersContainer row primary_font"></div>
      

    </div> 
    <!-- Focus -->
    <div class="endContainer primary_font">
      <h1 class="endHeader">Quiz Complete!</h1>
      <!-- <input class="userInput" type="text" placeholder="Enter Name" />
       -->
       <p class="endHeader display-5 text-center mb-3">Are you ready to view you results</p>
      <button class="submitButton primary_font">See results!</button>
    </div>

    <!-- results -->
    <div class="resultsContainer primary_font container ">
      <h1 class="resultsHeader">Results</h1>
      <div class="resultsbox row "></div>
      <!-- <button class="restartButton primary_font btn btn-warning ">Restart</button> -->
    </div>

    <script src="assets/js/quiz.js"></script>
    <script src="assets/js/algo.js"></script>
    <script src="assets/js/breeds.js"></script>
  </body>
</html>