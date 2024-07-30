var pattern = /\d/g;
var text = "The Price is 45 rupees only";
var x = text.match(pattern);
console.log(x);

var pattern = /\D/g;
var text = "The Price is 45 rupees only";
var x = text.match(pattern);
console.log(x);

var pattern = /\s/g;
var text = "The Price is 45 rupees only";
var x = text.match(pattern);
console.log(x);

var pattern = /\S/g;
var text = "The Price is 45 rupees only";
var x = text.match(pattern);
console.log(x);

var pattern = /\w/g;
var text = "The Price is 45_rupees$ only";
var x = text.match(pattern);
console.log(x);

var pattern = /\W/g;
var text = "The Price is 45__rupees$$ only";
var x = text.match(pattern);
console.log(x);

var pattern = /\bPrice/g; 
var text = "The Price is 45 rupees only";
var x = text.match(pattern);
console.log(x);

var pattern = /h.t/g;
var text = "The cat wears the hat upon mat";
var y = text.match(pattern);
console.log(y);

var pattern = /^The/g;
var text = "The cat wears the hat upon mat";
var y = text.match(pattern);
console.log(y);

var pattern = /mat$/g;
var text = "The cat wears the hat upon mat";
var y = text.match(pattern);
console.log(y);

var pattern = /ha*t/g;
var text = "The cat wears the hat upon mat haat hot ht" ;
var y = text.match(pattern);
console.log(y);

var pattern = /ha+t/g;
var text = "The cat wears the hat upon mat haat hot ht";
var y = text.match(pattern);
console.log(y);

var pattern = /hat?/g;
var text = "The cat wears the hat upon mat haat hot";
var y = text.match(pattern);
console.log(y);

var pattern = /\d{2}:\d{2}/g;
var text = "The cat wears the hat at 10:45";
var y = text.match(pattern);
console.log(y);

var pattern = /[ch]at/g;
var text = "The cat wears the hat upon mat haat hot";
var y = text.match(pattern);
console.log(y);

var pattern = /hot | hat | cat| mat/g;
var text = "The cat wears the hat upon mat haat hot";
var y = text.match(pattern);
console.log(y);




