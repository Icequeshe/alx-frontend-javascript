// Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Directors interface extending Teacher
export interface Directors extends Teacher {
  numberOfReports: number;
}

// printTeacher function interface
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// function using destructuring for { firstName, lastName }
export function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Student interfaces
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
export class StudentClass implements StudentClassInterface {
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
