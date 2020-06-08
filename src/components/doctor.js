class Doctor {
    constructor(gameWidth, gameHeight, position = false) {
        this.gameWidth = gameWidth
        // this.width = this.img.width 
        this.width = 60;
        this.height = 50;

        if (!position) {
            this.position = {
                x: gameWidth / 2 - this.width / 2,
                y: gameHeight - this.height - 30
            }
        } else {
            this.position = position
        }
    }

    draw(ctx) {
        // ctx.drawImage(this.location.x, this.location.y, this.width, this.height)
        ctx.fillStyle = "#F2A491"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        
    }

}