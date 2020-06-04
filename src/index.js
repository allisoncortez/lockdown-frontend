console.log("in index.js");
endPoint = "http://localhost:3000/api/v1/games"

document.addEventListener('DOMContentLoaded', () => {
    // loadRules()
        //press enter to start..
    newGame() 

});



function newGame() {
    document.addEventListener('keyup', (e) => {
        if (e.keyCode === 32) {
            console.log("startgame")
            // startgame
            const game = new Game()
        }
    })
}



// function createGame(score, playerName){
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


// this fires off our components/game class .. which is the container for our Game logic
// const game = new Game()

