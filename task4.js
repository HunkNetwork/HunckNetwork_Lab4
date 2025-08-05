const add = () =>{
    sum = 0;
    for (let i =0; i<=200; i++){
        if (i%10==0){
            sum += i;
        }
    }
    return sum
}


console.log(add());