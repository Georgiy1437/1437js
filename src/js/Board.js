import RectButton from './RectButton.js'

export default class Board extends PIXI.Container {

    constructor(questions, width, height, margin) {
        super();

        this.buttons = questions.map((label, i) => {
            const rectButton = new RectButton(label, width, height);
            const row = Math.floor(i / 3);
            const col = i % 3;
            rectButton.position = {
                x: (width + margin) * col,
                y: (height + margin) * row
            };
            rectButton.on('click', (e) => {
                console.log('button is pressed', e);
                this.emit('selectAnswer', e);
            });
            return rectButton;
        });
        this.addChild(...this.buttons);
    };
};