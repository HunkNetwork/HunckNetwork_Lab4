    for(let i =0; i<100;i++){
        if(i%2==0){
            continue;
        }
        else{
         console.log(i)   
        }
    }

    for(let i =0; i<100;i++){
        if(i%2==0 && i*6>90/2){
            break;
        }
        else{
         console.log(i)   
        }
    }


// break is used to stop a code in loop from running e.g if a program is running and a certain condition is met break can be implemented
// continue is used to jump a section block or statement or next iteration and the current instruction is not executed

