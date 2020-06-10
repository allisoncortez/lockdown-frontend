const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
}

class Game{
    constructor(){
        this.games = []
        this.adapter = new GameAdapter()
        this.canvas = document.getElementById('gameScreen');
        this.ctx = this.canvas.getContext('2d');
        this.gameWidth = this.canvas.width 
        this.gameHeight = this.canvas.height 
        this.score = 0
        this.gameSpeed = 0
        this.pathogens = []
        this.gamestate = GAMESTATE.PAUSED
        this.createDoctor()
        this.initBindingsAndEventListeners()
        this.draw(this.ctx)

    }

    initBindingsAndEventListeners(){
        this.listener = new InputHandler(this.doctor, this)
        this.playerForm = document.querySelector("#player-form")
        this.playerFormBody = document.getElementById('player-name')
        this.playerForm.addEventListener("submit",this.getPlayerName.bind(this))
        this.lastTime = 0
        this.deltaTime = 0
        this.initialPathogenTimer = 200 
        this.pathogenTimer = 200 
    }

    getPlayerName(e){
        e.preventDefault()
        const playerName = this.playerFormBody.value 

        this.adapter.createGameObj(playerName).then(game => {
            console.log(game)
            // clear playerform value here
            this.games.push(game)
            this.gamestate = GAMESTATE.RUNNING
            this.start()
        })
    }

    createDoctor(){
        this.doctor = new Doctor(this.gameWidth, this.gameHeight)
        this.doctor.update(this.deltaTime)
        this.doctor.draw(this.ctx)
    }

    start(){
        this.createPathogen()
        this.gameLoop()
    }

    createPathogen(){
        let size = this.RandomIntInRange(20,70) 
        let type = this.RandomIntInRange(0,1)
        // let pathogen1 = new Pathogen(this.gameWidth + size, this.gameHeight - size,size,size)
        let pathogen1 = new Pathogen(200, 50,50,50)


        if (type == 1){
            pathogen1.y -= this.doctor.height - 10 
        }

        this.pathogens.push(pathogen1)
        pathogen1.update(this.deltaTime)
        pathogen1.draw(this.ctx)
    }

    // locateDoctor(){
    //     return this.doctor.location 
    // }

    RandomIntInRange(min,max){
        return Math.round(Math.random() * (max - min) + min)
    }

    draw(ctx){
        // RED SQUARE TEST
        // ctx.beginPath();
        // ctx.rect(20, 40, 50, 50);
        // ctx.fillStyle = "#FF0000";
        // ctx.fill();
        // ctx.closePath();

        if (this.gamestate === GAMESTATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();
            ctx.font = "26px sans-serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("enter player name to start", this.gameWidth / 2, this.gameHeight / 2);
        } 

    }

    update(deltaTime){
        if (this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.MENU )
            return;
    }

    gameLoop(timestamp){
        this.deltaTime = timestamp - this.lastTime
        this.lastTime = timestamp
        this.ctx.clearRect(0,0, this.gameWidth, this.gameHeight)
        this.doctor.update(this.deltaTime)
        this.doctor.draw(this.ctx)


        this.pathogenTimer--
        if (this.pathogenTimer <= 0){
            this.createPathogen()
            console.log(this.pathogens)
            this.pathogenTimer = this.initialPathogenTimer - this.gameSpeed * 8

            if(this.pathogenTimer < 60){
                this.pathogenTimer = 60
            }
        }
        // add in pathogens
        for (let i = 0; i < this.pathogens.length; i++){
            let p = this.pathogens[i]
            p.update(this.deltaTime)
            p.draw(this.ctx)
        }

        requestAnimationFrame(this.gameLoop.bind(this))
        this.gameSpeed += 0.003
    }
}

