var shoppingCart = {
    book: 5,
    pen: 6,
    mouse: 1,
    eraser: 3
}

// Object.entries(object name) is used to convert object to array.
var convertArray = Object.entries(shoppingCart);
// console.log(convertArray);


var keys = Object.keys(shoppingCart);
var values = Object.values(shoppingCart);

for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = values[i];
    // console.log(propertyName, propertyValue);
}

// for in loop

for (var propertyName in shoppingCart) {
    var value = shoppingCart[propertyName];
    console.log(propertyName, value);
}

