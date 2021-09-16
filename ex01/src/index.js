function main(numOne, numTwo){

var quotient;

if(numTwo === 0){
    quotient = 'Divide by 0! Cannot divide by zero!';
} else {
// only change code below this line
quotient = numOne / numTwo;
// only change code above this line
}

return quotient;

}

console.log(main(numOne,numTwo));    // change this line
module.exports = main;