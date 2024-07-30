// while loops
console.log("while loop")

var x = 5;
while(x >= 0){
    console.log(x);
    x--;
}
//  do while
console.log("do while loop")
var x = 5;
do{
    console.log(x)
    x--;
}
while (x > 0);

// for loop
console.log("for loop")
for( var x=5;x>0;x--){
    console.log(x);

}

// for in
console.log("for in loop");
var x = {
    a : 10,
    b : 20,
    c : 30,
    d : 40

}
for (y in x){
    console.log(x[y]);
}

// for off loop
console.log("for off loop")
var x = [10,20,30,40,50];
for (var y of x){
    console.log(y)
}

// loop control statements
// break
console.log("Break")
for(var x = 0; x < 10; x++){
    if(x==6){
        break;
    }
    console.log(x);
}

// continue
console.log("continue")
for(var x = 0; x < 10; x++){
    if(x==6){
        continue;
    }
    console.log(x);
}





