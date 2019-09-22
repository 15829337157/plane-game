class GuaLabel{
    constructor(game, text) {
        this.game = game
        this.text = text
    }
    static new(game,text) {
        return new this(game,text)
    }
    draw() {
        this.game.context.fillText(this.text, 100, 190)
    }
    update() {
    }
}
class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        var label = GuaLabel.new(game,'SORRY！  GAMEOVER')
        this.addElement(label)
    }
}