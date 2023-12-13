const cards = [
  
];

const quizzes = [
  
];

function drawCard() {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const cardImage = document.getElementById('card-image');
  const quizContainer = document.getElementById('quiz-container');

  cardImage.src = cards[randomIndex];
  displayQuiz(randomIndex, quizContainer);
}

function displayQuiz(index, container) {
  container.innerHTML = `<p>${quizzes[index]}</p>`;
}

drawCard();  // 初期表示でカードを引く
