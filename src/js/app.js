
import Button from "./RectButton.js";

const app = new PIXI.Application({ width: 800, height: 800 });
document.body.appendChild(app.view);

const button = new Button()
button.x = 100;
button.y = 100;

app.stage.addChild(button)

//const graphics = new PIXI.Graphics();

// Rectangle
//graphics.beginFill(0xFF0000);
//graphics.drawRect(0, 0, 100, 100);
//app.stage.addChild(graphics);

//graphics.x = app.screen.width / 2 - 50;
//graphics.y = app.screen.height / 2 - 50;
