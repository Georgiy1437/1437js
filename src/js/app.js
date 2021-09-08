import Game from "./Game.js";

const app = new PIXI.Application({width: 800, height: 800});
document.body.appendChild(app.view);

const loader = PIXI.Loader.shared;

loader.add('button', 'assets/images/start-button.png');
loader.load(() => {
    const game = new Game(app)
    app.stage.addChild(game)
})


