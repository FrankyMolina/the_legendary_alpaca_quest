class Walls {
    constructor(ctx, gameWidth, gameHeight) {
        this.ctx = ctx;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.wallWidth = 50;
        this.wallHeight = 50;

        this.wallsBluePrint = [
            [null, 3, 1, 1, null, 1, null, null, 1, null, 3, 1],
            [1, null, 1, null, null, null, 3, null, 3, null, null, null,],
            [3, 3, 3, 3, null, 1, 3, 1, null, 1, null, 1],
            [1, null, 1, 1, null, null, 1, 1, 1, 3, 3, 3],
            [3, null, null, 3, null, null, 1, null, 1, null, null, null],
            [3, null, 1, null, null, null, 1, 3, 3, null, 1, 1],
            [3, null, 1, null, null, 1, 3, null, null, null, 3, null],
            [1, 1, null, 3, null, 1, 3, null, null, 3, null, null],
            [3, 3, null, null, null, 1, 1, 1, 1, 1, null, 1],
            [null, 1, null, 1, 1, 1, 3, 3, 3, null, 3, 3],
            [3, 3, null, 3, 3, null, 3, 3, 3, 3, null, null],
            [3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 2],
        ];


    }

    draw() {
        for (let i = 0; i < this.wallsBluePrint.length; i++) {

            for (let j = 0; j < this.wallsBluePrint[i].length; j++) {
                switch (this.wallsBluePrint[i][j]) {
                    case 1:
                        this.x = j * this.wallWidth;
                        this.y = i * this.wallHeight;

                        this.cellColor = 'black';

                        this.ctx.beginPath();
                        this.ctx.fillStyle = this.cellColor;
                        this.ctx.fillRect(this.x, this.y, this.wallWidth, this.wallHeight);

                        

                }

            }

        }

    }

    

    
}






