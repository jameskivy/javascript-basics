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



