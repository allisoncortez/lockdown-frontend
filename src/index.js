

// const gameAdapter = new GameAdapter()

document.addEventListener('DOMContentLoaded', () => {
    // getPlayer() - get name from player form
        // >>createPlayer() function (pass in playerForm info)
            // >> createGame() from within createPlayer function(pass in that player)
            getPlayer()

});

function getPlayer(){
    console.log('get playername from form')
    // get name from player form
    // make a fetch POST request to make a new player

}

function newGame() {
    document.addEventListener('keyup', (e) => {
        if (e.keyCode === 32) {
            console.log("startgame")
            const game = new Game()
            // create new game object , pass in the player
            // const game = new Game()
        }
    })
}



// const game = new Game()

// 
// function createGame(score, playerName){
//     console.log('game created')
//     const game = {
//         score: score,
//         player_name: playerName
//     }

//     const resp = fetch(this.baseUrl, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify(game)
//     })
//     return resp.json()
// }

