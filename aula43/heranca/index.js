class Animal {
  constructor({ name, race }) {
    this._name = name;
    this._race = race;
  }
  falar() {
    console.log("....");
  }
}

class Dog extends Animal {
  constructor({ name, race }) {
    super({ name, race });
  }

  falar() {
    console.log("Au auau");
  }
}

class Cat extends Animal {
  constructor({ name, race }) {
    super({ name, race });
  }

  falar() {
    console.log("Miiiaauuuuu");
  }
}

const doginho = new Dog({ name: "Bilu", race: "Vira-lata" });
const gatinho = new Cat({ name: "Frajola", race: "Siberiano" });
const animal = new Animal({ name: "Neutro", race: "qualquer" });

doginho.falar();
gatinho.falar();
animal.falar();
