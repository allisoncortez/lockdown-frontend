const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    GAMEOVER: 2,
}

class Game{
    constructor(){
        this.games = []
        this.adapter = new GameAdapter()
        this.scoreAdapter = new ScoreAdapter()
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
        this.enterkey = document.addEventListener('keypress', this.startOver.bind(this))
        this.scoresContainer = document.getElementById('scores-container')
        this.scoresList = document.getElementById('scores-list')
        this.playerForm = document.querySelector("#player-form")
        this.playerFormBody = document.getElementById('player-name')
        this.playerForm.addEventListener("submit",this.getPlayerName.bind(this))
        this.gamesbtn = document.querySelector("#all-games")
        this.gamesbtn.addEventListener("submit", this.getAllGames.bind(this))
        this.lastTime = 0
        this.deltaTime = 0
        this.initialPathogenTimer = 200 
        this.pathogenTimer = 200 
    }

    getPlayerName(e){
        e.preventDefault()
        const playerName = this.playerFormBody.value 

        this.adapter.createGameObj(playerName).then(game => {
            // console.log(game)
            // clear playerform value here
            this.games.push(game)
            this.gamestate = GAMESTATE.RUNNING
            this.start()
        })
    }

    getAllGames(e){
        e.preventDefault()
        this.adapter.getAllGames()
        // .then(games => { this.renderGames(games)
        .then(games => {
            games.data.forEach(game => {
                const gameMarkup =`
                <div data-id = ${game.id}>
                <h3>${game.attributes.score} | ${game.attributes.player.name}</h3>
                </div>`
                document.querySelector('#games-cont').innerHTML += gameMarkup
            })
        })
    }

    startOver(e){
        if (e.key === 'Enter'){
            debugger
            // createGameObj(this.player)
            this.gamestate = GAMESTATE.RUNNING
        }
    }

    createDoctor(){
        this.doctor = new Doctor(this.gameWidth, this.gameHeight)
        this.doctor.update(this.deltaTime)
        this.doctor.draw(this.ctx)
    }

    //Collision check here

    start(){
        this.createPathogen()
        this.gameLoop()
    }

    createPathogen(){
        let pathogen1 = new Pathogen()
        this.pathogens.push(pathogen1)
        // pathogen1.update(this.deltaTime)
        // pathogen1.draw(this.ctx)

        // add in pathogens
        for (let i = 0; i < this.pathogens.length; i++){
            let p = this.pathogens[i]
            p.update(this.deltaTime)
            p.draw(this.ctx)
        }
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

        if (this.gamestate === GAMESTATE.GAMEOVER) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();
            ctx.font = "30px sans-serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("game over. Press enter to play again!", this.gameWidth / 2, this.gameHeight / 2);

            this.scoreAdapter.getTopFive().then(topFive => {
                // console.log(topFive)
                for (let scoreObj of topFive) {
                    // console.log(topFive)
                    // debugger
                    let li = document.createElement('li')
                    li.innerText = `${scoreObj.player.name} - ${scoreObj.score}`
                    this.scoresList.appendChild(li)
                    this.scoresContainer.style.display = "block"
                }
            })
         } // else {
        //     this.scoresDiv.style.display = 'none'
        // }

    }

    update(deltaTime){
        if (this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.MENU )
            return;

        //check if pathogen goes off screen => toggle gameover
        for (let p of this.pathogens){
            p.update(deltaTime)
            p.draw(this.ctx)
            if (p.y > this.gameHeight){
                this.gamestate = GAMESTATE.GAMEOVER
            }
        }

        this.pathogenTimer--
        if (this.pathogenTimer <= 0 && this.gamestate === GAMESTATE.RUNNING){
            this.createPathogen()
            // console.log(this.pathogens)
            this.pathogenTimer = this.initialPathogenTimer - this.gameSpeed * 8

            if(this.pathogenTimer < 60){
                this.pathogenTimer = 60
            }
        }
        
    }

    gameLoop(timestamp){
        this.deltaTime = timestamp - this.lastTime
        this.lastTime = timestamp
        this.ctx.clearRect(0,0, this.gameWidth, this.gameHeight)
        this.doctor.update(this.deltaTime)
        this.doctor.draw(this.ctx)

        this.update(this.deltaTime)
        this.draw(this.ctx)

        requestAnimationFrame(this.gameLoop.bind(this))
        this.gameSpeed += 0.003
    }
}

