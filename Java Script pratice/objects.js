var name1 = {
    a : 10,
    b : 20, 
    c : 30
}

var name2 = new Object();
name2.x = 100;
name2.y = 200;
name2.z = 300;

console.log(name1);
console.log(name2);

// Accessing 
console.log(name1.b);
console.log(name2["y"]);

//Adding 
name1.d = 40;
console.log(name1);
name2["A"] = 400;
console.log(name2);

//Modification 
name1.d = 40.54;
console.log(name1);
name2["A"] = 400.64;
console.log(name2);

// Delete
delete name1.d;
console.log(name1);
delete name2["A"];
console.log(name2);

//Methods
console.log(Object.keys(name1));
console.log(Object.values(name2));
console.log(Object.entries(name2));