
// const gameUrl = 'http://localhost:3000/api/v1/games'
// const playerUrl = 'http://localhost:3000/api/v1/players'

// document.addEventListener('DOMContentLoaded', () => {
//     const playerForm = document.querySelector("#player-form")
//     playerForm.addEventListener("submit",(e) => getPlayerName(e))
// });

// function getPlayerName(e){
//     e.preventDefault()
//     const playerName = document.querySelector("#player-name").value 
//     createPlayerObj(playerName)
// }

// function createPlayerObj(playerName){
//     fetch(playerUrl, {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             player_name: playerName
//         })
//     })
//     .then(resp => resp.json())
//     .then(player => {
//         createGameObj(player) 
//     })
// }

// function createGameObj(player, score=0){
//     fetch(gameUrl, {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             player: player,
//             player_name: player.data.attributes.name,
//             score: score
//         })
//     })
//     .then(resp => resp.json())
//     .then(game => {
//         console.log(game)
//     })
// }

const game = new Game()

