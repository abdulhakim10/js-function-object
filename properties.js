var shoppingCart = {
    books: 5,
    pens: 8,
    eraser: 4,
    sharper: 1
}
// when you knows the property name, use dot notation to get the property value
var penQuant = shoppingCart.pens;
// Alternetive system
// // when you knows the property name, use dot notation to get the property value
var penQuant2 = shoppingCart['pens'];

// 3rd way to get property value
var propertyName = 'books';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);


var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);



// Set property values
shoppingCart.books = 17;
console.log(shoppingCart);
shoppingCart['books'] = 20;
console.log(shoppingCart);
shoppingCart[propertyName] = 30;
console.log(shoppingCart);

// console.log(penQuant2);