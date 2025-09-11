// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // allow additional attributes
}

// Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Example usage of Director
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function declaration
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));

// ------------------------------
// StudentClass Task
// ------------------------------

// Constructor interface
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Class methods interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of StudentClass
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Alice", "Johnson");
console.log(student.displayName());   // Output: Alice
console.log(student.workOnHomework()); // Output: Currently working
