// 1 masala Create a function that takes two numbers as arguments and returns their sum.
function add(a ,b){
return a+b;
}
console.log( "1- masala yechimi " + add(2,5));
// 2 masala Write a function that takes an integer minutes and converts it to seconds
function mintosec(a){
  return a * 60
}
console.log("2 masala yechimi "+ mintosec(20));
// 3 masala Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function increment(a) {
  return ++a;
}
console.log("3 masa yechimi " + increment(5) );

// 4 masala Write a function that takes the base and height of a triangle and return its area.
function triangl(a , b) {
  return (a*b)/2;
}
console.log("4- masala yechimi " + triangl(30 , 4));
// 5 masala 
function calage(a) {
  return a*365
}
console.log("5 - masala" , calage(20))


// 6 masala  
function qoldiq(a , b) {
  return a%b
}
console.log ( "6 masala " + qoldiq(4, 3))
// 7 masala 
function calculate(a,b,c){
  return a*3+b*1+c*0
}
console.log("7 masala " + calculate(3 , 4 , 2));
// 8 masala 
function ball(a,b){
  return a*2+b*3
}
console.log("8 masala " + ball(3 , 4 ));
// 9 masala
function less(a, b){
  if (a + b < 100) {
    return true 
  }
  return false
}
console.log("9 masala " + less(20 , 40));

// 10 masala 
function farmlegs(a,b,c){
  return a*2+b*4+c*4
}
console.log("10 masala " + farmlegs(2 , 4 , 4));
