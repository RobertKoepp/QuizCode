// const question = document.querySelector('#question');
// const choices = Array.from(document.querySelectorAll('.choice-text'));
// const progressText = document.querySelector('#progressText');
// const scoreText = document.querySelector('#score');
// const progressBarFull = document.querySelector('#progressBarFull');

var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("time")
var feedbackEl = document.getElementById("feedback");
var timerId;


let currentQuestionIndex = 0;
let acceptingAnswers = true
let score = 0
let questionCounter = 0

var availableQuestions = [
    {
        question: 'What is 2 + 2?',
        choices: [ '2', '4', '99', '7'],
        answer: '2'
    },
    {
        question: 'What is the capital city of the state of California?',
        choices: ['Sacramento','San Francisco', 'Los Angles', 'Methdesto'],
        answer: '1'
    },
    {
        question: 'Who was the first person to land on the moon?',
        choices: ['Donald Trunp', 'Oprah Winfrey', 'Neil Armstrong', 'Bill Nye Da MF Science Guy'],
        answer: '3'
    },
    {
        question: 'Where is the tallest building in the world located?',
        choices: ['New York', 'Toyoko', 'Seattle', 'Dubai'], 
        answer: '4'
    }
   
]
var time = availableQuestions.length * 20;

function seconds(){ 
    time--
   
    timerEl.textContent = time
    if (time <= 0) {
        quizEnd()
    }
}
// const SCORE_POINTS = 100
// const MAX_QUESTIONS = 4

startGame = () => {
    // questionCounter = 0
    // score = 0
    // availableQuestions = [...questions]
    var startScreen = document.getElementById("start-screen")
    startScreen.setAttribute("class", "hide")
    questionsEl.removeAttribute("class")
    console.log("HELLO")
    timerId = setInterval(seconds, 1000)
    timerEl.textContent = time;
    getNewQuestion()
}

getNewQuestion = () => {
    console.log("Rarr")
   
    //sets currentQuestion to index in availableQuestions
    var currentQuestion = availableQuestions[currentQuestionIndex]

    //makes the title in html the "question" key in your questionIndex
    var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.question;
  


    //clears space for next question index
  choicesEl.innerHTML = "";
  // loop over choices
 
 //forEach will iterate over availableQuestions
  currentQuestion.choices.forEach(function(choice, i) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1 + ". " + choice;
    // attach click event listener to each choice
    choiceNode.onclick = questionChoice;
    // display on the page
    choicesEl.appendChild(choiceNode);
  });

function questionChoice (){
    console.log("hello")
    if (this.value !== availableQuestions[currentQuestionIndex].answer){
        console.log("WRONG")
        feedbackEl.textContent="Incorrect Answer"
    }else{feedbackEl.textContent="Correct Answer"
    
    }
    //says if question is answered move to next currentQueationIndex
    currentQuestionIndex++
    if (currentQuestionIndex===availableQuestions.length){
       quizEnd()
    } else {
        getNewQuestion() 
    }
}


}

 function quizEnd(){ clearInterval(timerId)
    console.log("quiz is over")
    questionsEl.setAttribute("class","hide")
    var end=document.getElementById("end-screen")
    end.removeAttribute("class")

    var final = document.getElementById("final-score") 
    final.textContent=time
    
 }
    // if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    //     localStorage.setItem('mostRecentScore', score)

    //     return window.location.assign('/end.html')
    // }

    // questionCounter++
    // progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    // progressBarFull.getElementsByClassName.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'

    // const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    // currentQuestion = availableQuestions[questionsIndex]
    // question.innerText = currentQuestion.question 

    // choices.forEach(choice => {
    //     const number = choice.dataset['number']
    //     choice.innerText = currentQuestion['choice' + number]
    // })

    // availableQuestions.splice(questionsIndex, 1)

    // acceptingAnswers = true



// choices.forEach(choice => {
//     choice.addEventListener('click', e => {
//         if(!acceptingAnswers) return

//         acceptingAnswers = false
//         const selectedChoice = e.target
//         const selectedAnswer = selectedChoice.dataset['number']

//         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

//         if(classToApply === 'correct') {
//             incrementScore(SCORE_POINTS)
//         }

//         selectedChoice.parentElement.classList.add(classToApply)

//         setTimeout( () => {
//             selectedChoice.parentElement.classList.remove(classToApply)
//             getNewQuestion()

//         }, 1000) 
//     })
// })

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startBtn.onclick = startGame();