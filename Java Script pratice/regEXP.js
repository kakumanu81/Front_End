/*var a = new RegExp("/n.*u/","img");
var b = /K.*u/img;

console.log(a.global);
console.log(b.global);

console.log(a.test("Nagarjuna Kakumanu"));
console.log(b.exec("Kakumanu"));*/

var x = new String("Nagarjuan Kakumanu");
console.log(x.search(/k.*u/i));

var z = new String("kakumanu kakumanu KAKAUMANU");
console.log(z.match(/Kakumanu/gi));

var y = new String("Nagarjuna Nagarjuna NAGARJUNA")
console.log(y.replace(/NAGARJUNA/gi,"Kakumanu"));
