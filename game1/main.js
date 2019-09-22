var log = console.log.bind(console)
var enableDebugMode = function(game, enable) {
    if(!enable) {
        return
    }
    // 控制敌机速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function() {
    var images = {
        bullet: 'img/bullet.png',
        cloud0: 'img/cloud0.png',
        cloud1: 'img/cloud1.png',
        cloud2: 'img/cloud2.png',
        cloud3: 'img/cloud3.png',
        player: 'img/player.png',
        sky: 'img/sky.png',
        enemy0: 'img/enemy0.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        enemy4: 'img/enemy4.png',
        fire: 'fire.png',
    }
    var game = GuaGame.instance(30, images, function(g){
        var s = Scene.new(g)
        g.runWithScene(s)
    })
    enableDebugMode(game, true)
}
__main()