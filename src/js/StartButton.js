export default class StartButton extends PIXI.Container {
    constructor(label) {
        super();

        this.sprite = new PIXI.Sprite(PIXI.Loader.shared.resources["button"].texture);
        this.sprite.anchor = {x: 0.5, y: 0.5};
        this.addChild(this.sprite);
        this.sprite.scale.set(0.4, 0.4);
        this.x = 1920/2;
        this.y = 1080/2;
        this.text = new PIXI.Text(label, {fontSize: 70, fill: 0xFFFFFF});
        this.text.anchor = {x: 0.5, y: 0.5};
        this.addChild(this.text);

        this.interactive = true;
        this.buttonMode = true;
    };
};
