import StartButton from "./StartButton.js";
import {shuffle} from "./util.js";
import Board from "./Board.js";

const player = document.getElementById("player");
const playIntro = document.getElementById("playIntro");

export default class Game extends PIXI.Container {
    constructor(app) {
        super();
        this.app = app;
        this.startButton = new StartButton('Старт');
        this.addChild(this.startButton);
        this.startButton.on('click', (e) => {
            this.startButton.destroy();
            this.start();
        });
    };

    createQuestions() {
        this.questions = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        this.arraySound = [
            'assets/audio/1.mp3', 'assets/audio/2.mp3', 'assets/audio/3.mp3',
            'assets/audio/4.mp3', 'assets/audio/5.mp3', 'assets/audio/6.mp3',
            'assets/audio/7.mp3', 'assets/audio/8.mp3', 'assets/audio/9.mp3'];
    };

    createBoard() {
        this.board = new Board(this.questions, 150, 150, 20);
        this.board.x = this.app.screen.width / 5;
        this.board.y = this.app.screen.width / 5;
        this.app.stage.addChild(this.board);
    };

    greeting() {
        player.src = "assets/audio/privet_davay_poigraem.mp3";
        player.play();
        setTimeout(() => {
            playIntro.play();
        }, 3500);
    };

    run() {
        let queue = Promise.resolve();

        shuffle(this.questions).forEach((num) => {
            queue = queue.then(() => {
                setTimeout(() => {
                    const audio = new Audio(this.arraySound[num - 1]);
                    audio.play().catch(e => audio.play());
                }, 700);
                console.log('find num = ', num);
                return this.createStep(num);
            });
        });
    };

    createStep(correctAnswer) {
        return new Promise((resolve) => {
            let numOfClick = 1;
            let timeResult;
            let createTimes = () => {
                timeResult = setTimeout(() => {
                    this.board.buttons.find((button, i) => {
                        console.log(i, button)
                        return button.label == correctAnswer
                    }).doPurpleClick();
                }, 9000);
            }
            createTimes();
            this.board.on('selectAnswer', (e) => {
                clearTimeout(timeResult);
                if (correctAnswer === e.answer) {
                    console.log('right');
                    this.board.removeListener('selectAnswer');
                    e.button.doGreenClick();
                    resolve();
                    setTimeout(() => {
                        e.button.doWhiteClick();
                    }, 1000);
                } else if (numOfClick === 1) {
                    createTimes()
                    e.button.doRedClick();
                    const audio = new Audio('assets/audio/aymuzh.mp3');
                    audio.play().catch(e => audio.play());
                    setTimeout(() => {
                        e.button.doWhiteClick();
                    }, 1000);
                    numOfClick++;
                } else {
                    createTimes()
                    numOfClick++;
                    e.button.doRedClick();
                    const audio = new Audio('assets/audio/oymuzh.mp3');
                    audio.play().catch(e => audio.play());
                    console.log('try again');
                    setTimeout(() => {
                        e.button.doWhiteClick();
                    }, 1000);
                    console.log(numOfClick)
                    setTimeout(() => {
                        this.board.buttons.find((button, i) => {
                            console.log(i, button)
                            return button.label == correctAnswer
                        }).doPurpleClick();
                        },);
                }
            });
        })
    }

    start() {
        this.greeting();
        this.createQuestions();
        this.createBoard();
        setTimeout(() => {
            this.run();
        }, 8000);
    }
}


