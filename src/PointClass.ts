export class QPoint {
    constructor(private x = 0, public y = 0) {
    }

    draw(){
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };

    get X(){
        return this.x;
    }

    set X(value){
        if(value < 0)
        {
            throw new Error('Value should be greater than 0.');
        }
        this.x = value;
    }
}