/////////////// node object-binding.js ///////////////

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
    
    buy: function (discount) 
    {
        this.price = this.price - discount;
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

/* 
firstBook.buy(200);
firstBook.buy(350);
*/
firstBook.buy(500); 


const buySecond = firstBook.buy.bind(secondBook);
/* 
buySecond(300);
buySecond(700); 
*/
buySecond(700);

const buyThird = firstBook.buy.bind(thirdBook);

buyThird(250);

//Tutorial(2) = 35Mins