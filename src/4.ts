interface KeyInt {
  signature: number;
  getSignature(): number;
}
interface PersonInt {
  key: KeyInt;
  name: string;
}

class Key implements KeyInt {
  public signature: number = Math.floor(Math.random() * 100001);

  getSignature(): number {
    return this.signature;
  }
}

class Person implements PersonInt {
  constructor(public key: KeyInt, public name: string) {}
}

// interface HouseInt {
//   door: boolean;
//   tenants: PersonInt[];
//   comeIn(person: PersonInt): void;
//   openDoor(key: number): void;
// }

abstract class House {
  protected door: boolean = false;
  protected tenants: PersonInt[] = [];

  constructor(protected key: KeyInt) {}
  comeIn(person: PersonInt): void {}
  openDoor(key: number): void {}
  changeKey(newKey: number): void {}
}

class MyHouse extends House {
  openDoor(key: number): void {
    if (key !== this.key.signature) {
      console.log("Error, the key does not match, the door is close.");
      return;
    }
    console.log("Successful door opening.");
    this.door = true;
  }

  comeIn(person: PersonInt) {
    if (!this.door) {
      console.log("Error, you cannot enter a closed door.");
      return;
    }
    console.log("Successful added to tenants.");
    this.tenants.push(person);
    this.door = false;
  }

  getTenants() {
    return this.tenants;
  }

  changeKey(newKey: number): void {
    console.log(this.key.signature);
    console.log(newKey);
    this.key.signature = newKey;
  }
}

const key: KeyInt = new Key();
const myHouse = new MyHouse(key);
console.log(myHouse);

const person: PersonInt = new Person(key, "John");

myHouse.openDoor(person.key.getSignature());
myHouse.comeIn(person);

console.log(myHouse);

// const key1: KeyInt = new Key();
// myHouse.changeKey(key1.getSignature());
// console.log(myHouse);

// const person1: PersonInt = new Person(key1, "Sara");

// myHouse.comeIn(person1);
