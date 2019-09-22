//子弹
class  Bullet extends GuaImage {
    constructor(game) {
        super(game,'bullet')
        this.setup()
    }
    setup() {
        this.speed = 3
        this.alive = true
    }
    update() {
        this.y -= this.speed
        if(this.alive == false){
            this.y = 700
        }
    }
}