class Person {
  firstName: String;
  lastName: String;
}

class Student extends Person {
  constructor(firstName?: string, lastName?: string) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getGrades() {
    // some code
  }
}

export default Student;
