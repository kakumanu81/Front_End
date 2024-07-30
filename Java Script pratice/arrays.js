// creation of an array
let a = [10,20,30,40,50,60,70,80,90,100];
let b = new Array("a","b","c","d","e");
console.log(a);
console.log(b);

// Accessing
console.log(a[4]);
console.log(b[2]);

//Modification
a[4] = 500;
console.log(a);
b[0] = "obito";
console.log(b);

// array methods
a.push(110);
console.log(a);
b.pop();
console.log(b);
b.unshift("e");
console.log(b);
b.shift();
console.log(b);
console.log(a.slice(5));
console.log(a.slice(4,8));
let x = a.concat(b);
console.log(x);
console.log(b.join(" $ "));
console.log(a.indexOf(80));
b.forEach(function(i){
    console.log(i);    
});
//map
let z = a.map(function(i){
    return i+1;
});
console.log(z);
let y = a.filter(function(i){
    return i%3==0;
})
console.log(y);
let res  = a.reduce(function(accumulator,cv){
    return accumulator+cv;

},0);
console.log(res);





