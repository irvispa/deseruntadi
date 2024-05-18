interface Person {
  occupation: string;
  name: string;
  age: number;
  isEmployed: boolean;
}

function createPerson(name: string, age: number, occupation: string, isEmployed: boolean): Person {
  return { name, age, occupation, isEmployed };
}

// Usage
const person = createPerson('Alice', 30, 'Engineer', true);
