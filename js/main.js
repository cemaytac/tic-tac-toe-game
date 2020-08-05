/*----- constants -----*/

const colors = {
  null: 'white',
  playerX: 'red',
  playerO: 'blue'
}
const winningCombos = [board[0], board[1], board[2] || board[3], board[4], board[5] || board[6], board[7], board[8] || board[0], board[4], board[8] || board[2], board[4], board[6] || board[0], board[3], board[6] || board[1], board[4], board[7] || board[2], board[5], board[8]]

/*----- app's state (variables) -----*/
const board = [null, null, null, null, null, null, null, null, null];

const turns

const winner;

/*----- cached element references -----*/
const topRow = document.getElementById('top');
const middleRow = document.getElementById('middle');
const bottomRow = document.getElementById('bottom');


/*----- event listeners -----*/



/*----- functions -----*/

// 1) Define required constants

// 2) Define required variables used to track the state of the game

// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

// 4) Upon loading the app should:
// 	4.1) Initialize the state variables
// 	4.2) Render those values to the page
// 	4.3) Wait for the user to click a square

// 5) Handle a player clicking a square

// 6) Handle a player clicking the replay button