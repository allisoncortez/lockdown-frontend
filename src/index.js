

// const gameAdapter = new GameAdapter()

document.addEventListener('DOMContentLoaded', () => {
    // getPlayer() - get name from player form
        // >>createPlayer() function (pass in playerForm info)
            // >> createGame() from within createPlayer function(pass in that player)
    // getPlayer()
    const playerForm = document.querySelector("#player-form")
    playerForm.addEventListener("submit",(e) => getPlayerName(e))

});

function getPlayerName(e){
    e.preventDefault()
    const playerName = document.querySelector("#player-name").value 

    createPlayerObj(playerName)
}

function createPlayerObj(playerName){
    console.log(playerName)
}

// function getPlayer(){
//     console.log('get playername from form')
//     // get name from player form
//     // make a fetch POST request to make a new player

// }

// function newGame() {
//     document.addEventListener('keyup', (e) => {
//         if (e.keyCode === 32) {
//             console.log("startgame")
//             const game = new Game()
//             // create new game object , pass in the player
//             // const game = new Game()
//         }
//     })
// }

