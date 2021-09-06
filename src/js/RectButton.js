export default class Button extends PIXI.Container {

    constructor(n, width, height, fontsize) {
        super()

        this.rect = new PIXI.Graphics();
        this.rect.beginFill(0xFFFFFF);
        this.rect.drawRoundedRect(-width / 2, -height / 2, width, height, 10)

        this.rect.interactive = true
        this.rect.buttonMode = true
        this.rect.on('click', function () {
            console.log(n)
        })
        this.rect.on('click', doGreenClick)
        this.rect.on('click', doRedClick)
        this.rect.on('click', doWhiteClick)



        function doGreenClick() {
            this.tint = 0x00FF00
        }

        function doRedClick() {


        }
        function doWhiteClick() {


        }


        const styles = {fontsize}
        this.text = new PIXI.Text(n, styles);
        console.log(styles)
        this.text.anchor = {x: 0.5, y: 0.5}
        this.addChild(this.rect, this.text);
    }
}
