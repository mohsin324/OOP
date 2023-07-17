// // create class
// class Car{
//     // constructor of class
//     constructor(name, year){
//         this.name = name,
//         this.year = year
//     }
//     // class method
//     age(x){
//         console.log('name in constructor '+ x)
//         console.log(x, '  x')
//         return x - this.year
//     }
// }
// const date = new Date();
// let year = date.getFullYear();

// const myCar1 = new Car('Stonic', 2015)
// myCar1.age(year)
// console.log(myCar1)

// console.log('My Card is '+ myCar1.age(year)+ ' old')


// const obj ={
//     name: 'ABC',
//     year: 123
// }

// console.log(obj)

// Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     name: function() {
//       return this.firstName + " " + this.lastName
//     };
//   }
  
  // Create a Person object
//   const myFather = new Person("John", "Doe", 50, "blue");
  
//   const obj = {
//     name: "Mohsin",
//     lastName: "Munir",
//     fullName: function(){
//         return this.name+' '+this.lastName
//     }
//   }
//   console.log(obj.fullName(), ' object ')



// Inheritance
// class Car{
//     constructor(color, brand, model){
//         console.log('in parent class color ',color, ' brand ', brand, ' model ', model)
//         this.brand = brand;
//         this.color = color
//     }
//     // class method
//     present(){
//         return ' I have a '+ this.brand + ' with color '+ this.color
//     }
// }
// class Model extends Car {
//     constructor(  color, brand, model){
//         console.log('in child class model  ', model)
//         super(color, brand, model)
//         this.model = model
//     }
//     show(){
//         return this.present() + ' and model '+ this.model
//     }
// }
// let myCar = new Model("White", "Mustang", "2017");
// console.log(myCar.show('Picanto'))

// getter/setters
// class Car {
//     constructor(brand){
//         this.brand = brand
//     }
//     // getter
//     get carBrand(){
//         return this.brand
//     }
//     // setter
//     set carBrand(brand){
//         this.brand = brand
//     }
// }
// const newCar = new Car('KIA');
// newCar.carBrand = 'MG';
// console.log(newCar.carBrand, ' car brand')

// static class
class Car {
    constructor(name){
        this.name = name
    }
    static hello(){
        return 'Hello'+ this.name
    }
}

const myCar = new Car('Ford');
console.log('myCar '+ JSON.stringify(myCar))