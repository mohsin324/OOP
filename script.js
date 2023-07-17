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
// class Car {
//     constructor(name, color){
//         this.name = name
//         this.color = color

//     }
//      hello(){
//         return ' Hello '+ this.name +' color '+this.color
//     }
// }

// const myCar = new Car('Ford', 'white');
// const myCar1 = new Car('Stonic', 'yellow');
// console.log(myCar.hello(), ' my car');
// console.log(myCar1, ' my car 1')

// Method Chaining
// class User {
//     constructor(email, name){
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     login(){
//         console.log(this.email +' just login '+ this.name)
//         // return this.email+' my email this.email '
//         return this //this.email +' just login '+ this.name
//     }
//     logOut() {
//         console.log(this.email +' just logOut '+ this.name)
//         return this// this.email +' just logOut '+ this.name
//     }
//     updateScore() {
//         this.score ++;
//         console.log(this.email, ' score is now ', this.score)
//         return this // this.score ++
//     }
// }
// // inheritance
// class Admin extends User{
//     deleteUser(user){
//         user.forEach(users => {
//             console.log(users, ' users ')
//         })
//     }
// }
// const newAdmin = new Admin('inheritace@gmail.com', 'inheritance');
// const UserOne = new User('abc@gmail.com', 'yushi');
// // method chaining
// // UserOne.login().updateScore().updateScore().logOut()

// const user = [UserOne, newAdmin ]
// let nn = newAdmin.deleteUser(user)


///////Prototype
function User(email, name){
    this.email = email;
    this.name = name
    this.online = false;
}
User.prototype.login = function (){
    this.online = true;
    console.log(this.email + ' user login '+ this.online)
}
User.prototype.logout = function (){
    console.log(this.email + ' user login '+ this.online)
}

const userOne = new User('abc@gmail.com', 'yushi')
const userTwo = new User('xyz@gmail.com', 'mario')

userOne.login()
userTwo.logout()