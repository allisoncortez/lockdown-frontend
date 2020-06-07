class Game{
    constructor(){
        this.games = []
        this.adapter = new GameAdapter()
        this.initBindingsAndEventListeners()
        // this.canvas = document.getElementById('gameScreen');
        // this.ctx = this.canvas.getContext('2d');
        // 

    }

    initBindingsAndEventListeners(){
        this.playerForm = document.querySelector("#player-form")
        this.playerFormBody = document.getElementById('player-name')
        this.playerForm.addEventListener("submit",this.getPlayerName.bind(this))
    }

    getPlayerName(e){
        e.preventDefault()
        const playerName = this.playerFormBody.value 

        this.adapter.createGameObj(playerName).then(game => {
            console.log(game)
            // this.game.push(new Game)
        })
        // createPlayerObj(playerName)
    }

}