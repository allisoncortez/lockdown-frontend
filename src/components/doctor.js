class Doctor {
    constructor(gameWidth, gameHeight, position = false) {
        this.gameWidth = gameWidth
        this.width = 60;
        this.height = 50;
        this.maxSpeed = 7;
        this.speed = 0;

        if (!position) {
            this.position = {
                x: gameWidth / 2 - this.width / 2,
                y: gameHeight - this.height - 30
            }
        } else {
            this.position = position
        }
    }

    moveLeft(){
        this.speed = -this.maxSpeed
    }

    moveRight(){
        this.speed = this.maxSpeed
    }

    stop(){
        this.speed = 0
    }

    draw(ctx) {
        ctx.fillStyle = "#F2A491"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(deltaTime){
        if (!deltaTime) return;
        this.position.x += this.speed
        if (this.position.x < 0) this.position.x = 0
        if (this.position.x + this.width > this.gameWidth)
            this.position.x = this.gameWidth - this.width
    }

}