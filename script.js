const questions = [
  {
    category: "ОСНОВЫ РЫНКА",
    question: "Какой принцип лежит в основе рыночной экономики?",
    answers: ["Централизованное распределение всех ресурсов", "Свободное взаимодействие продавцов и покупателей", "Обязательное государственное установление цен"],
    correct: 1
  },
  {
    category: "ЧАСТНАЯ СОБСТВЕННОСТЬ",
    question: "Что означает право частной собственности в рыночной системе?",
    answers: ["Государство владеет всеми предприятиями", "Каждый ресурс принадлежит только обществу", "Люди и организации могут владеть ресурсами и распоряжаться ими"],
    correct: 2
  },
  {
    category: "СПРОС И ПРЕДЛОЖЕНИЕ",
    question: "Что обычно происходит со спросом на товар, если его цена снижается, а прочие условия не меняются?",
    answers: ["Величина спроса обычно увеличивается", "Спрос обязательно исчезает", "Величина спроса всегда остаётся прежней"],
    correct: 0
  },
  {
    category: "СПРОС И ПРЕДЛОЖЕНИЕ",
    question: "Что называют предложением товара?",
    answers: ["Желание потребителей приобрести товар", "Количество товара, которое продавцы готовы продать при разных ценах", "Общий доход покупателей за определённый период"],
    correct: 1
  },
  {
    category: "ЦЕНА И РЫНОК",
    question: "Какую важную роль выполняет цена в рыночной экономике?",
    answers: ["Заменяет выбор потребителя", "Гарантирует одинаковую прибыль каждому производителю", "Передаёт информацию о спросе, предложении и относительной редкости товара"],
    correct: 2
  },
  {
    category: "КОНКУРЕНЦИЯ",
    question: "Как конкуренция обычно влияет на производителей?",
    answers: ["Побуждает улучшать товары и эффективнее использовать ресурсы", "Освобождает от необходимости учитывать покупателей", "Всегда позволяет продавать товары дороже"],
    correct: 0
  },
  {
    category: "ПОТРЕБИТЕЛИ",
    question: "Что такое потребительский суверенитет?",
    answers: ["Право государства определять каждую покупку", "Влияние выбора покупателей на то, какие товары производят", "Запрет выбирать между товарами разных производителей"],
    correct: 1
  },
  {
    category: "ПРЕДПРИНИМАТЕЛЬСТВО",
    question: "Какова роль предпринимателя в рыночной экономике?",
    answers: ["Устанавливать единые цены для всей страны", "Распределять бюджет между государственными учреждениями", "Организовывать ресурсы, принимая решения и рискуя ради возможной прибыли"],
    correct: 2
  },
  {
    category: "ПРИБЫЛЬ И РИСК",
    question: "Что представляет собой прибыль предприятия?",
    answers: ["Разницу между выручкой и затратами", "Общую стоимость всех покупок предприятия", "Сумму налогов, уплаченных покупателями"],
    correct: 0
  },
  {
    category: "ЭКОНОМИЧЕСКИЕ СИСТЕМЫ",
    question: "Чем рыночная экономика прежде всего отличается от командной?",
    answers: ["В ней отсутствуют любые правила и законы", "Большинство решений о производстве и обмене принимают участники рынка", "В ней государство определяет ассортимент каждого магазина"],
    correct: 1
  },
  {
    category: "РЕСУРСЫ",
    question: "Почему ограниченность ресурсов имеет значение для экономики?",
    answers: ["Она означает, что производить товары больше не нужно", "Она позволяет удовлетворить все потребности одновременно", "Она заставляет выбирать, как использовать ресурсы и какие потребности удовлетворять"],
    correct: 2
  },
  {
    category: "РЫНОЧНОЕ РАВНОВЕСИЕ",
    question: "Что означает рыночное равновесие?",
    answers: ["Ситуацию, когда величина спроса равна величине предложения", "Ситуацию, когда все товары имеют одинаковую цену", "Ситуацию, когда продавцов на рынке нет"],
    correct: 0
  },
  {
    category: "ГОСУДАРСТВО И РЫНОК",
    question: "Какова роль государства в современной рыночной экономике?",
    answers: ["Оно владеет каждым частным предприятием", "Оно устанавливает выпуск и цену каждого товара", "Оно устанавливает правила, защищает права и может корректировать несовершенства рынка"],
    correct: 2
  },
  {
    category: "ОБЩЕСТВЕННЫЕ БЛАГА",
    question: "Какой пример наиболее точно иллюстрирует общественное благо?",
    answers: ["Бутылка воды из магазина", "Национальная оборона", "Билет на концерт"],
    correct: 1
  },
  {
    category: "ВНЕШНИЕ ЭФФЕКТЫ",
    question: "Что называют отрицательным внешним эффектом?",
    answers: ["Издержки или ущерб для третьих лиц, не отражённые полностью в цене сделки", "Снижение цены после увеличения количества продавцов", "Расходы покупателя на выбранный товар"],
    correct: 0
  },
  {
    category: "МОНОПОЛИЯ",
    question: "Что характерно для монополии на рынке?",
    answers: ["Множество небольших продавцов с одинаковыми товарами", "Отсутствие единственного производителя", "Один продавец занимает доминирующее положение и сталкивается с ограниченной конкуренцией"],
    correct: 2
  },
  {
    category: "СПЕЦИАЛИЗАЦИЯ",
    question: "Как специализация может повысить производительность?",
    answers: ["Заставляет каждого работника выполнять все задачи самостоятельно", "Помогает сосредоточиться на отдельных задачах и развивать навыки", "Устраняет необходимость обмениваться результатами труда"],
    correct: 1
  },
  {
    category: "ОБМЕН И ДЕНЬГИ",
    question: "Какую проблему бартерного обмена помогают решить деньги?",
    answers: ["Необходимость найти участника, который одновременно хочет именно твой товар и предлагает нужный тебе", "Необходимость производить товары", "Потребность сравнивать качество разных продуктов"],
    correct: 0
  },
  {
    category: "РЫНОЧНЫЕ СИГНАЛЫ",
    question: "О чём может сигнализировать устойчивый рост спроса на товар при неизменном предложении?",
    answers: ["Покупатели перестали интересоваться этим товаром", "Производителям всегда следует закрыть производство", "На прежнем уровне цены может возникнуть дефицит, а цена — вырасти"],
    correct: 2
  },
  {
    category: "СВОБОДА ВЫБОРА",
    question: "Что означает экономическая свобода в рыночной системе?",
    answers: ["Возможность принимать решения без каких-либо законов", "Возможность выбирать профессию, товары или бизнес в рамках общих правил", "Гарантированную прибыль каждому участнику рынка"],
    correct: 1
  }
];

const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const questionTitle = document.querySelector("#question-title");
const answerList = document.querySelector("#answer-list");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#next-button");
const currentQuestion = document.querySelector("#current-question");
const questionNumber = document.querySelector("#question-number");
const questionCategory = document.querySelector("#question-category");
const progressTrack = document.querySelector(".progress-track");
const progressFill = document.querySelector("#progress-fill");
const scoreCount = document.querySelector("#score-count");
const scorePercent = document.querySelector("#score-percent");
const resultTitle = document.querySelector("#result-title");
const resultMessage = document.querySelector("#result-message");

let questionIndex = 0;
let correctAnswers = 0;
let hasAnswered = false;

function showScreen(screenToShow) {
  [startScreen, quizScreen, resultScreen].forEach((screen) => {
    screen.hidden = screen !== screenToShow;
  });
}

function formatNumber(number) {
  return String(number).padStart(2, "0");
}

function startQuiz() {
  questionIndex = 0;
  correctAnswers = 0;
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const question = questions[questionIndex];
  hasAnswered = false;
  currentQuestion.textContent = formatNumber(questionIndex + 1);
  questionNumber.textContent = formatNumber(questionIndex + 1);
  questionCategory.textContent = question.category;
  questionTitle.textContent = question.question;
  answerList.replaceChildren();
  feedback.hidden = true;
  feedback.className = "feedback";
  nextButton.disabled = true;
  nextButton.innerHTML = questionIndex === questions.length - 1
    ? 'Узнать результат <span class="button-arrow" aria-hidden="true">→</span>'
    : 'Ответить <span class="button-arrow" aria-hidden="true">→</span>';
  progressFill.style.width = `${(questionIndex / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(questionIndex));

  question.answers.forEach((answer, answerIndex) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "answer-option";
    option.dataset.answerIndex = String(answerIndex);
    option.innerHTML = `<span class="answer-letter" aria-hidden="true">${String.fromCharCode(65 + answerIndex)}</span><span class="answer-text"></span>`;
    option.querySelector(".answer-text").textContent = answer;
    option.addEventListener("click", () => selectAnswer(answerIndex));
    answerList.append(option);
  });
  questionTitle.focus({ preventScroll: true });
}

function selectAnswer(selectedIndex) {
  if (hasAnswered) return;
  hasAnswered = true;
  const question = questions[questionIndex];
  const isCorrect = selectedIndex === question.correct;
  if (isCorrect) correctAnswers += 1;

  answerList.querySelectorAll(".answer-option").forEach((option, index) => {
    option.disabled = true;
    if (index === question.correct) option.classList.add("is-correct");
    if (index === selectedIndex && !isCorrect) option.classList.add("is-wrong");
  });

  feedback.textContent = isCorrect
    ? "Верно! Отлично справляетесь."
    : `Не совсем. Правильный ответ: ${question.answers[question.correct]}`;
  feedback.classList.add(isCorrect ? "correct" : "incorrect");
  feedback.hidden = false;
  nextButton.disabled = false;
  nextButton.focus();
}

function showResults() {
  const percentage = Math.round((correctAnswers / questions.length) * 100);
  scoreCount.innerHTML = `${correctAnswers} <small>/ ${questions.length}</small>`;
  scorePercent.textContent = `${percentage}%`;
  progressFill.style.width = "100%";
  progressTrack.setAttribute("aria-valuenow", String(questions.length));

  if (percentage >= 80) {
    resultTitle.textContent = "Отличная работа!";
    resultMessage.textContent = "Вы хорошо ориентируетесь в принципах рыночной экономики. Так держать!";
  } else if (percentage >= 50) {
    resultTitle.textContent = "Хороший результат!";
    resultMessage.textContent = "У вас уже есть крепкая основа. Ещё немного практики — и будет отличный результат.";
  } else {
    resultTitle.textContent = "Это только начало!";
    resultMessage.textContent = "Теперь вы знаете, какие темы стоит повторить. Попробуйте пройти викторину ещё раз!";
  }
  showScreen(resultScreen);
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  if (!hasAnswered) return;
  if (questionIndex === questions.length - 1) {
    showResults();
    return;
  }
  questionIndex += 1;
  renderQuestion();
});

document.querySelector("#total-questions").textContent = String(questions.length);
