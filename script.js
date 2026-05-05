let quizData = [
  /*{
    image: `${Math.floor(Math.random() * 3) + 1}`,
    imageCount: ,
    question: 'What tree does this belong to?',
    commonName: '',
    similarTrees: [],
    latinName: '',
  },*/
  {
    image: `Boxelder/Boxelder${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'Boxelder',
    similarTrees: ['Poison Ivy','American Elderberry','Green Ash'],
    latinName: 'Aceraceae Acer negundo',
  },
  {
    image: `JapaneseMaple/JapaneseMaple${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'Japanese Maple',
    similarTrees: ['Silver Maple','Red Maple'],
    latinName: 'Aceraceae Acer Palmatum',
  },
  {
    image: `StripedMaple/StripedMaple${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'Striped Maple',
    similarTrees: ['Red Maple','Mapleleaf Viburnum'],
    latinName: 'Aceraceae Acer pensylvanicum',
  },
  {
    image: `NorwayMaple/NorwayMaple${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'Norway Maple',
    similarTrees: ['American Sycamore','Sugar Maple'],
    latinName: 'Aceraceae Acer platanoides',
  },
  {
    image: `RedMaple/RedMaple${Math.floor(Math.random() * 4) + 1}`,
    imageCount: 4,
    question: 'What tree does this belong to?',
    commonName: 'Red Maple',
    similarTrees: ['Mapleleaf Viburnum','Striped Maple','Sugar Maple'],
    latinName: 'Aceraceae Acer rubrum',
  },
  {
    image: `SilverMaple/SilverMaple${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'Silver Maple',
    similarTrees: ['Red Maple','Japanese Maple'],
    latinName: 'Aceraceae Acer saccharinum',
  },
  {
    image: `SugarMaple/SugarMaple${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'Sugar Maple',
    similarTrees: ['Norway Maple','American Sycamore','Red Maple'],
    latinName: 'Aceraceae Acer saccharum',
  },
  {
    image: `AmericanSycamore/AmericanSycamore${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'American Sycamore',
    similarTrees: ['Norway Maple','Sugar Maple'],
    latinName: 'Platanaceae Platanus occidentalis',
  },
  {
    image: `MapleleafViburnum/MapleleafViburnum${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'Mapleleaf Viburnum',
    similarTrees: ['Red Maple','Striped Maple'],
    latinName: 'Caprifoliaceae Viburnum acerifolium',
  },
  {
    image: `WhiteOak/WhiteOak${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'White Oak',
    similarTrees: ['Bur Oak','Chestnut Oak','Chinkapin Oak'],
    latinName: 'Fagaceae Quercus alba',
  },
  {
    image: `ScarletOak/ScarletOak${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'Scarlet Oak',
    similarTrees: ['Pin Oak','Northern Red Oak','Black Oak'],
    latinName: 'Fagaceae Quercus coccinea',
  },
  {
    image: `BearOak/BearOak${Math.floor(Math.random() * 4) + 1}`,
    imageCount: 4,
    question: 'What tree does this belong to?',
    commonName: 'Bear Oak',
    similarTrees: ['Black Oak','Northern Red Oak','Scarlet Oak','Pin Oak'],
    latinName: 'Fagaceae Quercus ilicifolia',
  },
  {
    image: `ShingleOak/ShingleOak${Math.floor(Math.random() * 4) + 1}`,
    imageCount: 4,
    question: 'What tree does this belong to?',
    commonName: 'Shingle Oak',
    similarTrees: ['Willow Oak','Weeping Willow','Black Willow'],
    latinName: 'Fagaceae Quercus imbricaria',
  },
  {
    image: `BurOak/BurOak${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'Bur Oak',
    similarTrees: ['White Oak','Chestnut Oak','Chinkapin Oak'],
    latinName: 'Fagaceae Quercus macrocarpa',
  },
  {
    image: `ChestnutOak/ChestnutOak${Math.floor(Math.random() * 4) + 1}`,
    imageCount: 4,
    question: 'What tree does this belong to?',
    commonName: 'Chestnut Oak',
    similarTrees: ['American Chestnut','Chinkapin Oak','White Oak','Eastern Chinkapin'],
    latinName: 'Fagaceae Quercus montana',
  },
  {
    image: `ChinkapinOak/ChinkapinOak${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'Chinkapin Oak',
    similarTrees: ['American Chestnut','Chestnut Oak','White Oak','Eastern Chinkapin'],
    latinName: 'Fagaceae Quercus muehlenbergii',
  },
  {
    image: `PinOak/PinOak${Math.floor(Math.random() * 4) + 1}`,
    imageCount: 4,
    question: 'What tree does this belong to?',
    commonName: 'Pin Oak',
    similarTrees: ['Scarlet Oak','Northern Red Oak','Black Oak'],
    latinName: 'Fagaceae Quercus palustris',
  },
  {
    image: `WillowOak/WillowOak${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'Willow Oak',
    similarTrees: ['Shingle Oak','Weeping Willow','Black Willow'],
    latinName: 'Fagaceae Quercus phellos',
  },
  {
    image: `NorthernRedOak/NorthernRedOak${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'Northern Red Oak',
    similarTrees: ['Black Oak','Pin Oak','Scarlet Oak'],
    latinName: 'Fagaceae Quercus rubra',
  },
  {
    image: `PostOak/PostOak${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'Post Oak',
    similarTrees: ['White Oak','Bur Oak'],
    latinName: 'Fagaceae Quercus stellata',
  },
  {
    image: `BlackOak/BlackOak${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'Black Oak',
    similarTrees: ['Northern Red Oak','Pin Oak','Scarlet Oak'],
    latinName: 'Fagaceae Quercus velutina',
  },
  {
    image: `Ginkgo/Ginkgo${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'Ginkgo',
    similarTrees: [],
    latinName: 'Ginkgoaceae Ginkgo biloba',
  },
  /*{
    image: `Sassafras/Sassafras${Math.floor(Math.random() * 3) + 1}`,
    imageCount: 3,
    question: 'What tree does this belong to?',
    commonName: 'Sassafras',
    similarTrees: [],
    latinName: 'Lauraceae Sassafras albidum',
  },*/
];
const quizResetData = structuredClone(quizData);

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const secondSubmitButton = document.getElementById('secondSubmit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');
const correctOrNot = document.getElementById('correct');
const nextButton = document.getElementById('next');
const latinName = document.getElementById('latinName');
const treeID = document.getElementById('treeID');
const spacer = document.getElementById('spacer');
const spacer2 = document.getElementById('spacer2');
const imageContainer = document.getElementById('leafImage');
const startButton = document.getElementById('start');
const deselectButton = document.getElementById('deselectAll');
const selectButton = document.getElementById('selectAll');
const checkboxStyleChanger = document.querySelector('.checkbox');



const checkBoxWarning = document.createElement('div');
checkBoxWarning.innerHTML = '';


let currentQuestion = 0;
let currentQuestionDisplay = 1;
let score = 0;
let isGivenAnswerCorrect = 0;
let isGivenAnswer2Correct = 0;
let incorrectAnswers = [];
let checkedTrees = Array(quizResetData.length).fill(true);
let skipped = '<span class="skipped">skipped</span>';
let quizSetup = [];
let wasSkipped = false;



function setupQuiz() {
  deselectButton.style.display = 'inline-block';
  selectButton.style.display = 'inline-block';
  startButton.style.display = 'inline-block';

  quizContainer.innerHTML = '';

  
  quizData = structuredClone(quizResetData);
  const optionsElement = document.createElement('div');
  const title = document.createElement('div');
  title.innerHTML = 'What Trees Would You Like to Study?<br><br>';
  title.className = 'question';
  quizContainer.appendChild(title);

  optionsElement.className = 'options';

  //set up checkboxes
  for (let i = 0; i < quizData.length; i++) {
    const option = document.createElement('label');

    let similarTreeList = ``;

    if (quizData[i].similarTrees.length == 0) {
      similarTreeList += `None`;
    
    } else if (quizData[i].similarTrees.length == 1) {
      similarTreeList += `${quizData[i].similarTrees[0]}`;
    
    } else if (quizData[i].similarTrees.length == 2){
      similarTreeList += `${quizData[i].similarTrees[0]} and ${quizData[i].similarTrees[1]}`;
    }else {
      for (let n = 0; n < quizData[i].similarTrees.length - 1; n++) {
        similarTreeList += `${quizData[i].similarTrees[n]}, `;
      }
      similarTreeList += `and ${quizData[i].similarTrees[quizData[i].similarTrees.length - 1]}`;
    }

    let commonName = ` ${quizData[i].commonName} <dfn data-title='Similar to: ${similarTreeList}'><img id='?Icon' src='QuestionMarkIcon.png' alt='' class='smallestImage'></dfn>  <span class = 'smallText'>-</span>  `;

    const link = quizData[i].image;
    const trim = link.slice(0, -1);
    option.className = 'option';

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.name = 'quiz';
    checkBox.className = 'checkbox';
    checkBox.checked = checkedTrees[i];

    for (let n = 1; n < quizData[i].imageCount + 1; n++) {
      commonName += `<img id='leafImage' src='Leaves/UsedLeaves/${trim}${n}.png' alt=' ' class='smallerImage'>`;
    }

    commonName += `<span class = 'smallText'><i> - ${quizData[i].latinName}</i></span>`;

    const optionText = document.createElement('span');
    optionText.innerHTML = commonName;

    option.appendChild(checkBox);
    option.appendChild(optionText);


    optionsElement.appendChild(option);
  }
  quizContainer.appendChild(optionsElement);
  quizContainer.appendChild(checkBoxWarning);
}

function deselectAll() {
  checkedTrees = Array(quizResetData.length).fill(false);
  setupQuiz();
}

function selectAll() {
  checkedTrees = Array(quizResetData.length).fill(true);
  setupQuiz();
}

function whichAreSelected() {
  checkedTrees = [];
  var checkboxes = document.getElementsByName('quiz');
  const amount = quizData.length;
  let counter = 0;

  for (let i = 0; i < amount; i++) {
    checkedTrees.push(checkboxes[i].checked);
    if (!checkboxes[i].checked) {
      quizData.splice(counter,1);
    } else {
      counter++;
    }
  }
  
  //hides the deselect and start buttons
  deselectButton.style.display = 'none';
  selectButton.style.display = 'none';
  startButton.style.display = 'none';

  //Shuffles questions and starts quiz
  shuffleQuestions();
  displayQuestion();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleQuestions() {
  shuffleArray(quizData);
  quizSetup = structuredClone(quizData);
  for (let i = 0; i < quizData.length; i++) {
    for (let n = 0; n < quizData[i].similarTrees.length; n++) {
      quizData[i].similarTrees[n] = quizData[i].similarTrees[n].toLowerCase();
      quizData[i].similarTrees[n] = quizData[i].similarTrees[n].replace(/[!@#.,></?'";:_=+`~1234567890$%^&*()\|-]/g, "");
      quizData[i].similarTrees[n] = quizData[i].similarTrees[n].replace(" ", "");
    }
  }
}

function displayQuestion() {
  if (quizData.length > 0) {
    checkBoxWarning.innerHTML = '';
    const questionData = quizData[currentQuestion];
    quizContainer.innerHTML = '';
    

    document.getElementById("leafImage").src=`Leaves/UsedLeaves/${questionData.image}.png`;
    imageContainer.style.display = 'block';

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;

    treeID.style.display = "inline-block";
    spacer2.style.display = "block";
    submitButton.style.display = "block";

    quizContainer.appendChild(questionElement);
  } else {
    checkBoxWarning.innerHTML = '<i>At Least One Tree is Needed to Start the Quiz!</i>';
    setupQuiz();
  }
}

function checkFirstAnswer() {
  let input = document.getElementById("treeID").value;
  let inputForDisplay = `${input}`;
  input = input.toLowerCase();
  input = input.replace(" ", "");
  input = input.replace(/[!@#.,></?'";:_=+`~1234567890$%^&*()\|-]/g, "");
  wasSkipped = false;

  const display = document.createElement('div');
  display.innerHTML = inputForDisplay;

  const isCorrect = document.createElement('div');
  const correction = document.createElement('div');
  correction.className = 'options';

  spacer2.style.display = 'none';
  let correctionText = '';

  if (!input) {
    input = skipped;
    wasSkipped = true;
    inputForDisplay = `${input}`;
    display.innerHTML = inputForDisplay;
  }




  
  let correctAnswer = quizData[currentQuestion].commonName.toLowerCase();
  correctAnswer = correctAnswer.replace(" ", "");
  
  

  quizContainer.appendChild(display);
  submitButton.style.display = 'none';
  treeID.style.display = 'none';

  if (input == correctAnswer) {
    isCorrect.className = 'rightAnswer';
    isCorrect.innerHTML = 'Correct +1';
    isGivenAnswerCorrect = 2;
    score++;

  } else if (quizData[currentQuestion].similarTrees.includes(input)) {
    isCorrect.className = 'closeAnswer';
    isCorrect.innerHTML = '<b>Close! +0.5</b>';
    isGivenAnswerCorrect = 1;
    score = score+ 0.5;

    correctionText += `Correct answer is <b>${quizData[currentQuestion].commonName}</b>`;

    incorrectAnswers.push({
      didSkip: wasSkipped,
      textSpacer: '<br>',
      isQuestionOne: true,
      questionNumber: currentQuestionDisplay +0.1,
      correctAnswer: quizData[currentQuestion].commonName,
      image:  ` Leaf ID -    <img id='leafImage' src='Leaves/UsedLeaves/${quizData[currentQuestion].image}.png'' alt='Tree Leaf' class='smallImage'>`,
      incorrectAnswer: inputForDisplay,
      isClose: 'closeAnswer',
    });


  } else {

    incorrectAnswers.push({
      didSkip: wasSkipped,
      textSpacer: '<br>',
      isQuestionOne: true,
      questionNumber: currentQuestionDisplay +0.1,
      correctAnswer: quizData[currentQuestion].commonName,
      image:  ` Leaf ID -    <img id='leafImage' src='Leaves/UsedLeaves/${quizData[currentQuestion].image}.png'' alt='Tree Leaf' class='smallImage'>`,
      incorrectAnswer: inputForDisplay,
      isClose: 'wrongAnswer',
    });
    
    

    isCorrect.className = 'wrongAnswer';
    isCorrect.innerHTML = 'Incorrect';
    isGivenAnswerCorrect = 0;

    correctionText += `Correct answer is <b>${quizData[currentQuestion].commonName}</b>`;


  }
  if (quizData[currentQuestion].similarTrees.length > 2) {
    correctionText += '<br><span class="smallText"><i>Similar leaves: </i> <b>';
    for (let i = 0; i < quizSetup[currentQuestion].similarTrees.length - 1; i++) {
      correctionText += `${quizSetup[currentQuestion].similarTrees[i]}, `;
    }
    correctionText += `and ${quizSetup[currentQuestion].similarTrees[quizData[currentQuestion].similarTrees.length - 1]}`;
    correctionText += '</b></span>';

  } else if (quizData[currentQuestion].similarTrees.length == 2) {
    correctionText += `<br><span class="smallText"><i>Similar leaves: </i> <b> ${quizSetup[currentQuestion].similarTrees[0]} and ${quizSetup[currentQuestion].similarTrees[1]}</b></span>`;
  } else if (quizData[currentQuestion].similarTrees.length == 1) {
    correctionText += `<br><span class="smallText"><i>Similar leaves: </i> <b> ${quizSetup[currentQuestion].similarTrees[0]}</b></span>`;
  }
  correction.innerHTML = `${correctionText}`

  quizContainer.appendChild(isCorrect);
  if (isGivenAnswerCorrect < 2) {
    quizContainer.appendChild(correction);
  }

  

  spacer2.style.display = 'none';
  secondQuestion();
}

function secondQuestion() {
  if (isGivenAnswerCorrect > 0) {
    const secondQuestion = document.createElement('div');
    secondQuestion.className = 'question';
    secondQuestion.innerHTML = `<br>What is the latin name of <b>${quizData[currentQuestion].commonName}</b>`;
    quizContainer.appendChild(secondQuestion);
    
    latinName.style.display = "inline-block";
    spacer.style.display = "block";
    secondSubmitButton.style.display = "block";

  } else {
    nextButton.style.display = 'block';
  }
}

function checkSecondAnswer() {
  let input = document.getElementById("latinName").value;
  const answerForDisplay = document.createElement('div');
  const isCorrect = document.createElement('div');
  const correction = document.createElement('div');
  wasSkipped = false;

  let inputtedAnswer = input.toLowerCase();
  let trimmedAnswer = inputtedAnswer.trim();
  let correctAnswer = quizData[currentQuestion].latinName.toLowerCase();

  if (!trimmedAnswer) {
    inputtedAnswer = skipped;
    input = skipped;
    wasSkipped = true;
  }

  answerForDisplay.innerHTML = `${input}`;
  quizContainer.appendChild(answerForDisplay);
  secondSubmitButton.style.display = 'none';
  latinName.style.display = 'none';

  if (inputtedAnswer == correctAnswer) {
    isCorrect.className = 'rightAnswer';
    isCorrect.innerHTML = 'Correct +1';
    isGivenAnswer2Correct = 1;
    score++;

  } else {
    if (isGivenAnswerCorrect == 1){
      incorrectAnswers.push({
        didSkip: wasSkipped,
        textSpacer: '',
        isQuestionOne: false,
        incorrectAnswer: inputtedAnswer,
        questionNumber: currentQuestionDisplay +0.2,
        correctAnswer: quizData[currentQuestion].latinName,
        image:  ` Latin name of <b>${quizData[currentQuestion].commonName}</b>`,
        isClose: 'wrongAnswer',
      });
    } else {
      incorrectAnswers.push({
        didSkip: wasSkipped,
        textSpacer: '<br>',
        isQuestionOne: false,
        incorrectAnswer: inputtedAnswer,
        questionNumber: currentQuestionDisplay +0.2,
        correctAnswer: quizData[currentQuestion].latinName,
        image:  ` Latin name of <b>${quizData[currentQuestion].commonName}</b>    <img id='leafImage' src='Leaves/UsedLeaves/${quizData[currentQuestion].image}.png'' alt='Tree Leaf' class='smallImage'>`,
        isClose: 'wrongAnswer',
      });
    }
    isCorrect.className = 'wrongAnswer';
    isCorrect.innerHTML = 'Incorrect';
    isGivenAnswer2Correct = 0;

    correction.className = 'options';
    correction.innerHTML = `Correct answer is <b>${quizData[currentQuestion].latinName}</b>`;

  }

  quizContainer.appendChild(isCorrect);
  if (isGivenAnswer2Correct == 0) {
    quizContainer.appendChild(correction);
  }
  submitButton.style.display = 'none';
  spacer.style.display = 'none';
  nextButton.style.display = 'inline-block';  
}

function nextQuestion() {
  currentQuestion++;
  currentQuestionDisplay++;

  nextButton.style.display = 'none';
  submitButton.style.display = 'inline-block';
  secondSubmitButton.style.display = 'none';
  spacer.style.display = 'none';

  document.getElementById('treeID').value = '';
  document.getElementById('latinName').value = '';

  /*const selectedOption = document.querySelector('input[name="quiz"]:checked');
    selectedOption.checked = false;*/
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      imageContainer.style.display = 'none';
      spacer.style.display = 'block';
      displayResult();
    }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'block';
  const potentialScore = quizData.length * 2;
  const percentage = Math.round((score/potentialScore) *100);

  
  resultContainer.innerHTML = `
    <p><b>${percentage}%</b></p>
    <p>You scored ${score} out of ${potentialScore}!<p>
  `;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'none';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  startButton.style.display = 'block';
  setupQuiz();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';
  const potentialScore = quizData.length * 2;
  const percentage = Math.round((score/potentialScore) *100);

  let incorrectAnswersHtml = '';

  if (incorrectAnswers.length>0){
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          ${incorrectAnswers[i].textSpacer}
          <span class="${incorrectAnswers[i].isClose}"><strong>Question ${incorrectAnswers[i].questionNumber}:</strong></span><i>${incorrectAnswers[i].image}</i> <br>
          Your Answer: ${incorrectAnswers[i].didSkip ? `${incorrectAnswers[i].incorrectAnswer}` : `<b>${incorrectAnswers[i].incorrectAnswer}</b>`}<br>
          Correct Answer: <b>${incorrectAnswers[i].correctAnswer}</b>
        </p>
      `;
    }
  } else {
    incorrectAnswersHtml += `<span class="rightAnswer">None!</span>`;
  }

  resultContainer.innerHTML = `
    <p><b>${percentage}%</b></p>
    <p>You scored ${score} out of ${potentialScore}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkFirstAnswer);
secondSubmitButton.addEventListener('click', checkSecondAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);
nextButton.addEventListener('click',nextQuestion);
startButton.addEventListener('click',whichAreSelected);
deselectButton.addEventListener('click',deselectAll);
selectButton.addEventListener('click',selectAll);


setupQuiz();
