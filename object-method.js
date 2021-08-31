///////////////// node object-method.js /////////////////

//We can assign any type of property in object
const book =
{
    id: 123-456-222, 
    title: 'The Ultimate Database Study Guide',  
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

        return this.price;
    },

    //Method Property
    review: function() //this.
    {
        console.log(this.title,'FOR BEGINNERS');

    }



 }

 //Anonymous Function output
 book.review();

 //Function with parameter output
 const totalPrice = book.buy(300);
 console.log(totalPrice);

 //Tutorial(2) = 35Mins