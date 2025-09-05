"use strict";
var Person;
(function (Person) {
    Person[Person["Name"] = 0] = "Name";
    Person[Person["Color"] = 1] = "Color";
    Person[Person["Personality"] = 2] = "Personality";
    Person[Person["Behaviour"] = 3] = "Behaviour";
})(Person || (Person = {}));
var Fruit;
(function (Fruit) {
    Fruit["a"] = "apple";
    Fruit["n"] = "banana";
})(Fruit || (Fruit = {}));
console.log(Fruit.a);
console.log(Fruit.n);
function Person_Date(Role) {
    if (Role == Person.Name) {
        console.log("My name is Abdul ISlam");
    }
}
// 🔸 Correct call — no console.log here
Person_Date(Person.Name); // ✅ Output: My name is Abdul ISlam
