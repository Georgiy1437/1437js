import Button from './RectButton.js'

export default class Board extends PIXI.Container {

    constructor(props) {
        super()

        this.props = props
        this.buttons = this.props.array.map((label, i) => {
            const bot = new Button(label, this.props.width, this.props.height)
            const row = Math.floor(i / 3)
            const col = i % 3
            bot.position = {
                x: (this.props.width + this.props.margin) * col,
                y: (this.props.height + this.props.margin) * row
            }
            bot.on('click', (e) => {
                console.log('button is pressed', e)
                this.emit('clickOnButton', e)

            })
            return bot
        })
        this.addChild(...this.buttons)
    }
}