const vowelNumber = (sentence)=>{
    sum=0
    letters = sentence.replaceAll(" ", "").split('','');
    console.log(letters)
    const vowels= ['a','e','i','o','u']
    for (let p = 0; p<letters.length; p++){
        for (i in vowels){
            if (letters[p]==i){
                sum+=1;
            }
        }
    }
};

console.log(vowelNumber("this is"))