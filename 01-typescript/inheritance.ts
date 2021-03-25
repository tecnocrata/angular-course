class Person {
  firstName: String;
  lastName: String;
  greeting() {
    console.log("Hello");
  }
}

class Student extends Person {
  constructor(firstName?: string, lastName?: string) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getGrades() {
    console.log(`${this.firstName} is at 9 grade`);
    //this.greeting()
  }
}

export default Student;
