//1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
class Movie {
    constructor(title, studio , rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    get pg(){
        return this.rating;
    }
}

let mov = new Movie('Casino Royale','Eon Productions', 'PG­13')
console.log(mov.pg);

//2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = 1.0;
        this.color = "Red";
        if (typeof (radius) !== "undefined") {
            this.radius = radius;
        }
        if (typeof (color) !== "undefined") {
            this.color = color;
        }
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.toString = function () {
        return "Radius: " + this.radius + " Color: " + this.color;
    };
    Circle.prototype.getArea = function () {
        return (2 * (Math.PI) * this.radius);
    };
    Circle.prototype.getCircumference = function () {
        return (2 * this.radius);
    };
    return Circle;
}());
var c1 = new Circle();
console.log("Constructor with no params: " + c1.toString());
var c2 = new Circle(3.5);
console.log("Constructor with one param: " + c2.toString());
var c3 = new Circle(2.2, 'Yellow');
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("Radius value after setRadius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("Color Value after setColor: " + c3.getColor());
console.log(c3.toString());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());

//3. Write a “person” class to hold all the details.
class Person {
    constructor(name , age , address, phone)
    {
        this.name=name;
        this.age=age;
        this.address=address;
        this.phone=phone;
    }
    printDetails() {
        console.log("Name: "+this.name+"\n"+"age: "+this.age+"\n"+"address: "+ this.address+"\n"+"phone: "+this.phone);
    }
}

let person1= new Person("Keerthi Ramidi","22","hyderabad","949xxxxxxx");
 console.log(person1);
 person1.printDetails();

//4. write a class to calculate uber price.
class Uber{
    constructor(distance, price){
this.price=price;
this.distance=distance;
    }
     calculate() {
         console.log("distance: "+this.distance+"\n"+"price: "+this.price);
        return this.price*this.distance;
    }
}

const g= new Uber(92,81);
console.log("total: "+g.calculate()+" rupees");