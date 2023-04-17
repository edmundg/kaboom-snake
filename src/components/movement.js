import k from '../kaboom'

export default function movement() {
    const {
        vec2,
        dt
    } = k
    const direction = vec2(0, 0)
    const speed = 16
    let accumlatedTime = 0

    return {
        add() {
            this.movement.right()
        },
        update() {
            accumlatedTime += dt()
            if(accumlatedTime < 0.5) {
                return
            }

            accumlatedTime = 0

            if (!this.pos) {
                console.error('missing position component')
                return
            }

            this.pos.x += direction.x * speed
            this.pos.y += direction.y * speed
        },
        movement: {
            left() {
                direction.x = -1
                direction.y = 0
            },
            right() {
                direction.x = 1
                direction.y = 0
            },
            up() {
                direction.x = 0
                direction.y = -1
            },
            down() {
                direction.x = 0
                direction.y = 1
            }
        }
    }
}