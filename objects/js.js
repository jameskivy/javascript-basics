let person = {
    name: 'Leonardo'
};

let animal = {
    species: 'snake'
};

Object.freeze(person);
person.name = "Leema";
console.log(person);
