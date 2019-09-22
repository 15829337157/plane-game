//背景云朵
class Cloud extends GuaImage {
    constructor(game) {
        var type = randomBetween(0,3)
        var name = 'cloud' + type
        super(game,name)
        this.setup()
    }
    setup() {
        this.speed = 1
        this.x = randomBetween(0,350)
        this.y = -randomBetween(0,400)
    }
    update() {
        this.y += 3
        if(this.y > 600){
            this.setup()
        }
    }
}