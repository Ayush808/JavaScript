// How to create an Array

/* 1. using new key word */

var students1 = new Array("Ayush", "Suyash", "karan");

/* OR use this */

// var students = new Array();
// students[0] = "Ayush";
// students[1] = "Suyash";
// students[2] = "Karan";

console.log("Method 1 -> Array ", students1);

/* 2. Simplest approch */

var students2 = ["Ayush", "Suyash", "Karan"];

console.log("Method 2 -> Array ", students2);

// Note: we can also create Array of object

/*3. we can merge 2 arrays as well */

var students = [...students1, ...students2]

console.log("Merged -> Array ", students);