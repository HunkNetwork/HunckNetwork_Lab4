const vowelsTotal = (sentence) =>{
     const vowels =['a','e','i','o','u'];
     const chars = sentence.replaceAll(" ",'').split('');
     const obj ={}
    
     for (i of vowels){
        sum = 0;
        for(p of chars){    
            if(i==p){
                sum +=1;
                obj[i] = sum;
            }
        }
     }
     return obj
}

sent = "this is an examlpe of senetences in english";
console.log(vowelsTotal(sent))