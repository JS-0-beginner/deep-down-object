//////////// node object-properties.js ////////////

const book =
{
    id: 123, //Key-value pair  
    title: 'Database Study Guide',  //Key-value pair 
    category: ['Fiction', 'Technology'], //Key-value pair 
    author: 
    {
      lastname: 'Doe', //Key-value pair 
      firstname: 'Jane' //Key-value pair 
    },
    editor: 
    {
      lastname: 'Smith', //Key-value pair 
      firstname: 'Jane' //Key-value pair 
    }
}

///// (1)Key-value pair of Objects-Entries /////
const keyValuePairs = Object.entries(book);
console.log(keyValuePairs);
//***Entries will show the pairs in 2D Array


//////////// (2)Object-keys ////////////
const propertyNames = Object.keys(book);
console.log(propertyNames);
//***Object properties are called keys, keys will show all the object properties in an array


//////////// (3)Object-values ////////////
const propertyValues = Object.values(book);
console.log(propertyValues);


//////////// (4)Object-delete-key ////////////
delete book.id;
console.log(book);


//////////// (5)Object-seal ////////////

Object.seal(book);
book.category = ['Sci-Fi'];
delete book.title;
console.log(book);
//***With object seal we can change a key's value but we can't delete or add any key

//////////// (6)Object-freeze ////////////

Object.freeze(book);
book.title = 'The Romance Guide';
delete book.editor;
console.log(book);
//***With object freeze we can't change,delete or add any key, it totally freezes the object

//Tutorial(3) = 35Mins