//////// node compare-object.js ////////

//Referencial Memory Address
/* 
const first = {a: 1};
const second = {a: 1}; 
const third = first;

// if(first==second)
// if(first==third)
if((JSON.stringify(first)) == (JSON.stringify(third)))
//*** Referencial Memory Address won't work, this is kid stuffs 
{
    console.log(true);
}
else
{
    console.log(false);
}
 */

//Comparing Object Rules
//*Both Objects Keys quantity must be same

//true
/* 
const first = {a: 1, b: 2};
const second = {b: 2, a: 1};
 */

/* 
//false - '2' string
const first = {a: 1, b: 2};
const second = {b: '2', a: 1}; 
*/

//false - c: 3 extra key
const first = {a: 1, b: 2, c: 3};
const second = {b: 2, a: 1}; 

console.log(JSON.stringify(first));
console.log(JSON.stringify(second));

function compareObjs(obj1, obj2)
{
    if(Object.keys(obj1).length !== Object.keys(obj2).length)
    {
        return false;
    }
    for(const property in obj1)
    {
        if(obj1[property] !== obj2[property])
        {
            return false;
        }
    }
    return true;
}

const result = compareObjs(first, second);
console.log(result);