const quizData = [
  {
    question: "What is the human's largest organ?",
    a: "The Heart.",
    b: "The Stomach.",
    c: "The Skin.",
    d: "The Brain.",
    hint: "You wont expect it.",
    answer: "c",
  },
  {
    question: "How long apporximately does a fly live?",
    a: "7-8 Days.",
    b: "13-15 Days.",
    c: "18-22 Days.",
    d: "27-30 Days.",
    hint: "Maybe -3 Days?",
    answer: "d",
  },
  {
    question: "what is the world's largest country?",
    a: "India.",
    b: "Russia.",
    c: "USA.",
    d: "China.",
    hint: "It's China you stupid Russian.",
    answer: "b",
  },
  {
    question: "Total number of oceans in the world is:",
    a: "4",
    b: "5",
    c: "6",
    d: "7",
    hint: "numberOfOceans = numbers.length",
    answer: "d",
  },
  {
    question: "What is the result of 6-6*2/3+5 ?",
    a: "7",
    b: "5",
    c: "0",
    d: "8",
    hint: "4:-,1:*,2:/,3:+",
    answer: "a",
  },
  {
    question: "The People in Denmark are called:",
    a: "Denmarkians",
    b: "Denmarkies",
    c: "Danes",
    d: "Danish",
    hint: "It's not obvious.",
    answer: "c",
  },
  {
    question: "A Farmer has 13 Sheeps , ALL but 8 died , How many Left?",
    a: "All",
    b: "None",
    c: "5",
    d: "8",
    hint: "think like a baby.",
    answer: "d",
  },
  {
    question: "How many letters are in the Arabic Alphabet?",
    a: "26",
    b: "27",
    c: "28",
    d: "29",
    hint: "it's the square root of 841 - 1.",
    answer: "c",
  },
  {
    question: "Men Rabbek al a3la?",
    a: "Fares Krouma",
    b: "Jozi",
    c: "Farzan",
    d: "Frez",
    hint: "it's a help question.",
    answer: ["a", "b", "c", "d"],
  },
];
const question = document.getElementById("questions");
const hints = document.getElementById("hints");
const text_a = document.getElementById("text_a");
const text_b = document.getElementById("text_b");
const text_c = document.getElementById("text_c");
const text_d = document.getElementById("text_d");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;

function loadQuiz() {
  let currentQuizData = quizData[currentQuiz];
  hints.textContent = "hint : " + currentQuizData.hint;
  question.textContent = currentQuizData.question;
  text_a.textContent = currentQuizData.a;
  text_b.textContent = currentQuizData.b;
  text_c.textContent = currentQuizData.c;
  text_d.textContent = currentQuizData.d;
  a.checked = false;
  b.checked = false;
  c.checked = false;
  d.checked = false;
}

let answer = undefined;
let answers = document.querySelectorAll(".answer");
let score = 0;

function checkAnswer() {
  answers.forEach((answerEl) => {
    if (answerEl.checked === true) {
      answer = answerEl.id;
      let currentQuizData = quizData[currentQuiz];
      if (answer === currentQuizData.answer) {
        score++;
      }
    }
  });
}

const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");

function submit() {
  if (currentQuiz === quizData.length - 1) {
    score++;
    let list = document.getElementById("list");
    list.remove();
    question.innerHTML = `Your Score is ${score} out of ${quizData.length} =).`;
    hints.innerHTML = "That's it, Hope you enjoyed my Quiz App.";
    submitBtn.innerHTML = "Try Again.";
    currentQuiz++;
  } else if (currentQuiz === quizData.length) {
    location.reload();
  } else if (
    a.checked === false &&
    b.checked === false &&
    c.checked === false &&
    d.checked === false
  ) {
    alert("Please Select An Answer.");
  } else {
    checkAnswer();
    currentQuiz++;
    loadQuiz();
    console.log(answer, list, score);
    // unselect();
  }
}
loadQuiz();
