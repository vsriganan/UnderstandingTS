interface Human {
    firstName: string;
    age: number;

    greet: () => void
}

let max: Human;
max  = {
    firstName: 'Max',
    age: 30,
    greet() {
        console.log('Hello!');
    }
};

class Instructor implements Human {

    constructor(public firstName: string, public age: number) {        
    };

    greet(){
        console.log('Hello from Implemented class!');
    }
}

