"use strict";

class Shape {
    constructor() {

    }

    getSquare() {

    }
}

class Square extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getSquare() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getSquare() {
        var p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
    }
}

var t = new Triangle(3,4,5);
console.log(t.getSquare());