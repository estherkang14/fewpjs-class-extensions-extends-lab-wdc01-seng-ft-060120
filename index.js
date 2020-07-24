// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.count = sides.length;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce( function(a, b) { return a + b })
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.count === 3) {
            return (
                (this.sides[0] + this.sides[1] > this.sides[2]) &&
                (this.sides[1] + this.sides[2] > this.sides[0]) &&
                (this.sides[0] + this.sides[2] > this.sides[1]))
        }
        return false;
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.count === 4) {
            return (
                (this.sides[0] === this.sides[1]) && 
                (this.sides[0] === this.sides[2]) && 
                (this.sides[0] === this.sides[3])
            )
        }
    }

    get area() {
        return this.sides[0] ** 2
    }
}