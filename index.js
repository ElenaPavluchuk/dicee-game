const randomize = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const determineWinner = (player1Result, player2Result) => {
  if (player1Result > player2Result) {
    return "Player 1 is winner!";
  } else if (player1Result < player2Result) {
    return "Player 2 is winner!";
  } else if (player1Result === player2Result) {
    return "Draw!";
  }
};

const updateImage = (player1Result, player2Result) => {
  const player1Image = document.getElementById("img-1");
  const player2Image = document.getElementById("img-2");

  const player1ImagePath = `images/dice${player1Result}.png`;
  const player2ImagePath = `images/dice${player2Result}.png`;

  player1Image.setAttribute("src", player1ImagePath);
  player2Image.setAttribute("src", player2ImagePath);
};

const updateTitle = (text) => {
  document.getElementById("h1").innerText = text;
};

const playGame = () => {
  const player1Result = randomize();
  const player2Result = randomize();
  updateImage(player1Result, player2Result);

  const resultText = determineWinner(player1Result, player2Result);
  updateTitle(resultText);
};
