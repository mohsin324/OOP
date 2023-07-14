class Car{
    constructor(name, year){
        this.name = name,
        this.year = year
    }
    age(x){
        console.log('name in constructor '+ x)
        console.log(x, '  x')
        return x - this.year
    }
}
const date = new Date();
let year = date.getFullYear();

const myCar1 = new Car('Stonic', 2015)
myCar1.age(year)
console.log(myCar1)

console.log('My Card is '+ myCar1.age(year)+ ' old')


const obj ={
    name: 'ABC',
    year: 123
}

console.log(obj)
