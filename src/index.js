

// const gameAdapter = new GameAdapter()

const gameUrl = 'http://localhost:3000/api/v1/games'
const playerUrl = 'http://localhost:3000/api/v1/players'


document.addEventListener('DOMContentLoaded', () => {
    const playerForm = document.querySelector("#player-form")
    playerForm.addEventListener("submit",(e) => getPlayerName(e))
});

function getPlayerName(e){
    e.preventDefault()
    const playerName = document.querySelector("#player-name").value 

    createPlayerObj(playerName)
}

function createPlayerObj(playerName){
    fetch(playerUrl, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            player_name: playerName
        })
    })
    .then(resp => resp.json())
    .then(player => {
        startGame(player)
        // pass player object into createGame()
    })
}

function startGame(player, score){
    console.log(player)
    //new instance of game object here
}

// function newGame() {
//     document.addEventListener('keyup', (e) => {
//         if (e.keyCode === 32) {
//             const game = new Game()
//         }
//     })
// }

