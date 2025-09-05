interface info{name:string,
    age:number,
    company:string,
    Title:string
    
}
interface TeacherType extends info{
subject:string,
department:string
}
var student:info={
    name :"Abdul ISlam",
    age:21,
    company:"TechnoVerse",
    Title:"Web Dev"
}

 console.log(student.age);
 var Teacher:TeacherType={
    name :"Abdullah",
    age:21,
    company:"TechnoVerse",
    Title:"Web Dev",
    subject:"English",
    department:"Software Eng"
}

 console.log(Teacher.department);
 console.log(Teacher.subject);
 