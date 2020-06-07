
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
        //refactor: instead of making new object here, make new instance of game(const game = new Game()
        // in Game class, this.adapter is defined.. calls new GameAdapter.. which makes our POST request and RETURNS the data.
        createGameObj(player) 
    })
}

function createGameObj(player, score=0){
    // debugger
    // console.log('in game object')
    fetch(gameUrl, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            player: player,
            player_name: player.data.attributes.name,
            score: score
        })
    })
    .then(resp => resp.json())
    .then(game => {
        console.log(game)
        // start a new instance of game...
    })
}

