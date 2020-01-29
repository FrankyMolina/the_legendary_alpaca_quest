/*
left: 37;
up: 38;
right: 39;
down: 40;
*/

class Player {
    constructor(ctx, w, h) {
        this.ctx = ctx;

        this.gameWidth = w;
        this.gameHeight = h;

        //this.cellSide = 50;


        /* this.image = new Image();
         this.image.src = './images./flappy.png';*/

        this.width = 30;
        this.height = 30;

        this.posX = 10;
        this.posY = 10;

        this.wallPosition = [];




        this.setListener();

        this.generateWalArr();

        this.collision();

    }

    draw() {
        //this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);


        this.posX;
        this.posY;

        this.cellColor = '#e74c3c';

        this.ctx.beginPath();
        this.ctx.fillStyle = this.cellColor;
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }

    

    move() {

        this.posX;
        this.posY;
        console.log(this.posX, this.posY);


    }

    setListener() {
        document.addEventListener('keydown', e => {
            if (e.keyCode === 38 && this.posY > 0 + this.height + 10) {
                this.posY -= 50; 
            } else if (e.keyCode === 39 && this.posX < this.gameWidth - this.width - 10) {
                this.posX += 50;
            } else if (e.keyCode === 40 && this.posY < this.gameHeight - this.height - 10) {
                this.posY += 50;
            } else if (e.keyCode === 37 && this.posX > 0 + this.width + 10) {
                this.posX -= 50;
            }
        })
    }


    generateWalArr() {
        let walls = new Walls()
        for (let i = 0; i < walls.wallsBluePrint.length; i++) {

            for (let j = 0; j < walls.wallsBluePrint[i].length; j++) {
                switch (walls.wallsBluePrint[i][j]) {
                    case 1:
                        walls.x = j * walls.wallWidth;
                        walls.y = i * walls.wallHeight;

                        this.wallPosition.push([walls.x + 10, walls.y + 10]);
                        break;
                }

            }

        }
        console.log(this.wallPosition);
    }

    collision() {
        this.wallPosition.forEach(wall => {
            if(wall[0]===this.posX && wall[1]===this.posY){
                return false;
            } else {
                return true;
            }

        })

    }

}

