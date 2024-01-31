// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types


let myObject = {
name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for(data in myObject){
    console.log(data +' | '+ myObject[data]);
}