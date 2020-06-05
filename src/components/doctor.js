class Doctor {
    constructor(gameWidth, gameHeight, location = false) {
        // this.img = document.getElementById('doctor')
        this.gameWidth = gameWidth

        // this.width = this.img.width 
        // this.height = this.img.height 

        this.maxSpeed = 6 
        this.speed = 0  

        // if (!location) {
        //     this.location = {
        //         x: gameWidth / 2 - this.width / 2,
        //         y: gameHeight - this.height - 60
        //     }
        // } else {
        //     this.location = location
        // }
    }

    moveLeft(){
        this.speed = -this.maxSpeed
    }

    // draw(ctx) {
    //     ctx.drawImage(this.img, this.location.x, this.location.y,this.width,this.height)
    // }

    draw(ctx){
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(this.location.x,this.location.y, this.width, this.height)
    }

    update(deltaTime) {
        if (!deltaTime) return;
        this.location.x += this.speed
        if (this.location.x < 0) this.location.x = 0
        if (this.location.x + this.width > this.gameWidth)
            this.location.x = this.gameWidth - this.width
    }

}