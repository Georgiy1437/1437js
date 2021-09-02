const app = new PIXI.Application({ width: 800, height: 800 });
document.body.appendChild(app.view);

const graphics = new PIXI.Graphics();

// Rectangle
graphics.beginFill(0xFF0000);
graphics.drawRect(0, 0, 100, 100);
app.stage.addChild(graphics);

