import Board from "./Board.js";

const app = new PIXI.Application({ width: 800, height: 800 });
document.body.appendChild(app.view);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array = [];
for (let i = 0; i < 9; i++) {
    const randomIndex = Math.round(Math.random() * arr.length-1)
    array.push(arr.splice(randomIndex, 1)[0])
}

const board = new Board({array, width: 150, height: 150, margin: 20, fontsize: 50})
board.x = app.screen.width / 2 -100;
board.y = app.screen.width / 2 -100;
app.stage.addChild(board)




