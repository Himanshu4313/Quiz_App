const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("Submit");
const result = document.getElementById("result");
const showPopup = document.getElementById('popupcontainer');

const myQuestions = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "Paris",
      b: "London",
      c: "New York",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the largest country in the world?",
    answers: {
      a: "Russia",
      b: "China",
      c: "United States",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the currency of Japan?",
    answers: {
      a: "Yuan",
      b: "Euro",
      c: "Yen",
    },
    correctAnswer: "c",
  },
];

function quizbuild() {
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answer = [];

    for (letter in currentQuestion.answers) {
      answer.push(`<label><input type = "radio" name="question${questionNumber}" value = "${letter}"> ${letter} : ${currentQuestion.answers[letter]}</label>
                `);
    }
    // console.log(answer);
    output.push(`
                <div class="question">${currentQuestion.question}</div>
                <div class="answer">${answer.join("")}</div>
            `);
  });
  quizContainer.innerHTML = output.join("");
}

function showResult() {
  const answerContainers = document.querySelectorAll(".answer");

  let numresult = 0;
  myQuestions.forEach((currentQuestion, questionNumber) => {
    //find selected answer
    const answerContainer = answerContainers[questionNumber];
    // input[name=question1]:checked
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numresult++;
      answerContainers[questionNumber].style.color = "green";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });
  result.innerHTML = `${numresult} out of ${myQuestions.length}`;
}
quizbuild();




function showPopUpResult(){
    
    setTimeout(() =>{
        showResult()
        showPopup.style.display = 'block ';
    },1000)
}

submitButton.addEventListener("click", showPopUpResult);