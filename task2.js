
class Student {
    constructor(fname,sname){
        this.fname = fname;
        this.lastname = sname;
    }
    
    printf(){
        return `firstname: ${this.fname} surname : ${this.lastname}`
    } 
};

fname = "chikondi"
lastname = "kibombwe"

s1 = new Student("chisomo", "chinyonga")

console.log(s1 instanceof Student)
console.log(typeof fname)
console.log(delete s1.fname)
console.log(s1.printf())