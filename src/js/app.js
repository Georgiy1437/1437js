import Board from "./Board.js";

const app = new PIXI.Application({width: 800, height: 800});
document.body.appendChild(app.view);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array = shuffle(arr);

const board = new Board({array, width: 150, height: 150, margin: 20, fontsize: 50})
board.x = app.screen.width / 2 - 100;
board.y = app.screen.width / 2 - 100;
app.stage.addChild(board)


var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = [
    "audio/aymuzh.mp3",
    "audio/1.mp3",
    "audio/2.mp3",
    "audio/3.mp3",
    "audio/4.mp3",
    "audio/5.mp3",
    "audio/6.mp3",
    "audio/7.mp3",
    "audio/8.mp3",
    "audio/9.mp3"]

document.body.addEventListener("dblclick", function () {
    audio.play()
})


let queue = Promise.resolve()

shuffle(array).forEach((n) => {
    queue = queue.then(() => {
        console.log('find n = ', n)
        return createStep(n)
    })
})

queue.then(() => {
    console.log('EXERCISE IS COMPLETE')
})

function createStep(n) {
    return new Promise((resolve) => {
        // setTimeout(() => {
        //     console.log('n found', n)
        //     resolve()
        // }, 1000)
        board.on('clickOnButton', (e) => {
            if (n === e.n) {
                console.log('right')
                board.removeListener('clickOnButton')
                e.button.doGreenClick()
                resolve()
                setTimeout(() => {
                    e.button.doWhiteClick()
                }, 1000)
            } else {
                e.button.doRedClick()
                console.log('try again')
                setTimeout(() => {
                    e.button.doWhiteClick()
                }, 1000)
            }
        })
    })
}


function shuffle(arr) {
    const array = []
    for (let i = 0; i < 9; i++) {
        const randomIndex = Math.round(Math.random() * arr.length - 1)
        array.push(arr.splice(randomIndex, 1)[0])
    }
    return array
}