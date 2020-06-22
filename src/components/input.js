class InputHandler{
    constructor(doctor){
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 37:
                    doctor.moveLeft()
                    break
                
                case 39:
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