import { questions } from './data.js' //import './data.js' <= 전체 가져오기
const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0
let mbti = '' // 최종적인 mbti 결과를 저장할 때 사용
function renderQuestion() {
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0]['text']
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
  console.log(progressValueEl.style.width)
}

function nextQuestion(choiceNumber){
  if(currentNumber == questions.length - 1){
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value
  currentNumber++ 
  renderQuestion()
}
function showResultPage(){
  location.href = '/results.html?mbti=' + mbti // 쿼리 스트링 => 데이터 선언해 값 전달
}
choice1El.addEventListener('click', function () {
  nextQuestion(0)
})
choice2El.addEventListener('click', function () {
  nextQuestion(1)
})

renderQuestion()