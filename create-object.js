//////////////// node create-object.js ////////////////

//(1)General Object Initialization

const fullName = 
{
    title   :  "Mr",
    first   :  "Theodor",
    last    :  "Borsheim"
}

console.log(fullName);

//(2)We can also initialize objects in other ways

//(i)Constructor Object
const name = new Object()
console.log(name);

//(ii)Constructor Object.create
const person = Object.create(fullName)
// const person = Object.create(null)
console.log(person.title);
console.log(person.first);
console.log(person.last);

//(iii)Class Object - Syntactic Sugar

class Meals 
{
    constructor(name,price)
    {
        this.name = name;
        this.price = price;
    }
}

const meal = new Meals('Pizza','$350')

console.log(meal);


//(vi)Actual Function Object

function Meals(names,price)
    {
        this.names = names;
        this.price = price;
    }
const meal = new Meals('Pizza','$350')
console.log(meal);

