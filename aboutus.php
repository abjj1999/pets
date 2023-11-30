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
    <script src="./assets/JS/aboutus.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
      crossorigin="anonymous"
    ></script>
    <script src="https://kit.fontawesome.com/81f4fdfae6.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./assets/CSS/aboutus.css"/>
    <link rel="stylesheet" href="./assets/CSS/global.css"/>
    <script src="./assets/JS/index.js"></script>
    <title>Pet</title>
  </head>
  <body>

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
    
    <!--Slideshow-->
    <div class="slideshow-container">
        <!--AB-->
        <div class="mySlides fade">
            <img src="./assets/imgs/ab.png" style="width:100%">
            <div class="bottom-right">
                <ul>
                    <li class="linklist"><a href="https://github.com/abjj1999"><img src="./assets/imgs/github-logo.png" width="3%"/></a></li>
                    <li class="linklist"><a href="https://www.linkedin.com/in/abdullah-al-hilfi/"><img src="./assets/imgs/linkedin-logo.png" width="3%"/></a></li>
                    <li class="linklist"><a href="https://portfolio-abjj1999-v2.vercel.app/"><img src="./assets/imgs/portfolio-logo.png" width="3%"/></a></li>
                    <li class="linklist"><a href="https://www.google.com"><img src="./assets/imgs/resume-logo.png" width="3%"/></a></li>
                </ul>
            </div>
        </div>
        <!--JC-->
        <div class="mySlides fade">
          <img src="./assets/imgs/jc.png" style="width:100%">
          <div class="bottom-right">
              <ul>
                  <li class="linklist"><a href="https://github.com/Sparky831"><img src="./assets/imgs/github-logo.png" width="3%"/></a></li>
                  <li class="linklist"><a href="https://www.linkedin.com/in/jesus-centeno-726275b8/"><img src="./assets/imgs/linkedin-logo.png" width="3%"/></a></li>
                  <li class="linklist"><a href="https://www.google.com"><img src="./assets/imgs/portfolio-logo.png" width="3%"/></a></li>
                  <li class="linklist"><a href="./assets/resumes/Jesus.Centeno.pdf"><img src="./assets/imgs/resume-logo.png" width="3%"/></a></li>
              </ul>
          </div>
      </div>
      <!--JG-->
      <div class="mySlides fade">
        <img src="./assets/imgs/jg.png" style="width:100%">
        <div class="bottom-right">
            <ul>
                <li class="linklist"><a href="https://www.google.com"><img src="./assets/imgs/github-logo.png" width="3%"/></a></li>
                <li class="linklist"><a href="https://www.google.com"><img src="./assets/imgs/linkedin-logo.png" width="3%"/></a></li>
                <li class="linklist"><a href="https://www.google.com"><img src="./assets/imgs/portfolio-logo.png" width="3%"/></a></li>
                <li class="linklist"><a href="https://www.google.com"><img src="./assets/imgs/resume-logo.png" width="3%"/></a></li>
            </ul>
        </div>
    </div>
        <!--AP-->
        <div class="mySlides fade">
            <img src="./assets/imgs/ap.png" style="width:100%">
            <div class="bottom-right">
                <ul>
                    <li class="linklist"><a href="https://github.com/alinamiap"><img src="./assets/imgs/github-logo.png" width="3%"/></a></li>
                    <li class="linklist"><a href="https://www.linkedin.com/in/alinapalomino/"><img src="./assets/imgs/linkedin-logo.png" width="3%"/></a></li>
                    <li class="linklist"><a href="https://www.google.com"><img src="./assets/imgs/portfolio-logo.png" width="3%"/></a></li>
                    <li class="linklist"><a href="./assets/resumes/Alina.Palomino.pdf"><img src="./assets/imgs/resume-logo.png" width="3%"/></a></li>
                </ul>
            </div>
        </div>
        <!--XY-->
        <div class="mySlides fade">
            <img src="./assets/imgs/xy.png" style="width:100%">
            <div class="bottom-right">
                <ul>
                    <li class="linklist"><a href="https://www.google.com"><img src="./assets/imgs/github-logo.png" width="3%"/></a></li>
                    <li class="linklist"><a href="https://www.linkedin.com/in/xavier-young-28b905141/"><img src="./assets/imgs/linkedin-logo.png" width="3%"/></a></li>
                    <li class="linklist"><a href="https://www.google.com"><img src="./assets/imgs/portfolio-logo.png" width="3%"/></a></li>
                    <li class="linklist"><a href="./assets/resumes/xavier.young.pdf"><img src="./assets/imgs/resume-logo.png" width="3%"/></a></li>
                </ul>
            </div>
        </div>

        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>

    <!--circles-->
    <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
        <span class="dot" onclick="currentSlide(4)"></span>
        <span class="dot" onclick="currentSlide(5)"></span>
    </div>
  </body>
</html>