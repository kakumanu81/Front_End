// String methods
var x = "Nagarjuna Kakumanu";
console.log(x.length);
console.log(x[8]);

let a = "Nagarjuna";
let b = "Kakumanu";
var c = a.concat(b);
console.log(c);

var name3 = "Nagarjuna Kakumanu";
console.log(name3.charAt(6));

console.log(name3.charCodeAt(3));
console.log(name3.charCodeAt(9));

console.log(name3.startsWith("Na"));
console.log(name3.startsWith('Nagarjuna'));
console.log(name3.endsWith('na'));
console.log(name3.endsWith('nu'));

console.log(name3.includes("a K"));
console.log(name3.includes('Na'));

console.log(name3.toLowerCase());
console.log(name3.toUpperCase());

console.log(name3.indexOf('j'));
console.log(name3.lastIndexOf('r'));

console.log(name3.repeat(4));
console.log(name3.replace("Kakumanu", "Nagarjuna"));
console.log(name3.replace("Nagarjuna", "Nagarjuna"));

let n = "   kushi    ";
console.log(n);
console.log(n.trim());
console.log(name3.trim("N"));

console.log(n.split(" "));


