class Game{
    constructor(){
        this.games = []
        this.adapter = new GameAdapter()
        this.canvas = document.getElementById('gameScreen');
        this.ctx = this.canvas.getContext('2d');
        this.gameWidth = this.canvas.width 
        this.gameHeight = this.canvas.height 
        this.createDoctor()
        this.initBindingsAndEventListeners()
        this.draw(this.ctx)

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
            this.games.push(game)
        })
    }

    createDoctor(){
        this.doctor = new Doctor(this.gameWidth, this.gameHeight)
        this.doctor.draw(this.ctx);
    }

    draw(ctx){
        // RED SQUARE TEST
        // ctx.beginPath();
        // ctx.rect(20, 40, 50, 50);
        // ctx.fillStyle = "#FF0000";
        // ctx.fill();
        // ctx.closePath();


        //PAUSE GAME
        // ctx.rect(0, 0, this.gameWidth, this.gameHeight);
        // ctx.fillStyle = "rgba(0,0,0,0.5)";
        // ctx.fill();
        // ctx.font = "30px san-sarif";
        // ctx.fillStyle = "white";
        // ctx.textAlign = "center";
        // ctx.fillText("Enter a Username to Start", this.gameWidth / 2, this.gameHeight / 2);
    }

}