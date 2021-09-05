
import Button from "./RectButton.js";
import Board from "./Board.js";

const app = new PIXI.Application({ width: 800, height: 800 });
document.body.appendChild(app.view);

// const button = new Button()
// button.x = 100;
// button.y = 100;
// app.stage.addChild(button)
//
// app.ticker.add(gameLoop)
//  function gameLoop(delta){}

const board = new Board()
board.x = app.screen.width / 2 -100;
board.y = app.screen.width / 2 -100;
app.stage.addChild(board)




