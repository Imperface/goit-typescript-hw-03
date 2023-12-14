class Key {
    constructor() {
        this.signature = Math.floor(Math.random() * 100001);
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key, name) {
        this.key = key;
        this.name = name;
    }
}
// interface HouseInt {
//   door: boolean;
//   tenants: PersonInt[];
//   comeIn(person: PersonInt): void;
//   openDoor(key: number): void;
// }
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) { }
    openDoor(key) { }
    changeKey(newKey) { }
}
class MyHouse extends House {
    openDoor(key) {
        if (key !== this.key.signature) {
            console.log("Error, the key does not match, the door is close.");
            return;
        }
        console.log("Successful door opening.");
        this.door = true;
    }
    comeIn(person) {
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
    changeKey(newKey) {
        console.log(this.key.signature);
        console.log(newKey);
        this.key.signature = newKey;
    }
}
const key = new Key();
const myHouse = new MyHouse(key);
console.log(myHouse);
const person = new Person(key, "John");
myHouse.openDoor(person.key.getSignature());
myHouse.comeIn(person);
console.log(myHouse);
// const key1: KeyInt = new Key();
// myHouse.changeKey(key1.getSignature());
// console.log(myHouse);
// const person1: PersonInt = new Person(key1, "Sara");
// myHouse.comeIn(person1);
//# sourceMappingURL=4.js.map