
export default class Button extends PIXI.Container {

constructor() {
    super()
}
}

const container = new PIXI.Container();

app.stage.addChild(container);

const rect = new PIXI.Graphics();

// White rect
rect.beginFill(0xFFFFFF);
rect.drawRect(0, 0, 100, 100);
rect.drawRoundedRect(0, 0, 100, 100, 10)
container.addChild(rect);


let numbers = new Text("9");
container.addChild(numbers);
