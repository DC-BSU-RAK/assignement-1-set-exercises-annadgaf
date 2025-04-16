// RGB game variables
let correctColor;
let score = 0;
let lives = 3;

// Start the game
function startGame() {
  // Reset values
  score = 0;
  lives = 3;
  document.getElementById('score').textContent = score;
  document.getElementById('lives').textContent = lives;
  document.getElementById('message').textContent = '';
  document.getElementById('replay-btn').style.display = 'none';
  generateRound();
}

// Generate a random color string like "rgb(100, 200, 150)"
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Set up a new round
function generateRound() {
  const choicesContainer = document.getElementById('choices');
  choicesContainer.innerHTML = '';

  // Generate correct color
  correctColor = randomColor();

  // Display correct RGB string
  document.getElementById('rgb-value').textContent = correctColor.toUpperCase();

  // Generate an array of colors including the correct one
  const options = [correctColor];
  while (options.length < 3) {
    const newColor = randomColor();
    if (!options.includes(newColor)) options.push(newColor);
  }

  // Shuffle the options
  options.sort(() => Math.random() - 0.5);

  // Create buttons for each option
  options.forEach(color => {
    const div = document.createElement('div');
    div.classList.add('color-option');
    div.style.backgroundColor = color;
    div.onclick = () => handleGuess(color);
    choicesContainer.appendChild(div);
  });
}

// Handle user guess
function handleGuess(selectedColor) {
  const message = document.getElementById('message');
  
  // If guess is correct
  if (selectedColor === correctColor) {
    score++;
    message.textContent = '💖 Correct!';
  } else {
    lives--;
    message.textContent = '❌ Try again!';
  }

  // Update score and lives
  document.getElementById('score').textContent = score;
  document.getElementById('lives').textContent = lives;

  // Check for game over
  if (lives <= 0) {
    endGame();
  } else {
    setTimeout(generateRound, 1000);
  }
}

// End the game
function endGame() {
  document.getElementById('message').textContent = `Game Over! Final Score: ${score}`;
  document.getElementById('replay-btn').style.display = 'inline-block';
  document.getElementById('choices').innerHTML = '';
}

// Start the first game when page loads
window.onload = startGame;