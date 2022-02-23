/////////////// Exercise # 1 - Address Object ///////////////

// Create an address object with three properties: 
// street 
// city
// zipCode

// Create function called showAddress(address) that will display properties and their value

// const address = {
//     street: '123 Code Land',
//     city: 'Austin', 
//     zipCode: 78748
// };

// function showAddress(address) {
//     for (let key in address) {
//         console.log(key, address[key]);
//     }
// };

// showAddress(address);



///////////// Exercise # 2 - Factory and Constructor Functions /////////////
// write two functions that initializes the address object using factory and constructor functions

// const address = {
//     street: '123 Code Land',
//     city: 'Austin', 
//     zipCode: 78748
// };

// Factory Function //

// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     };
// }

// const address1 = createAddress('123 Code Land', 'Austin', '78748');
// console.log(address1);


// Constructor function //

// function Address(street, city, zipCode) {
//     this.street = street; 
//     this.city = city;
//     this.zipCode = zipCode;
// }

// const address = new Address('123 Code Land', 'Austin', '78748');
// console.log(address);


/////////// Exercise # 3 - Object Equality /////////////////

// let address1 = new Address('123 Code Land', 'Austin', '78748');
// let address2 = new Address('123 Code Land', 'Austin', '78748');
// let address3 = address1;

// console.log(areEqual(address1, address2)); // true
// console.log(areSame(address1, address2)); // false
// console.log(areSame(address1, address3)); // true

// function Address(street, city, zipCode) {
//     this.street = street; 
//     this.city = city;
//     this.zipCode = zipCode;
// }

// function areEqual(address1, address2) {
//     return address1.street === address2.street &&
//     address1.city === address2.city && 
//     address1.zipCode === address2.zipCode;
// }


// function areSame(address1, address2) {
//     return address1 === address2;
// }


/////////// Exercise # 4 Blog Post Object /////////

// title
// body
// author
// views
// comments
//  (author, body)
// isLive


// let posts = {
//     title: 'HTML', 
//     body: 'Student forever',
//     author: 'James Ivy',
//     views: 100,
//     comments: [
//         { author: 'a', body: 'b' },
//         { author1: 'c', body: 'd' },
//     ],
//     isLive: true
// };

// console.log(posts);
// comments is an array with two objects



////// Exercise # 5 - Constructor Functions ////////////

// let posts = {
//     title: 'HTML', 
//     body: 'Student forever',
//     author: 'James Ivy',
//     views: 100,
//     comments: [
//         { author: 'a', body: 'b' },
//         { author1: 'c', body: 'd' },
//     ],
//     isLive: true
// };

// let post = new Post('a', 'b', 'c');

// console.log(post);

// function Post(title, body, author) {
//     this.title = title; 
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }


///// Exercise # 6 - Price Range Object (YELP example) ///////////

// let priceRanges = [
//     { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
//     { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
//     { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
// ];

// console.log(priceRanges);

// let restaurants = [
//     { averagePerPerson: 5, }
// ];
