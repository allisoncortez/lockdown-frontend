class Game{
    constructor(){
        // instantiate a new instance of the game
        // this.adapter = new GameAdapter()
        this.canvas = document.getElementById('gameScreen')
        this.ctx = this.canvas.getContext('2d')
        this.gameWidth = this.canvas.width
        this.gameHeight = this.canvas.height
        this.score = 0 
        this.pathogens = []
        // this.createDoctor()
        // this.draw(this.ctx)

         // this.fetchAndLoadGames()
         this.start()

    }

    // fetchAndLoadGames(){
    //     this.adapter.getGames().then(games => {
    //         console.log(games)
    //     })
    // }

    start(){
        // this.lives = 3
        // this.createPathogens() .. and then render
        // this.gameLoop()
        console.log('game started')

    }

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

    // createDoctor(){

    // }


    // update(){

    // }

    // draw(ctx){

    // }

    // gameLoop(){

    // }
}