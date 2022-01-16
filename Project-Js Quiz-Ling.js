const quizData=[
  {
    question:"1.How long does it take sunlight to reach the Earth?",
    a: "A 8 minutes",
    b: "B 1 minutes",
    c: "C 36 minutes",
    d: "D 15 seconds",
    correct:"a",
  },
  {
    question:"2.How fast does the Earth move in its orbit about the sun?",
    a: "A 18 miles per minute",
    b: "B 18 miles per second",
    c: "C 18 miles per hour",
    d: "D 18 miles per day",
    correct:"b",
  },
  {
    question:"3.The Moon's density is what percentage of the Earth's?",
    a: "A 60%",
    b: "B 30%",
    c: "C 90%",
    d: "D 1%",
    correct:"a",
  },
  {
    question:"4.what region of the Earth experience the least seasonal variation?",
    a: "A north of the equator",
    b: "B south of the equator",
    c: "C the equatorial region",
    correct:"a",
  },
  {
    question:"5.What is the brightest star in the sky(excluding our Sun and novas)?",
    a: "A Veg",
    b: "B Sirius",
    c: "C Canopus",
    correct:"b",
  },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz(){
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
  answerEls.forEach(answerEl =>answerEl.checked = false)
}

function getSelected(){
  let answer
  answerEls.forEach(answerEl =>{
    if(answerEl.checked){
      answer = answerEl.id
    }
  })
  return answer;
}

submitBtn.addEventListener('click',()=>{
  const answer = getSelected()
  if(answer){
    if(answer === quizData[currentQuiz].correct){
      score++
    }
    currentQuiz++
    if(currentQuiz<quizData.length){
      loadQuiz()
    }else if (score = 5) {
      msg = "Excellent";
    } else if (score >= 3) {
      msg = "good";
    } else {
      msg = "ok...";
    }

    quiz.innerHTML = msg
  }
})





