when dom loads:    
0. we could.. pick a theme/background OR pick a character..
1. load instructions
2. we want to create new game
    -add event listener for a keyup
    -w/ callbackfunction for createGame()


Listening for the enter key, to create a new instance of game:

document.addEventListner('keyup', (e) => {
    if (e.keyCode === 32) {
        startgame
    }
})



//     00. show top 5 players..(after you play/lose)