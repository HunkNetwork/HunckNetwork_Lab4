const multiply = (num1, num2)=> num1*num2

result = multiply(3,7)

if (result>=20 && result%2==0){
    console.log("the imput is greter 20 and even")
}   
else{
    console.log("not even")
    console.log(`closer even is ${++result} or ${result-=2}`)
}

// tenary operator
num = 9;
const answer = num/2  > 10 ? "yes":"no";
console.log(answer)
