class Pathogen{
    constructor(x,y,w,h){
        // this.gameWidth = gameWidth
        // this.gameHeight = gameHeight
        this.x = x //width
        this.y = y //height
        this.w = w 
        this.h = h
        this.maxSpeed = 7 
        // this.speed = 0 

        // this.velocity = velocity
        this.velocity = this.maxSpeed
    }

    draw(ctx){
        // ctx.fillStyle = "#de3a0d"
        // ctx.fillRect(this.position.x,this.position.y)
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height) >> DOCTOR

        ctx.beginPath()
        ctx.fillStyle = "#de3a0d"
        ctx.fillRect(this.x,this.y,this.w,this.h)
        // ctx.fillRect(this.location.x,this.location.y,this.size.x,this.size.y)
        ctx.closePath()
        
    }

    update(deltaTime){
        //working
        // this.x += this.velocity 
        // this.velocity = -this.maxSpeed

        this.y -= this.velocity 
        this.velocity = -this.maxSpeed
        
        // test
        // if(!deltaTime) return
        // this.location.x += this.velocity.x * deltaTime 
        // this.location.y += this.velocity.y * deltaTime
    }
}