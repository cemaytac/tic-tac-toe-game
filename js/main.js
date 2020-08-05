/*------Constants------*/

const colors = {
  null: 'white',
  playerX: 'red',
  playerO: 'blue'
}
const winningCombos = [board[0], board[1], board[2] || board[3], board[4], board[5] || board[6], board[7], board[8] || board[0], board[4], board[8] || board[2], board[4], board[6] || board[0], board[3], board[6] || board[1], board[4], board[7] || board[2], board[5], board[8]];

/*------Variables (state)------*/

// Variables might include (board/turn/winner)

const board = [null, null, null, null, null, null, null, null, null];

const turns

const winner;

/*------Cached Element References------*/

// You might choose to put your game status here

/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click

/*------Functions------*/


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

// 1) Define required constants

// 2) Define required variables used to track the state of the game

// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

// 4) Upon loading the app should:
// 	4.1) Initialize the state variables
// 	4.2) Render those values to the page
// 	4.3) Wait for the user to click a square

// 5) Handle a player clicking a square

// 6) Handle a player clicking the replay button