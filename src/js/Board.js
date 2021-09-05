export default class Board extends PIXI.Container {

    constructor() {
        super()

        for (let i = 0; i < 9; i++) {

            this.rect = new PIXI.Graphics();
            this.rect.beginFill(0xFFFFFF);
            this.rect.x = (i % 3) * 110;
            this.rect.y = Math.floor(i / 3) * 110;
            this.rect.drawRoundedRect(-50, -50, 100, 100, 10)
            this.rect.interactive=true;
            this.rect.buttonMode=true;
            this.rect.on('click', function(){
                console.log(values[i]);})
            this.addChild(this.rect);
        }

        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array
        }
        const newarray = shuffleArray(values)

        for (let i = 0; i < 9; i++) {
            const styles = {fontsize: 50}
            this.text = new PIXI.Text(newarray[i], styles)
            console.log(styles)
            this.text.anchor = {x: 0.5, y: 0.5}
            this.text.x = (i % 3) * 110;
            this.text.y = Math.floor(i / 3) * 110;
            this.addChild(this.text);
        }
    }
}

