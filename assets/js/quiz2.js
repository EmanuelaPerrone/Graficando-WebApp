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
	tornaButton.innerText = 'Torna a Photoshop';
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
    question: 'Per convertire una immagine raster in vettoriale bisogna creare il tracciato.',
    answers: [
      { text: 'VERO', correct: true },
      { text: 'FALSO', correct: false }
    ]
  },
  {
    question: 'L’opzione sfumatura è un livello di regolazione.',
    answers: [
      { text: 'VERO', correct: false },
      { text: 'FALSO', correct: true }
    ]
  },
  {
    question: 'Tra i livelli di regolazione c’è il "bianco e nero".',
    answers: [
      { text: 'VERO', correct: true },
      { text: 'FALSO', correct: false }
    ]
  },
  {
    question: 'Per scurire o schiarire l’immagine, usiamo il livello di regolazione “valori tonali”.',
    answers: [
      { text: 'VERO', correct: false },
      { text: 'FALSO', correct: true }
    ]
  },
  {
    question: 'In Photoshop puoi trasformare la tua immagine a colori in bianco e nero.',
    answers: [
      { text: 'VERO', correct: true },
      { text: 'FALSO', correct: false }
    ]
  },
  {
    question: 'Bilanciamento colore è un livello di regolazione.',
    answers: [
      { text: 'VERO', correct: true },
      { text: 'FALSO', correct: false }
    ]
  }
]