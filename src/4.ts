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
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected isDoorOper: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}

  abstract openDoor(person: Person): void;

  blockDoor(): void {
    this.isDoorOper = false;
  }

  comeIn(person: Person): void {
    if (!this.isDoorOper) {
      console.log("Error, you cannot enter a closed door.");
      return;
    }

    // add person to tenants
    this.tenants.push(person);
    console.log("Successful added to tenants.");

    // close the door
    this.blockDoor();
  }
  setNewKey(key: Key): void {}
  getTenants(): void {}
  resetTenants(): void {}
}

class MyHouse extends House {
  openDoor(person: Person): void {
    const personKey: Key = person.getKey();
    // check wrong key
    if (personKey.getSignature() !== this.key.getSignature()) {
      console.log("Error, the key does not match, the door is close.");
      return;
    }

    console.log("Successful door opening.");
    this.isDoorOper = true;
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
const johnMerel: Person = new Person(key, "John");
console.log(johnMerel);

// try one the door
myHouse.openDoor(johnMerel);

// try come in
myHouse.comeIn(johnMerel);
console.log(myHouse);

// create secont key
const key1: Key = new Key();

// create new person with first key and name
const saraLomes = new Person(key1, "Sara");

// update key in myHouse
myHouse.setNewKey(key1);

// try one the door
myHouse.openDoor(saraLomes);

// try come in
myHouse.comeIn(saraLomes);
console.log(myHouse);

// reset tenants
myHouse.resetTenants();
console.log(myHouse);

// try to come in with old key
myHouse.openDoor(johnMerel);
console.log(myHouse);

// open door with the last key
myHouse.openDoor(saraLomes);

// try come in
myHouse.comeIn(saraLomes);

console.log(myHouse);
