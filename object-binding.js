/////////////// node object-binding.js ///////////////
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
}