class Board {
    constructor(ctx, w, h, src) {
        this.ctx = ctx;
        this.width = w;
        this.height = h;

        this.codeReference = {
            player: 0,
            wall: 1,
            finish: 2,
            trap: 3,
            alpaca: 4,
            //way: null,
        }

        this.lvlBluePrint = [
            [1, 3, 1, 1, null, 1, null, null, 1, null, 3, 1],
            [1, 4, 1, null, null, null, 3, null, 3, null, null, null,],
            [3, 3, 3, 3,  null, 1, 3, 1,  null, 1,  null, 1],
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
}