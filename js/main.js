/*------Constants------*/

const colors = {
  null: 'white',
  playerX: 'red',
  playerO: 'blue'
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];

/*------Variables (state)------*/

// Variables might include (board/turn/winner)

const board, turn, winner;

/*------Cached Element References------*/

// You might choose to put your game status here
const squares = document.querySelectorAll('td div');
const message = document.querySelector('h1');

/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click
document.querySelector('table').addEventListener('click', handlePlayer);
document.querySelector('button').addEventListener('click', initialize);


/*------Functions------*/

function initialize() {
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
}

function getWinner() {
  // for loop to get length of all the winning combinations
  for (let i = 0; i < winningCombos.length; i++) {
    if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3)
      return board[winningCombos[i][0]];
    // winning formula
  }
  if (board.includes(null)) {
    return null;
  } else return 'T';
} // draw formula

function render() {
  board.forEach(function (sq, index) {
    squares[index].style.background = lookup[sq];
  });
  if (winner === 'T') {
    message.innerHTML = 'A draw! The worst and best result for both players.';
  } else if (winner) {
    message.innerHTML = `${lookup[turn].toUppercase()} has won!`;
  } else {
    message.innerHTML = `${lookup[turn].toUppercase()}'s turn`;
  }
}

function handlePlayer(event) {
  // obtain the index of the square
  const index = parseInt(event.target.id.replace('sq', ''));
  if (board[index] || winner)
    return;
  board[index] = turn;
  turn *= -1;
  winner = getWinner();
  render();
}

// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

// On-Click function:
// Set up what happens when one of the elements
// is clicked


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is

// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

// 4) Upon loading the app should:
// 	4.1) Initialize the state variables
// 	4.2) Render those values to the page
// 	4.3) Wait for the user to click a square

// 5) Handle a player clicking a square

// 6) Handle a player clicking the replay button