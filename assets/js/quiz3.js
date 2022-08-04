const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const tornaButton = document.getElementById('torna-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let countRightAnswer = 0;
let shuffledQuestions, currentQuestionIndex, numDom;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  numDom++;
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  tornaButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  numDom = 1;
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  countRightAnswers = 0; 
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  countRightAnswer = 0;
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
  answerButtonsElement.classList.remove('disable')
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  document.getElementById('numero-domanda').innerHTML = 'Domanda n. ' + numDom;
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  
  if (selectedButton.dataset = correct) {
	var cor = new Audio("correct.wav");
    cor.play();    
    countRightAnswers++;
 }else{
	 var sba = new Audio("wrong.wav");
    sba.play(); 
 }
 document.getElementById('right-answers').innerHTML = 'Punteggio: ' + countRightAnswers + ' / 6';
  
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
	answerButtonsElement.classList.add('disable')
  } else {
    startButton.innerText = 'Ripeti quiz'
    startButton.classList.remove('hide')
	
	if(countRightAnswers == 1){
	 window.open("#win19", "_self");
	}
	if(countRightAnswers == 2){
	 window.open("#win20", "_self");
	}
	if(countRightAnswers == 3){
	 window.open("#win21", "_self");
	}
	else if(countRightAnswers == 4){
	 window.open("#win22", "_self");
	}
	else if(countRightAnswers == 5){
	 window.open("#win23", "_self");
	}
	else if(countRightAnswers == 6){
	 window.open("#win24", "_self");
	}
	tornaButton.innerText = 'Torna a Illustrator';
	tornaButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
	element.classList.add('correct');   
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const questions = [
  {
    question: 'In Illustrator non è possibile applicare sfumature al colore inserito nel tracciato.',
    answers: [
      { text: 'VERO', correct: false },
      { text: 'FALSO', correct: true }
    ]
  },
  {
    question: 'I tracciati aperti non possono essere uniti.',
    answers: [
      { text: 'VERO', correct: false },
      { text: 'FALSO', correct: true }
    ]
  },
  {
    question: 'Con lo strumento penna è possibile creare tracciati sia come linee che come curve.',
    answers: [
      { text: 'VERO', correct: true },
      { text: 'FALSO', correct: false }
    ]
  },
  {
    question: 'In Illustrator possiamo ruotare la nostra forma con lo strumento selezione diretta.',
    answers: [
      { text: 'VERO', correct: false },
      { text: 'FALSO', correct: true }
    ]
  },
  {
    question: 'Possiamo creare forme di una sola dimensione fissa.',
    answers: [
      { text: 'VERO', correct: false },
      { text: 'FALSO', correct: true }
    ]
  },
  {
    question: 'Illustrator non fa cancellare i tracciati o parti di essi.',
    answers: [
      { text: 'VERO', correct: false },
      { text: 'FALSO', correct: true }
    ]
  }
]