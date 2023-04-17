import k from '../kaboom'

export default function controls() {
    const {
        onKeyPress //Use to be keyPress
    } = k
    
    return {
        add() {
            onKeyPress('left', () => { //Use to be keyPress
                if(!this.movement) {
                    console.error('missing movement component')
                    return
                }

                this.movement.left()
            })
            onKeyPress('right', () => { //Use to be keyPress
                this.movement.right()
            })
            onKeyPress('up', () => { //Use to be keyPress
                this.movement.up()
            })
            onKeyPress('down', () => { //Use to be keyPress
                this.movement.down()
            })
        }
    }
}