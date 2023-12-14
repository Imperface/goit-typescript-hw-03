interface KeyInt {
  signature: number;
}

interface PersonInt {
  key: KeyInt;
  name: string;
}

class Key {
  private signature: string = Math.floor(Math.random() * 100001).toString();

  public getSignature(): string {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key, private name: string) {}

  getPersonName(): string {
    return this.name;
  }
  getKey(): string {
    return this.key.getSignature();
  }
}

abstract class House {
  protected isDoorOper: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}
  openDoor(person: Person): void {}
  comeIn(person: Person): void {}
  resetKey(): void {}
  setNewKey(key: Key): void {}
  getTenants(): void {}
}

class MyHouse extends House {
  openDoor(person: Person): void {
    // get personal key from person
    const personKey: string = person.getKey();

    // check empty key
    if (personKey === "") {
      console.log("An invalid signature was entered.");
      console.log("Check that the key is entered correctly!");
      return;
    }

    // check wrong key
    if (personKey !== this.key.getSignature()) {
      console.log("Error, the key does not match, the door is close.");
      return;
    }

    console.log("Successful door opening.");
    this.isDoorOper = true;
  }

  comeIn(person: Person) {
    if (!this.isDoorOper) {
      console.log("Error, you cannot enter a closed door.");
      return;
    }

    // add person to tenants
    this.tenants.push(person);
    console.log("Successful added to tenants.");

    // close the door
    this.isDoorOper = false;
  }

  setNewKey(newKey: Key): void {
    // set new key for open the door
    this.key = newKey;
  }

  getTenants(): void | Person[] {
    if (!this.tenants) {
      console.log("No tenants.");
      return;
    }

    // return array with all tanants
    return this.tenants;
  }

  resetTenants(): void {
    // reset tenants array
    this.tenants = [];
  }
}

// create first key
const key: Key = new Key();
console.log(key);

// initialize key in myHouse
const myHouse = new MyHouse(key);
console.log(myHouse);

// create new person with first key and name
const person: Person = new Person(key, "John");
console.log(person);

// try one the door
myHouse.openDoor(person);

// try come in
myHouse.comeIn(person);
console.log(myHouse);

// create secont key
const key1: Key = new Key();

// create new person with first key and name
const person1 = new Person(key1, "Sara");

// update key in myHouse
myHouse.setNewKey(key1);

// try one the door
myHouse.openDoor(person1);

// try come in
myHouse.comeIn(person1);
console.log(myHouse);

// reset tenants
myHouse.resetTenants();
console.log(myHouse);
