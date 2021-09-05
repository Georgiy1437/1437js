
export default class Button extends PIXI.Container {

constructor() {
    super()

    this.rect = new PIXI.Graphics();
    this.rect.beginFill(0xFFFFFF);
    this.rect.drawRoundedRect(-50, -50, 100, 100, 10)
    this.rect.endFill()

    this.rect.interactive=true
    this.rect.buttonMode=true
    this.rect.on('click', function(){
        console.log('hello epta');})

    const styles = {fontsize:50 }
    this.text = new PIXI.Text("9", styles);
    console.log(styles)
    this.text.anchor = {x: 0.5, y: 0.5}
    this.addChild(this.rect);
    this.addChild(this.text);

}
}

