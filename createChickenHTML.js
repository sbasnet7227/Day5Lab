// input: name, description
// work : create an html string that we can hand off to document.write
// output : an html articl  with placeholder pic, name and description


// pseudocode

// input : name - "fluffy", description- "organic chicken"

// work: 


function creatChickenHTML (name , description){

    var newChicken = '<article>' +
    '<img src="chicken.jpg">' +
    '<h3>' +
    name +
    '</h3>' +
    '<p>' +
    description +
    '</p>' +
    '</article>' ;
return newChicken;
}

// prompt user if they want to add chicken

var wantToAddChicken = prompt('Do you want to add chicken?');

if (wantToAddChicken == 'yes') {

    // if so, ask for name and description

    var chickenName = prompt ("what is the chicken name");

    var chickenDescription = prompt("what is the description");

    // call the function creatChickenHTML with chicken name and description
    var newChickenCreated = creatChickenHTML (chickenName, chickenDescription);

    // out

    console.log(newChickenCreated);
    document.write (newChickenCreated);
}

