class Pathogen{
    constructor(gameWidth,gameHeight,w=50,h=50){
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.y = 50 //heightoncanvas
        this.w = w 
        this.h = h
        this.maxSpeed = 7 
        this.velocity = this.maxSpeed
        let rand = Math.floor(Math.random() * 400) + -100
        this.position = {
            x: this.gameWidth / 2 - this.w / 2 + rand,
        }
    }

    update(deltaTime){
            this.y -= this.velocity
            this.velocity = -this.maxSpeed
    }

    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle = "#de3a0d"
        ctx.fillRect(this.position.x,this.y,this.w,this.h)
        ctx.closePath()
    }
}