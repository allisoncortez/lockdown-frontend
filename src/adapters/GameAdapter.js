class GameAdapter {
    constructor(){
        this.gameUrl = 'http://localhost:3000/api/v1/games'
        this.playerUrl = 'http://localhost:3000/api/v1/players'
    }

//     getGames(){
//         return fetch(this.baseUrl)
//         .then(resp => resp.json())
//     }

    // createPlayerObj(playerName){
    //     // const player = {
    //     //     player_name: playerName
    //     // }

    //     return fetch(this.playerUrl, {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify({
    //             player_name: playerName
    //         })
    //         .then(res => res.json())
    //         .then(player => {
    //             createGameObj(player)
    //         })

    //     })
    // }

    createGameObj(playerName, score=0){
        // const game = {
        // score: score,
        // player_name: playerName
        // }

        return fetch(this.gameUrl, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                player_name: playerName,
                // player_name: player.data.attributes.name,
                score: score
            })
        })
        // return resp.json()
        .then(res => res.json())
    }

}