var startBtn = document.querySelector(".start-button");

var pageOne = document.querySelector(".startContainer");

var questionBox = document.querySelector(".questionContainer");

var answerBox = document.querySelector(".answersContainer");

var finishedQuiz = document.querySelector(".endContainer");

var questionText = document.querySelector(".questionText");

var globalIndex = 0;

questionBox.style.display = "none";

finishedQuiz.style.display = "none";

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
function verifyAnswer(answer) {
  globalIndex++;
  if (globalIndex < questions.length) {
    displayQuestion(globalIndex);
  } else {
    console.log(globalIndex);
    console.log("quiz finished");
    questionBox.style.display = "none";
    finishedQuiz.style.display = "block";
  }
}

startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";
  questionBox.style.display = "block";
  displayQuestion(globalIndex);
});
