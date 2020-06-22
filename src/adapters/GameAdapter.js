class GameAdapter {
    constructor(){
        this.gameUrl = 'http://localhost:3000/api/v1/games'
        this.playerUrl = 'http://localhost:3000/api/v1/players'
    }

    getAllGames(){
        return fetch(this.gameUrl)
        .then(resp => resp.json())
    }

    createGameObj(playerName, score){
        return fetch(this.gameUrl, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                player_name: playerName,
                score: score
            })
        })
        .then(res => res.json())
    }

    async updateGame(game,score){
        const result = await fetch(`${this.gameUrl}/${game.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body:JSON.stringify({
                score: score
            })
        })
        return await result.json()
    }

}