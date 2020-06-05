class Game{
    constructor(){
        // instantiate a new instance of the game
        // this.adapter = new GameAdapter()
        this.canvas = document.getElementById('gameScreen');
        this.ctx = this.canvas.getContext('2d');
        // this.gameWidth = this.canvas.width
        // this.gameHeight = this.canvas.height
        // this.score = 0 
        // this.pathogens = []

        // this.createDoctor()
        // this.draw(this.ctx)

    }

    // fetchAndLoadGames(){
    //     this.adapter.getGames().then(games => {
    //         console.log(games)
    //     })
    // }

    // start(){
        // this.lives = 3
        // this.createPathogens() .. and then render
        // this.gameLoop()
    // }

    // createPathogens() {
    //     let count = 5
    //     for (let i = 0; i < count; i++) {
    //     console.log('create new virus instances')
    //     }
    //     renderPathogens()
    // }

    // renderPathogens() {
  
    // }

    // locateDoctor(){

    // }

    createDoctor(){
        console.log('new Doctor')

        // this.doctor = new Doctor(this.gameWidth, this.gameHeight);
        // this.doctor.draw(this.ctx);
    }

    // update(){

    // }

    draw(ctx) {
        // if (this.gamestate === GAMESTATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();
            // ctx.font = "30px arcadeClassic";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        }

    // gameLoop(){

    // }
}