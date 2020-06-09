class Pathogen{
    constructor(gameWidth,gameHeight){
        // this.gameWidth = gameWidth
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.x = 300
        this.y = 480
        this.maxSpeed = 7 
        this.speed = 0 
        // this.locateDoctor = locateDoctor

        this.velocity = -this.maxSpeed
    }

    update(deltaTime){
        this.x += this.velocity 
        this.draw() 
        this.velocity = -maxSpeed

        // if(!deltaTime) return 
        // this.position.x += this.velocity.x * deltaTime 
        // this.position.y += this.velocity.y * deltaTime
    }

    draw(){
        // ctx.fillStyle = "#de3a0d"
        // ctx.fillRect(this.position.x,this.position.y)
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height) >> DOCTOR

        ctx.beginPath()
        ctx.fillStyle = "#de3a0d"
        ctx.fillRect(this.x,this.y,this.w,this.h)
        ctx.closePath()
        
    }
}