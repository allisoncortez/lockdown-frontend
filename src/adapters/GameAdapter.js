class GameAdapter {
    constructor(){
        this.gameUrl = 'http://localhost:3000/api/v1/games'
        this.playerUrl = 'http://localhost:3000/api/v1/players'
    }

    getAllGames(){
        return fetch(this.gameUrl)
        .then(resp => resp.json())
        // .then(games => {
        //     console.log(games)
        // })
    }

    createGameObj(playerName, score=0){
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