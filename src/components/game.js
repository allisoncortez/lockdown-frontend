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
        this.listener = new InputHandler(this.doctor)
        this.scoreObj = document.getElementById("score")
        this.scoreObj.innerText = this.score
        this.scoresContainer = document.getElementById('scores-container')
        this.scoresList = document.getElementById('scores-list')
        this.playerForm = document.querySelector("#player-form")
        this.playerFormBody = document.getElementById('player-name')
        this.playerForm.addEventListener("submit",this.getPlayerName.bind(this))
        this.gamesbtn = document.querySelector("#all-games")
        // this.gamesbtn.addEventListener("submit", this.getAllGames.bind(this))
        this.lastTime = 0
        this.deltaTime = 0
        this.initialPathogenTimer = 200 
        this.pathogenTimer = 200 

    }

    getPlayerName(e){
        e.preventDefault()
        const playerName = this.playerFormBody.value 
        this.adapter.createGameObj(playerName, this.score).then(game => {
            this.games.push(game)
            this.gamestate = GAMESTATE.RUNNING
            this.start()
        })
        document.getElementById("player-form").reset()
    }

    getAllGames(e){
        e.preventDefault()
        this.adapter.getAllGames()
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

    // startOver(e){
    //     if (e.key === 'Enter'){
    //         debugger
    //         // createGameObj(this.player)
    //         // const playerName = this.player.name 

    //         // this.adapter.createGameObj(this.player).then(game => {
    //         //     // console.log(game)
    //         //     // clear playerform value here
    //         //     // this.games.push(game)
    //         //     // this.gamestate = GAMESTATE.RUNNING
    //         //     // this.start()
    //         // })

    //         // this.gamestate = GAMESTATE.RUNNING
    //         // new
    //     }
    // }

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
        let pathogen1 = new Pathogen(this.gameWidth,this.gameHeight)
        this.pathogens.push(pathogen1)
 
        // render pathogens
        for (let i = 0; i < this.pathogens.length; i++){
            let p = this.pathogens[i]
            p.update(this.deltaTime)
            p.draw(this.ctx)

            // check if virus goes offscreen
            if (p.y > this.gameHeight){
                this.pathogens.slice(i,1)
            }
        }
    }


    checkCollision(obj1,obj2) { //p,doctor
        const btmOfPathogen = obj1.y + obj1.w
        const topOfPathogen = obj1.y
        const topOfDr = obj2.position.y
        const btmOfDr = obj2.position.y + obj2.width
        const leftOfDr = obj2.position.x
        const rightOfDr = obj2.position.x + obj2.height
        if (btmOfPathogen <= topOfDr || topOfPathogen >= btmOfDr) return false
        if (obj1.position.x >= rightOfDr || obj1.position.x + obj1.w <= leftOfDr) return false
        return true
    }

    draw(ctx){
        if (this.gamestate === GAMESTATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();
            ctx.font = "26px sans-serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("enter player name to start", this.gameWidth / 2, this.gameHeight / 2);
            this.scoreAdapter.getTopFive().then(topFive => {
                for (let scoreObj of topFive) {
                    let li = document.createElement('li')
                    li.innerText = `${scoreObj.player.name} - ${scoreObj.score}`
                    this.scoresList.appendChild(li)
                    this.scoresContainer.style.display = "block"
                }
            })
        } else {
            this.scoresContainer.style.display = 'none'
        } 

        if (this.gamestate === GAMESTATE.GAMEOVER) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();
            ctx.font = "30px sans-serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("game over ;(", this.gameWidth / 2, this.gameHeight / 2-80);
            //update score
            this.adapter.updateGame(this.games[0],this.score)
        }
    }

    update(deltaTime){
        if (this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.GAMEOVER )
            return;

        for (let p of this.pathogens){
            p.update(deltaTime)
            p.draw(this.ctx)

            if (this.checkCollision( p, this.doctor)){
                this.gamestate = GAMESTATE.GAMEOVER
            }
        }

        this.pathogenTimer--
        if (this.pathogenTimer <= 0 && this.gamestate === GAMESTATE.RUNNING){
            this.createPathogen()
            this.pathogenTimer = this.initialPathogenTimer - this.gameSpeed * 8
            if(this.pathogenTimer < 60){
                this.pathogenTimer = 60
            }
        }
    }

    gameLoop(timestamp){
        if (this.gamestate === GAMESTATE.RUNNING){
            this.score++
            this.gameSpeed += 0.08
        }
        this.scoreObj.innerText = this.score
        this.deltaTime = timestamp - this.lastTime
        this.lastTime = timestamp
        this.ctx.clearRect(0,0, this.gameWidth, this.gameHeight)
        this.doctor.update(this.deltaTime)
        this.doctor.draw(this.ctx)

        this.update(this.deltaTime)
        this.draw(this.ctx)

        requestAnimationFrame(this.gameLoop.bind(this))
     }
}

