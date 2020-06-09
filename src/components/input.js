class InputHandler{
    constructor(doctor,game){
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 37:
                    console.log('move left')
                    doctor.moveLeft()
                    break

                // case 38:
                //     console.log('arrowup')
                //     doctor.moveUp()
                //     break
                
                case 39:
                    console.log('move right')
                    doctor.moveRight()
                    break

                // case 40:
                //     console.log('arrowdown')
                //     doctor.moveDown()
                //     break
            }
        })

        document.addEventListener('keyup', (e) => {
            switch (e.keyCode) {
                case 37:
                    if (doctor.speed < 0) doctor.stop()
                    break

                // case 38:
                //     if (doctor.speed < 0) doctor.stop()
                //     break

                case 39:
                    if (doctor.speed > 0) doctor.stop()
                    break

                // case 40:
                //     if (doctor.speed < 0) doctor.stop()
                //     break
            }
        })

    }
}