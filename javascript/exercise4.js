class Car {
    constructor(model,saal){
        this.model = model;
        this.saal = saal;
        
    }
    static getAge(year) {
        const date = new Date();
        return this.year = date.getFullYear() - year
    }
}

const car = new Car("corolla",2022);
console.log(car);
const userAge = Car.getAge(2005);
console.log(car)
console.log(userAge)

