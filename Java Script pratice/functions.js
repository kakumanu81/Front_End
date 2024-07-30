// function implementation methods
// Normal function declaration
function hello1(){
    console.log("hello Nagarjuna");
}
hello1()
// Function expression
var hello2 = function(){
    console.log("Kakumanu Nagarjuna");

}
hello2()
// Arrow function
var hello3 = ()=>{
    console.log("Hello Kakumanu");
}
hello3()
// IIFE
/*(function(){
    console.log("hello world");
})();*/
// Name function
var hello4 = function hello(){
    console.log("hello world");
}
hello4();

// types of user defined functions
// with parameters - with return
function name1(a,b){
    return a + b;
}
var x = name1(20,30);
console.log(x);

// with parameters - without return (piza)
 function fun1(user,slices){
    var totalslices = user*slices;
    if ((totalslices%4)==0){
        console.log(totalslices/4);
    }
    else{
        console.log(parseInt(totalslices/4)+1)
    }
 }
 fun1(4,4)
 fun1(6,3)
 fun1(7,4)

// without parameters - with return
function fun2(){
    return 10;
}
console.log(fun2());

// without return - without return
function fun3(){
    console.log("last type of function")
}
fun3();
