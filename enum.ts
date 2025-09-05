enum Person {
    Name,
    Color,
    Personality,
    Behaviour
}
enum Fruit{
    a="apple",
    n="banana"
}
console.log(Fruit.a);
console.log(Fruit.n);

function Person_Date(Role: Person) {
    if (Role == Person.Name) {
        console.log("My name is Abdul ISlam");
    }
}

// 🔸 Correct call — no console.log here
Person_Date(Person.Name); // ✅ Output: My name is Abdul ISlam