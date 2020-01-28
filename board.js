class Board {
    constructor(ctx, w, h) {
        this.ctx = ctx;
        this.width = w;
        this.height = h;

        this.cellSide = 50;

        /*this.codeReference = {
            player: 0,
            wall: 1,
            finish: 2,
            trap: 3,
            alpaca: 4,
            way: null,
        }*/



        this.lvlBluePrint = [
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

    readBluePrint() { //draw Lvl.


        for (let i = 0; i < this.lvlBluePrint.length; i++) {

            for (let j = 0; j < this.lvlBluePrint[i].length; j++) {

                switch (this.lvlBluePrint[i][j]) {
                    /*case 0:
                        this.x = j * this.cellSide;
                        this.y = i * this.cellSide;

                        this.cellColor = '#e74c3c';

                        this.ctx.beginPath();
                        this.ctx.fillStyle = this.cellColor;
                        this.ctx.fillRect(this.x, this.y, this.cellSide, this.cellSide);

                        break;*/

                    case 1:
                        this.x = j * this.cellSide;
                        this.y = i * this.cellSide;

                        this.cellColor = '#a14dab';

                        this.ctx.beginPath();
                        this.ctx.fillStyle = this.cellColor;
                        this.ctx.fillRect(this.x, this.y, this.cellSide, this.cellSide);
                        break;
                    case 2:
                        this.x = j * this.cellSide;
                        this.y = i * this.cellSide;

                        this.cellColor = '#eeff00';

                        this.ctx.beginPath();
                        this.ctx.fillStyle = this.cellColor;
                        this.ctx.fillRect(this.x, this.y, this.cellSide, this.cellSide);
                        break;
                    case 3:
                        this.x = j * this.cellSide;
                        this.y = i * this.cellSide;

                        this.cellColor = '#ff9900';

                        this.ctx.beginPath();
                        this.ctx.fillStyle = this.cellColor;
                        this.ctx.fillRect(this.x, this.y, this.cellSide, this.cellSide);
                        break;
                    /*case 4:
                        this.x = j * this.cellSide;
                        this.y = i * this.cellSide;

                        this.cellColor = '#00fff2';

                        this.ctx.beginPath();
                        this.ctx.fillStyle = this.cellColor;
                        this.ctx.fillRect(this.x, this.y, this.cellSide, this.cellSide);
                        break;*/
                    case null:
                        this.x = j * this.cellSide;
                        this.y = i * this.cellSide;

                        this.cellColor = '#00ff55';

                        this.ctx.beginPath();
                        this.ctx.fillStyle = this.cellColor;
                        this.ctx.fillRect(this.x, this.y, this.cellSide, this.cellSide);
                        break;
                    }   
                }



            }

        }

    }




