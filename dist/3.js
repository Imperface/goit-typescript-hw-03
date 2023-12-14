// реалізація класу Wizard
class Wizard {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        // initialize couter of used spells
        this.countOfUsedSpell = 0;
        // initialize couter of spells count for unlock lvl up
        this.countOfSpellForLvlUp = 3;
        if (this.level < 1) {
            throw new Error("Level too low.");
        }
        if (!this.name.trim()) {
            throw new Error("The character must have a name!");
        }
    }
    introduce(phrase) {
        console.log(`${phrase} ${this.name}.`);
    }
    castSpell() {
        // counter of used spell +1
        wizard.countOfUsedSpell += 1;
        console.log("Casting a spell, behold my power!");
        // if counter of used spells === counter of required spells for lvl up  >> lvl up
        if (this.countOfUsedSpell === this.countOfSpellForLvlUp) {
            this.levelUpByUsingSpell();
        }
    }
    clearCountOfUsedSpellAfterLvlUp() {
        // clear counter of used spells
        if (this.countOfUsedSpell !== this.countOfSpellForLvlUp) {
            console.log("Invalid operation. You cannot reset the counter yourself!");
            return;
        }
        this.countOfUsedSpell -= this.countOfSpellForLvlUp;
    }
    levelUp() {
        // level up
        this.level += 1;
        console.log(`The level has been increased by an admin! New level is ${this.level}!`);
    }
    levelUpByUsingSpell() {
        // lvl up by using spell required count of spell = countOfSpellForLvlUp
        // if counter is less lvl up blocked
        if (this.countOfUsedSpell !== this.countOfSpellForLvlUp) {
            console.log("Not enough spells used to level up!");
            console.log(`Current count of spell used: ${this.countOfUsedSpell}.`);
            console.log(`Level up required ${this.countOfSpellForLvlUp}.`);
            return;
        }
        // level up
        this.level += 1;
        // clean counter of used spell
        this.clearCountOfUsedSpellAfterLvlUp();
        console.log(`Level up! New level is ${this.level}`);
    }
    showCharacterCountOfUsedSpell() {
        if (!this.countOfUsedSpell) {
            console.log("No spells were used.");
            return;
        }
        console.log(`Count of used spells by ${this.name} ${this.countOfUsedSpell} casts.`);
    }
}
// тестування класу
//
//
// I made two ways to increase the level
// for admin wizard.levelUp() and natural wizard.levelUpByUsingSpell()
//
//
const wizard = new Wizard("Merlin", 15);
console.log(wizard);
wizard.introduce("I am the mighty wizard.");
wizard.levelUp(); // Level up! New level is 16
// after using spell countOfSpellForLvlUp times auto Lvl Up
wizard.castSpell();
wizard.castSpell();
wizard.castSpell();
wizard.castSpell();
console.log(wizard);
// wizard.castSpell();
// wizard.clearCountOfUsedSpellAfterLvlUp();
// wizard.castSpell();
// wizard.levelUpByUsingSpell();
// wizard.showCharacterCountOfUsedSpell();
//# sourceMappingURL=3.js.map