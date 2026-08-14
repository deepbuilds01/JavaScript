function name(){
    console.log("DK");
    console.log("DK");
    console.log("DK");
    console.log("DK");
    console.log("DK");
    console.log("DK");
}

// name   // referense
// name() // execution


function twosum(num1, num2){
    console.log(num1+num2);
}
twosum()      // funtion call output is NaN
twosum(10,10) // 20
twosum(10,"132") // 10132
twosum(10,null)  // 10
const result = twosum(50,50)
console.log(result);    // undefined

