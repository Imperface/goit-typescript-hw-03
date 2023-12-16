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
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.isDoorOper = false;
        this.tenants = [];
    }
    blockDoor() {
        this.isDoorOper = false;
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
        this.blockDoor();
    }
    setNewKey(key) { }
    getTenants() { }
    resetTenants() { }
}
class MyHouse extends House {
    openDoor(person) {
        const personKey = person.getKey();
        // check wrong key
        if (personKey.getSignature() !== this.key.getSignature()) {
            console.log("Error, the key does not match, the door is close.");
            return;
        }
        console.log("Successful door opening.");
        this.isDoorOper = true;
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
const johnMerel = new Person(key, "John");
console.log(johnMerel);
// try one the door
myHouse.openDoor(johnMerel);
// try come in
myHouse.comeIn(johnMerel);
console.log(myHouse);
// create secont key
const key1 = new Key();
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
//# sourceMappingURL=4.js.map