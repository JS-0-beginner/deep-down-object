///// node loop-compare.js /////

//Categories of Loops
//(1)Regular Loop - i-teration
//(2)for of Loop [array]
//(3)for in Loop {object}

const instructorData = 
{
    // name: ["Emily", 'Watson'],
    name: 'Emily',
        
    favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],

    moreDetails:
    {
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    },

    hometown: 
    {
        city: "West Orange",
        state: "NJ",
    },

    citiesLivedIn: ["Seattle", "Providence", "New York"]

    }
    
///// for in Loop {object} /////

/* 
for(const property in instructorData)
{

    // console.log(property);

    //Three ways to get property values
    // console.log(instructorData[property]);

    // console.log(property, instructorData[property]);

    
}
 */

///// for of Loop [array] /////
/* 
///***Keys will give the object properties in an array 
const keys = Object.keys(instructorData);

// console.log(keys);

for(const property of keys)
{
    // console.log(instructorData[property]);

    // console.log(property, instructorData[property]);
}
 */

//***Remember Destructuring


const entries = Object.entries(instructorData);
console.log(entries); 


// const [name, hometown] = ['Emily','New-York'];

for(const [key, value] of Object.entries(instructorData))
{
    console.log(key, value);
}

//***Check-out what happens in [in]

for(const [key, value] in Object.entries(instructorData))
{
    console.log(key, value);
}

//It will give

/*
0 undefined
1 undefined
2 undefined
3 undefined
4 undefined 
 */

//***So [for in] can loop through only object's properties

//***But {for of} can loop throught both properties and values of object
