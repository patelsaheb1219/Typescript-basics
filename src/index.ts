// Basic Types
let id: number = 5;
let company: string = 'Patel Saheb';
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1,2,3,5];
let arr: any[] = ['Kishan', 1, 3];

// Tuple
let person: [number, string, boolean] = [1, 'Kishan', true]; 

// Tuple array
let employee: [number, string][];

employee = [
  [1, 'Kishan'],
  [2, 'Rahul']
];   

// Union
let p_id: string | number;

p_id = '22';

// Enum
enum Direction1 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
};

// Object
type User = {
  id: number,
  name: string,
  age: number
}
const user: User = {
  id: 1,
  name: 'John',
  age: 23
}

// Type Assertion
let cid: any = 1;
let customerId = <number>cid;

// Funstions
function addNum(x: number, y: number): number {
  return x+y;
}

function log(message: string | number): void {
  console.log(message);
}

log(addNum(1, 2));
log(2);

// Interface
interface UserInterface {
  id: number,
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'John'
}

interface MathFunc {
  (x:number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

// Classes 
interface PersonInterface {
  id: number,
  name: string,
  register(): string
}
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is registered`;
  }
}

const person1 = new Person(1, 'Kishan');
const person2 = new Person(2, 'Mike');
person2.id = 5;
console.log(person1);
console.log(person1.register());

class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const employee1 = new Employee(1, 'Kishan', 'Software Developer');

console.log(employee1.register());

// Generic
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
};

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['kishan', 'rahul', 'ravi']);

