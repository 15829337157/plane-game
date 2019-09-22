//战机
class Player extends GuaImage {
    constructor(game) {
        super(game,'player')
        this.setup()
    }
    setup() {
        this.speed = 5
        this.cooldown = 0
        this.bs = []
    }
    update() {
        if (this.cooldown > 0) {
            this.cooldown--
        }
        if (this.x < 0) {
            this.x = 0
        }
        if (this.x > 400 - this.w) {
            this.x = 400 - this.w
        }
        if (this.y < 0) {
            this.y = 0
        }
        if (this.y > 600 - this.h) {
            this.y = 600 - this.h
        }
    }
    fire() {
        if(this.cooldown == 0) {
            this.cooldown = 9
            var x = this.x + this.w / 2
            var y = this.y
            var b = Bullet.new(this.game)
            b.x = x
            b.y = y
            this.bs.push(b)
            this.scene.addElement(b)
        }
    }
    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
}