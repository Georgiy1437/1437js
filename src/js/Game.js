import StartButton from "./StartButton.js";
import {shuffle} from "./util.js";
import Board from "./Board.js";

const player = document.getElementById("player")

export default class Game extends PIXI.Container {
    constructor(app) {
        super();
        this.app = app
        this.startButton = new StartButton('Старт');
        this.addChild(this.startButton)
        this.startButton.on ('click', (e) =>{
            this.startButton.destroy()
            this.start()
        })
    }
    // startnew() {
    //     this.greeting() // воспроизводить аудио приветствие
    //     this.createQuestions() // создание вопросов, генерация ранд. массива из чисел
    //     this.createBoard() // сетка из кубиков 3*3
    //     this.run() // запускает геймплей!!! запускает аудио и сравнивает с ответом.
    //refactoring
   // }
    start(){
        player.src = "assets/audio/privet_davay_poigraem.mp3"
        player.play()

        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const array = shuffle(arr);

        const board = new Board({array, width: 150, height: 150, margin: 20, fontsize: 50})
        board.x = this.app.screen.width / 2 - 100;
        board.y = this.app.screen.width / 2 - 100;
        this.app.stage.addChild(board)

        let queue = Promise.resolve()

        shuffle(array).forEach((num) => {
            queue = queue.then(() => {
                console.log('find n = ', num)
                return createStep(num)
            })
        })

        queue.then(() => {
            console.log('EXERCISE IS COMPLETE')
        })


        function createStep(num) {
            return new Promise((resolve) => {
                board.on('clickOnButton', (e) => {
                    if (num === e.n) {
                        console.log('right')
                        board.removeListener('clickOnButton')
                        e.button.doGreenClick()
                        resolve()
                        setTimeout(() => {
                            e.button.doWhiteClick()
                        }, 1000)
                    }
                    else {
                        e.button.doRedClick()
                        console.log('try again')
                        setTimeout(() => {
                            e.button.doWhiteClick()
                        }, 1000)
                    }
                })
            })
        }
    }
}