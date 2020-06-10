class Pathogen{
    constructor(x=200,y=50,w=50,h=50){
        // this.gameWidth = gameWidth
        // this.gameHeight = gameHeight
        this.x = x //width
        this.y = y //height
        this.w = w 
        this.h = h
        this.maxSpeed = 7 
        this.velocity = this.maxSpeed
        // this.velocity = {
        //     x: Math.floor(Math.random() * 100) + -20,
        //     y: Math.floor(Math.random() * -100) + -20
        // }


    }

    update(){
        this.y -= this.velocity 
        this.velocity = -this.maxSpeed

        // this.location = {
        //     x: this.x + this.velocity.x * 0.03,
        //     y: this.y + this.velocity.y * 0.03
        // }

        // if (this.location.x >= 580 || this.location.x <= 0){
        //     this.velocity.x = -1 * this.velocity.x
        // }
    }

    draw(ctx){

        ctx.beginPath()
        ctx.fillStyle = "#de3a0d"
        ctx.fillRect(this.x,this.y,this.w,this.h)
        // ctx.fillRect(this.location.x,this.location.y,this.size.x,this.size.y)
        ctx.closePath()
        
    }
}