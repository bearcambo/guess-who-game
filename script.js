const characters = [
  'Robo Rex', 'Captain Peg', 'Wanda the Wise', 'Chef Spatula',
  'Super Nova', 'Astrid Explorer', 'Detective Doyle', 'Knight Valor',
  'Marina the Mermaid', 'Vlad the Vampire', 'Chuckles the Clown', 'Artie Brush',
  'Galaxy Gem', 'Professor Sparks', 'Queen Quirk', 'Shadow Steve',
  'Dr. Gears', 'Lady Luna', 'Speedy Sam', 'Captain Featherbeard',
  'Frankie Flames', 'Benny Bubbles', 'Zara Zany', 'Oliver Orbit'
];

const board = document.getElementById('game-board');

// Render the board
characters.forEach((character, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerText = character;
  card.dataset.index = index;

  // Add flip functionality
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  board.appendChild(card);
});

document.getElementById('ask-btn').addEventListener('click', () => {
  const question = document.getElementById('question').value;
  alert(`You asked: "${question}"`);
});

document.getElementById('guess-btn').addEventListener('click', () => {
  const guess = prompt('Who do you think it is?');
  alert(`You guessed: "${guess}"`);
});
