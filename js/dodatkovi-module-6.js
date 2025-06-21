console.log("Hello world");

class Item {
  static discount = 10;
  #name;
  #price;
  #amount;

  constructor(name, price, amount) {
    this.#name = name;
    this.#price = price;
    this.#amount = amount;
  }

  buy(amount) {
    if (this.#amount >= amount) {
      this.#amount -= amount;
    }
  }

  howMuch(amount) {
    console.log(amount * this.#price * (1 - Item.discount / 100));
  }
}

const item1 = new Item("Apple Watch Se", 1000, 10);
const item2 = new Item("Apple Watch Se", 500, 15);
const item3 = new Item("Apple Watch Se", 1500, 15);
const item4 = new Item("Apple Watch Se", 750, 15);

item1.howMuch(3);
item1.buy(7);
item2.howMuch(5);
