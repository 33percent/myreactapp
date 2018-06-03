class Person {
  constructor(name = "sandyy",age = 0){
    this.name = name;
    this.age = age;
  }
  makegreet(){
    return this.name;
  }
  logemeout(){
    return "aldlasdklaskdal"
    console.log("alkjssssssssssss");
  }
}

class student extends Person{
  constructor(name,age,major){
    super(name,age);
    this.major = major;
  }
  hasmajor(){
    return !!this.major
  }
  logemeout(){
    let desc = super.logemeout();
    return desc
    console.log("akjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
  }
}
const student1 = new student("studentsandy",50);
console.log(student1);
console.log(student1.hasmajor());
console.log(student1.logemeout());
const me = new Person("Sandeep",20);
// console.log(me.makegreet());
const you = new Person();
// console.log(you);
