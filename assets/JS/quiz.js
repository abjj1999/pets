var startBtn = document.querySelector(".start-button");

var pageOne = document.querySelector(".startContainer");

var questionBox = document.querySelector(".questionContainer");

var answerBox = document.querySelector(".answersContainer");

var finishedQuiz = document.querySelector(".endContainer");

var questionText = document.querySelector(".questionText");

var submitBtn = document.querySelector(".submitButton");

var resultBox = document.querySelector(".resultsContainer");

var resultsContainer = document.querySelector(".resultsbox");

var globalIndex = 0;

questionBox.style.display = "none";

finishedQuiz.style.display = "none";

resultBox.style.display = "none";

var questions = [
  {
    Text: "How well does the breed of the dog align with your lifestyle and preferences?",
    Choices: ["1", "2", "3", "4"],
  },
  {
    Text: "How suitable is your living space for this dog breed's size?",
    Choices: ["1", "2", "3", "4"],
  },
  {
    Text: "How confident are you in handling the average weight of this breed?",
    Choices: ["1", "2", "3", "4"],
  },
  {
    Text: "How prepared are you to manage the level of shedding of this breed?",
    Choices: ["1", "2", "3", "4"],
  },
  {
    Text: "How ready are you for the commitment of this breed's average lifespan?",
    Choices: ["1", "2", "3", "4"],
  },
  {
    Text: "How well can you accommodate the typical barking level of this breed in your living situation?",
    Choices: ["1", "2", "3", "4"],
  },
  {
    Text: "How well does the energy level of this breed match your own lifestyle and activity level?",
    Choices: ["1", "2", "3", "4"],
  },
  {
    Text: "How willing are you to devote the necessary time and resources to train this breed effectively?",
    Choices: ["1", "2", "3", "4"],
  },
  {
    Text: "How suitable is the breed's natural level of protectiveness for your lifestyle and household?",
    Choices: ["1", "2", "3", "4"],
  },
  {
    Text: "How well do this breed's specific characteristics (like trainability) meet your requirements?",
    Choices: ["1", "2", "3", "4"],
  },
];

function displayQuestion(i) {
  answerBox.innerHTML = "";
  questionText.textContent = questions[i].Text;
  answerBox.setAttribute("class", "p-3 d-flex flex-wrap justify-content-center align-items-center");
  questions[i].Choices.forEach(function (choice) {
    var btn = document.createElement("button");
    var h2 = document.createElement("h2");
    h2.textContent = choice;
    h2.setAttribute("class", "text-center");
    btn.appendChild(h2);
    btn.setAttribute("class", "col-lg-4 col-md-5 col-sm-4 m-2 rounded-pill d-flex justify-content-center align-items-center");
    answerBox.appendChild(btn);
    btn.addEventListener("click", function () {
      verifyAnswer(btn.textContent);
    });
  });
}
const answers = [];
let bestMatches = [];
function verifyAnswer(answer) {
  answers.push(answer);
  globalIndex++;
  if (globalIndex < questions.length) {
    displayQuestion(globalIndex);
  } else {
    console.log(globalIndex);
    console.log("quiz finished");
    console.log(answers);
    localStorage.setItem("answers", JSON.stringify(answers));
    questionBox.style.display = "none";
    finishedQuiz.style.display = "flex";
    bestMatches = getBestMatches();
  }
}

startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";
  questionBox.style.display = "block";
  displayQuestion(globalIndex);
});

submitBtn.addEventListener("click", function (e) {
  // window.location.href = "results.html";
  e.preventDefault();
  finishedQuiz.style.display = "none";

  resultBox.style.display = "flex";
  if (bestMatches.length === 0) {
    var h1 = document.createElement("h1");
    h1.textContent = "No matches found!";
    resultBox.appendChild(h1);
  } else {
    for (var i = 0; i < bestMatches.length; i++) {
      const card = `
      <div class="card col-xxl-3 col-xl-4 col-lg-3 col-md-5 col-sm-8 p-4 card_div card_bg m-1" style="">
        <h4 class="card-title text-center primary_font mt-2">${bestMatches[i].breed}</h1>
        <div class="card_img">
            <img src="./assets/imgs/doggo.jpg" class="card-img-top img_class" alt="...">
        </div>
        <div class="card-body secondary_font fw-semibold gap-2">
            <p class="card-text">Size: ${convertSize(bestMatches[i].size)}</p>
            <p class="card-text">Weight: ${convertWeight(bestMatches[i].weight)}</p>
            <p class="card-text ">Shedding: ${stars(bestMatches[i].shedding)}</p>
            <p class="card-text">Life Expectancy: ${bestMatches[i].life_expectancy}</p>
            <p class="card-text">Barking: ${stars(bestMatches[i].barking)}</p>
            <p class="card-text">Energy: ${stars(bestMatches[i].energy)}</p>
            <p class="card-text">Trainability: ${stars(bestMatches[i].trainability)}</p>
            <p class="card-text">Protectiveness: ${stars(bestMatches[i].protectiveness)}</p>
            </div>
    </div>

      `;

      resultsContainer.innerHTML += card;
      }


  }
})