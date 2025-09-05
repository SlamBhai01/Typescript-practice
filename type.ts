type firstName = { name1: string, name2: string, roll_No: number };
type secondName = { name3: string, name4: string, roll_No1: number };
var student3: firstName = {
    name1: "Abdul",
    name2: "Islam",
    roll_No: 2351
}
console.log(student3.roll_No);
var student4: secondName = {
    name3: "Abdul",
    name4: "rehman",
    roll_No1: 2351
}
console.log(student4.name4);
type mixed_Name=firstName&secondName;
var student5: mixed_Name = {
     name1: "Abdul",
    name2: "Islam",
    roll_No: 2351,
    name3: "Abdul",
    name4: "rehman",
    roll_No1: 2351
}
console.log("Mixed part show "+student5.name3);
