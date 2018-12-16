import '../sass/index.sass';
class Person {
  constructor(name: String, age: Number) {
    this.name = name;
    this.age = age;
  }

  public getName(): String {
    return this.name;
  }

  public getAge(): Number {
    return this.age;
  }

  private name: String;
  private age: Number;
}

const me = new Person('Ivan', 18);

const container = document.querySelector('.container');
const title = document.createElement('h1');
title.innerHTML = `Имя: ${me.getName()}, возраст: ${me.getAge()}`;
container.appendChild(title);