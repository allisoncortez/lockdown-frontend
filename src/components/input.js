class InputHandler{
    constructor(doctor,game){
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 37:
                    console.log('move left')
                    doctor.moveLeft()
                    break
                
                case 39:
                    console.log('move right')
                    doctor.moveRight()
                    break
            }
        })

        document.addEventListener('keyup', (e) => {
            switch (e.keyCode) {
                case 37:
                    if (doctor.speed < 0) doctor.stop()
                    break
                case 39:
                    if (doctor.speed > 0) doctor.stop()
                    break
            }
        })

    }
}