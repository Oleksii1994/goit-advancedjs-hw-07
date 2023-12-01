class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  
constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  key: Key;
  door: boolean;
  tenants: Person[] = [];
  abstract openDoor(key: Key): void;

 constructor(key: Key) {
   this.key = key;
   this.door = false;
  }

  comeIn(person: Person): void {
   if (this.door) {
     this.tenants.push(person);
      console.log("Wellcome Home")
   } else {
     console.log("Wrong key, you can't come in");
     }
  }
}


class MyHouse extends House {
 
  openDoor(key:Key):void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is opened");
    } else {
      this.door = false;
      console.log("The door is closed");
      
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};