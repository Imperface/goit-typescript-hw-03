/*
  Ви створюєте гру, де є персонажі з різними ролями.
  Зараз ви працюєте над класом Wizard, який має реалізовувати два інтерфейси - ICharacter та ISpellCaster.

  Визначте інтерфейси ICharacter та ISpellCaster так, щоб вони відповідали вимогам класу Wizard. 
  Інтерфейс ICharacter повинен включати властивості name і level, і навіть метод introduce і levelUp. 
  Інтерфейс ISpellCaster повинен включати метод castSpell.
*/
interface ICharacter {
  name: string;
  level: number;
  introduce(phrase: string): void;
  levelUp(): void;
}
interface ISpellCaster {
  castSpell(): void;
  clearCountOfUsedSpellAfterLvlUp(): void;
  levelUpByUsingSpell(): void;
  showCharacterCountOfUsedSpell(): void;
}

// реалізація класу Wizard
class Wizard implements ICharacter, ISpellCaster {
  // initialize couter of used spells
  private countOfUsedSpell: number = 0;

  // initialize couter of spells count for unlock lvl up
  private countOfSpellForLvlUp: number = 3;

  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error("Level too low.");
    }
    if (!this.name.trim()) {
      throw new Error("The character must have a name!");
    }
  }

  introduce(phrase: string): void {
    console.log(`${phrase} ${this.name}.`);
  }

  castSpell(): void {
    // counter of used spell +1
    wizard.countOfUsedSpell += 1;
    console.log("Casting a spell, behold my power!");

    // if counter of used spells === counter of required spells for lvl up  >> lvl up
    if (this.countOfUsedSpell === this.countOfSpellForLvlUp) {
      this.levelUpByUsingSpell();
    }
  }

  clearCountOfUsedSpellAfterLvlUp(): void {
    // clear counter of used spells

    if (this.countOfUsedSpell !== this.countOfSpellForLvlUp) {
      console.log("Invalid operation. You cannot reset the counter yourself!");
      return;
    }
    this.countOfUsedSpell -= this.countOfSpellForLvlUp;
  }

  levelUp(): void {
    // level up
    this.level += 1;

    console.log(
      `The level has been increased by an admin! New level is ${this.level}!`
    );
  }

  levelUpByUsingSpell(): void {
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
    console.log(
      `Count of used spells by ${this.name} ${this.countOfUsedSpell} casts.`
    );
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
