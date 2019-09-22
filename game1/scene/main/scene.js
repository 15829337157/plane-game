const randomBetween = function(start,end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}
class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game
        this.numberOfEnemies = 10
        this.numberOfClouds = 5
        this.bg = GuaImage.new(game,'sky')

        this.player = Player.new(game)
        this.bullet = Bullet.new(game)
        this.player.x = 150
        this.player.y = 480
        this.addElement(this.bg)
        this.addElement(this.player)

        this.addClouds()
        this.addEnemies()
    }

    addEnemies() {
        this.es = []
        for (var i = 0; i < this.numberOfEnemies; i++) {
            var e = Enemy.new(this.game)
            this.es.push(e)
            this.addElement(e)
        }
        this.enemies = this.es
    }
    addClouds() {
        this.cs = []
        for (var i = 0; i < this.numberOfClouds; i++) {
            var c = Cloud.new(this.game)
            this.cs.push(c)
            this.addElement(c)
        }
        this.clouds = this.cs
    }

    setupInputs() {
        var g = this.game
        var s = this
        g.registerAction('a', function(){
            s.player.moveLeft()
        })
        g.registerAction('d', function(){
            s.player.moveRight()
        })
        g.registerAction('w', function(){
            s.player.moveUp()
        })
        g.registerAction('s', function(){
            s.player.moveDown()
        })
        g.registerAction('j', function(){
            s.player.fire()
        })
    }
    update() {
        super.update()
        //this.cloud.y += 1
        for(var i = 0; i < this.es.length; i++){
            var e = this.es[i]
            for(var j = 0; j < this.player.bs.length; j++){
                var b = this.player.bs[j]
                if(b.x + b.w > e.x && b.x < e.x + e.w &&  b.y < e.y + e.h){
                    b.alive = false
                    e.alive = false
                }
            }
        }
        for(var i = 0; i < this.es.length; i++) {
            var e = this.es[i]
            if(!(e.x + e.w < this.player.x)){
                if(!(this.player.x + this.player.w < e.x)){
                    if(!(e.y + e.h < this.player.y)){
                        if(!(this.player.y + this.player.h < e.y)){
                            var s = SceneEnd.new(this.game)
                            this.game.runWithScene(s)
                        }
                    }
                }
            }
        }
    }
}