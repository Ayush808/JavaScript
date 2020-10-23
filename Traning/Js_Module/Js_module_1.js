// How to create object in Java Script

/* 3. using new keyword */


const student1 = new Object();

student1.name = 'std_name';
student1.college = 'std_cllgName';

console.log("Object 1a: ", student1);

// Also using constructor

function Student2(name, cllg) {
    this.name = name;
    this.college = cllg;
}

const std_obj = new Student2("ABC", "XYZ");

console.log("Object 1b: ", std_obj);

/* 2. Creating objects using object literal syntax */

const developer = {
    Name: 'developer_Name',
    role: 'developer_role'
};

// JSON object - can used in other object creation

/* 3. Using Object.create() to create new objects */
// NOTE : The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

const organization1 = { company: 'XYZ' };

const employee1 = Object.create(organization1, { name: { value: 'Emp1_name' } });

console.log("Object 2: ", employee1.name);

/*4. If we want to create object from existing 2 or more object - we use assign() */

const organization2 = { company: 'XYZ' }
const campus = { location: 'Indore' }

const employee2 = Object.assign({}, organization2, campus);

console.log("Object 3: ", employee2);

/* 5. Using ES6 class and its constructor */

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.brand = model;
    }
}

const carObj = new Car('brand_name', 'car_model');

console.log("Object 4: ", carObj);