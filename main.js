//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// console.log(Object.values(person3))
// for (let i=0; i<Object.keys(person3).length; i++){
//     let x = Object.values(person3)[i]
//     if(Array.isArray(x)){
//         for(let j=0; j<x.length; j++){
//             if(typeof j=='array'){
//                 console.log(Object.values(x)[j])
//             }else{console.log(x[j])}
             
//         }
//     }else{
//         console.log(x)
//     }
// }

// console.log(Object.values(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age){
    this.name = name
    this.age = age

// Use an arrow to create the printInfo method
    this.printInfo=() => {
        console.log(`Your name is ${this.name} and your age is ${this.age}`)
    }

// Create another arrow function for the addAge method that takes a single parameter
    this.addAge= (time) => {
        this.age = this.age + (1 * time)
        console.log(`Your new age is ${this.age}`)
    }
}
// Adding to the age 
let person1 = new Person('Chien', 25)
let person2 = new Person('Shoha', 22)
person1.printInfo()
person1.addAge(2)
person1.printInfo()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isGreater10 = (string) => {
    return new Promise((resolve,reject) => {
        if(string.length > 10){
            resolve("Big Word")
        }else{
            reject(false)
        }
    })
}
isGreater10('asdsadasdsadasdasd').then((result) => {
    console.log("Big word")
}).catch((error) => {
    console.log("Small Number")
})


// =============Exercise #4 ============//
// Make a program that takes a value (x) and returns "Bang" if the 
// number is divisible by 3, "Boom" if it is divisible by 5, "BangBoom" if 
// it divisible by 3 and 5, and "Miss" if it isn't divisible by any of them. 
// Note: Your program should only return one value
// Ex: Input: 105 --> Output: "BangBoom" Ex: Input: 9 --> Output: "Bang" Ex:Input: 25 --> Output: "Boom"

// def multiple(x):
//     if x % 3 == 0 and x % 5 == 0:
//         return "BangBoom"
//     elif x % 3 == 0:
//         return "Bang"
//     elif x % 5 == 0:
//         return "Boom"
//     else:
//         return "Miss"
let multiple = (x) => {
    if(x%3==0 && x%5==0){
        console.log("BangBoom")
    } else if (x%3==0){
        console.log("Bang")
    } else if (x%5==0){
        console.log('Boom')
    } else {
        console.log("Miss")
    }
}
multiple(5)



// =============Exercise #5 ============//
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// def grow(arr):
//     x = 1
//     for a in arr:
//         x *= a 
//     return x
let grow = (arr) => {
    x = 1
    for(let i = 0; i<arr.length; i++){
        x *= arr[i]
    }
    console.log(x)
}
grow([1,2,3,4]) //24



// =============Exercise #6 ============//
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pig_it('Pig latin is cool') # igPay atinlay siay oolcay
// pig_it('Hello world !')     # elloHay orldway !
let pig_it = (text) => {
    list1 = text.split(' ')
    finallist = []
    for(let i =0; i<list1.length; i++){
        list2 = list1[i].split('')
        if(/^[A-Z]+$/i.test(list1[i])){
            list2.push(list2[0],'a','y')
            list2.splice(0,1)
        }
        list2=list2.join('')
        finallist.push(list2)
        
    }
    finallist=finallist.join(' ')
    console.log(finallist)
}
pig_it("O tempora o mores !") //function will only apply to letters
pig_it("!")