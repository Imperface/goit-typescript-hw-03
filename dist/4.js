class Key {
    constructor() {
        this.signature = Math.floor(Math.random() * 100001).toString();
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
    getPersonName() {
        return this.name;
    }
    getKey() {
        return this.key.getSignature();
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.isDoorOper = false;
        this.tenants = [];
    }
    openDoor(person) { }
    comeIn(person) { }
    resetKey() { }
    setNewKey(key) { }
    getTenants() { }
}
class MyHouse extends House {
    openDoor(person) {
        // get personal key from person
        const personKey = person.getKey();
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
    comeIn(person) {
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
    setNewKey(newKey) {
        // set new key for open the door
        this.key = newKey;
    }
    getTenants() {
        if (!this.tenants) {
            console.log("No tenants.");
            return;
        }
        // return array with all tanants
        return this.tenants;
    }
    resetTenants() {
        // reset tenants array
        this.tenants = [];
    }
}
// create first key
const key = new Key();
console.log(key);
// initialize key in myHouse
const myHouse = new MyHouse(key);
console.log(myHouse);
// create new person with first key and name
const person = new Person(key, "John");
console.log(person);
// try one the door
myHouse.openDoor(person);
// try come in
myHouse.comeIn(person);
console.log(myHouse);
// create secont key
const key1 = new Key();
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
//# sourceMappingURL=4.js.map