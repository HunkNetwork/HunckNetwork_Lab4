const vowelNumber = (sentence)=>{
    let sum=0
    letters = sentence.replaceAll(" ", "").split('');
    const vowels= ['a','e','i','o','u']
    for (let p = 0; p<letters.length; p++){
        for (i of vowels){
            if (letters[p]==i){
                sum += 1;
            }
        }
    }
    return sum
};
n =vowelNumber("this is");
console.log(n)