// Define Teacher interface
interface Teacher {
  readonly firstName: string;       // only modifiable at initialization
  readonly lastName: string;        // only modifiable at initialization
  fullTimeEmployee: boolean;        // always defined
  yearsOfExperience?: number;       // optional
  location: string;                 // always defined
  [key: string]: any;               // allow additional attributes (e.g., contract)
}

// Example teacher object
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log(teacher3);
