let timeOfTheDay = ["morning", "afternoon", "evening"];

for (i of timeOfTheDay){
    if (i === "morning"){
        console.log(`good ${i} user`)
    }
    else if (i== "afternoon"){
        console.log(`good ${i} user`)
    }
    else if (i == "evening"){
        console.log(`good ${i} user`)
    }
    else{
        console.log("undefined ref")
    }
}


for(i of timeOfTheDay){

    switch (i){
        case "morning" :
            console.log(`good ${i} user`);
            break;
        case "afternoon":
            console.log(`good ${i} user`)
            break;
        case "evening":
            console.log(`good ${i} user`)
            break;
        default:
            console.log("undefined ref")
        
    };      
}