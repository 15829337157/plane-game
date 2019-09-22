//敌机
class Enemy extends GuaImage {
    constructor(game) {
        var type = randomBetween(0,4)
        var name = 'enemy' + type
        super(game,name)
        this.alive = true
    }
    setup() {
        this.alive = true
        this.speed = randomBetween(2,5)
        this.x = randomBetween(0,350)
        this.y = -randomBetween(0,200)
        this.ps = []
    }
    update() {
        this.y += this.speed
        if(this.y > 600) {
            this.setup()
        }
        if(this.alive == false){
            var s = GuaParticleSystem.new(this.game)
            var x = this.x + this.w / 2
            var y = this.y + this.h /2
            s.x = x
            s.y = y
            //add particles
            this.ps.push(s)
            this.scene.addElement(s)
            this.setup()
        }
    }
}