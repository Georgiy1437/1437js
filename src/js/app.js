import Game from "./Game.js";

const app = new PIXI.Application({
    width: 1920,
    height: 1080
});
document.body.appendChild(app.view);

const loader = PIXI.Loader.shared;

loader.add('button', 'assets/images/start-button.png');
loader.load(() => {
    const game = new Game(app);
    app.stage.addChild(game);
    window.addEventListener('resize', () => game.resize());
    game.resize()
});

