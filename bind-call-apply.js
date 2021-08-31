//// node bind-call-apply.js ////

/////////////// book(1) ///////////////
const firstBook =
{
    id: 123, 
    title: 'Database Study Guide',  
    category: ['on-Fiction', 'Technology'],
    author: 
    {
      lastname: 'Doe',
      firstname: 'Jane'
    },
    editor: 
    {
      lastname: 'Smith',
      firstname: 'Jane'
    },
    
    price: 2500,
    
    buy: function (discount,deliveryCharge,only) 
    {
        const cuttingPrice = discount + deliveryCharge;
        this.price = this.price - cuttingPrice + only;
        console.log('All-Books',this); //Bind Method from this
        return this.price;
    }
}
/////////////// book(2) ///////////////
const secondBook =
{
    id: 345, 
    title: 'Design Study Guide',  
    category: ['Colors', 'Arts'],
    author: 
    {
      lastname: 'Jaden',
      firstname: 'Smith'
    },
        
    price: 3500
    
   
}
/////////////// book(2) ///////////////
const thirdBook =
{
    id: 567, 
    title: 'Finance Study Guide',  
    category: ['Currency', 'Banks'],
    author: 
    {
      lastname: 'Tahmina',
      firstname: 'Akter'
    },
        
    price: 1500
    
   
}

//Call
/* 
firstBook.buy.call(firstBook, 500, 50, ' $ Only');
firstBook.buy.call(secondBook, 500, 70, ' $ Only');
firstBook.buy.call(thirdBook, 500, 60, ' $ Only');
 */

//Apply

firstBook.buy.apply(firstBook, [500, 50, ' $ Only']);
firstBook.buy.apply(secondBook, [1500, 50, ' $ Only']);
firstBook.buy.apply(thirdBook, [500, 50, ' $ Only']);

///*** Interview Q/A
/* 
Major work of bind-call-apply 
*/

//Tutorial(7) = 25Mins


