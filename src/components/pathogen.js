class Pathogen{
    constructor(gameWidth,gameHeight,w=50,h=50){
        // x=200,y=50,
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight

        //position
        // this.x = x
        this.y = 50 //heightoncanvas

        //size
        this.w = w 
        this.h = h

        this.maxSpeed = 7 
        this.velocity = this.maxSpeed
        // this.velocity = {
        //     x: Math.floor(Math.random() * 100) + -20,
        //     y: Math.floor(Math.random() * -100) + -20
        // }

        let rand = Math.floor(Math.random() * 400) + -100
        // let rand2 = Math.floor(Math.random() * 400) + 300
        this.position = {
            x: this.gameWidth / 2 - this.w / 2 + rand,
            // y: this.gameHeight - this.h - rand2
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
        // ctx.fillRect(this.location.x,this.location.y,this.size.x,this.size.y)
        ctx.closePath()
        
    }
}