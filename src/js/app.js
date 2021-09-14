import Game from "./Game.js";

const app = new PIXI.Application({
    resizeTo: window,
});
document.body.appendChild(app.view);

window.addEventListener('resize', resize);

function resize() {
   let w = window.innerWidth;
   let h = window.innerHeight;
}

const loader = PIXI.Loader.shared;

loader.add('button', 'assets/images/start-button.png');
loader.load(() => {
    const game = new Game(app);
    app.stage.addChild(game);
});

