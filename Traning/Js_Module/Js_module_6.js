// What is the diffrence between the call() and apply() method

// The only diffrence between them is the way we pass the arrguments. In bothe we pass the arrguments - first Argument
// is the context in which we want to call in both method. 
// then In call method we can pass the arguments to the function saperated by comma, but in apply method we use tp
// pass an single list(Arraylist) as a second argument contains function parameter

//Ex:

var ABC = {
    name: "Ayush Mahajan",
    role: "Student"
}

var PQR = {
    name: "Akshay kumar",
    role: "Actor"
}

const nameAndProffesion = function (Domain, hometown) {
    console.log(this.name + " lives in " + hometown + " and currently " + Domain + " " + this.role);
}

// call method
console.log("USING call() method")
nameAndProffesion.call(ABC, "IET", "Indore")
nameAndProffesion.call(PQR, "Bollywood", "MUMBAI")


// apply method
console.log("USING apply() method")
nameAndProffesion.apply(ABC, ["IET", "Indore"])
nameAndProffesion.apply(PQR, ["Bollywood", "MUMBAI"])