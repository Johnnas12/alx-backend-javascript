class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    area(){
        return this.calcArea();
    }

    calcArea(){
        return this.height * this.width;
    }

    *getSides(){
        yeild this.height;
        yeild this.width;
        yeild this.height
        yeild this.width
    }
}

const square = new Rectangle(10, 10);
console.log(square.area());
console.log([...square.getSides()])
