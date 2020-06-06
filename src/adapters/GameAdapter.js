// class GameAdapter {
//     //connections with the API
//     constructor(){
//         this.baseUrl = 'http://localhost:3000/api/v1/games'

//     }

//     getGames(){
//         return fetch(this.baseUrl)
//         .then(resp => resp.json())
//     }

//     createGame(score, playerName){
//         console.log('new game')
//         // const game = new Game()
//         const game = {
//             score: score,
//             player_name: playerName
//         }

//         const resp = fetch(this.baseUrl, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify(game)
//         })
//         return resp.json()
//     }
// }