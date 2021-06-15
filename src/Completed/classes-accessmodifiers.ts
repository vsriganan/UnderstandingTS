class PPoint {
    private x: number = 1;
    y: number = 2;

    constructor(xx?:number, yy?:number) {
        if(xx != undefined)
        {
            this.x = xx;
        }
        if(yy != undefined)
        {
            this.y = yy;
        }
    }

    draw(){
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
}

let firstPoint = new PPoint();
firstPoint.y = 5;
firstPoint.draw();

let secondPoint = new PPoint();
secondPoint.draw();

let thirdPoint = new PPoint(10,20);
thirdPoint.draw();