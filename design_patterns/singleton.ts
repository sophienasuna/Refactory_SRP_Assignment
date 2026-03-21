class Databse {

  private static instance: Databse;

  private constructor() {
    console.log("Singleton instance created");
  }

  public static getInstance(): Databse {

    if (!Databse.instance) {
      Databse.instance = new Databse();
    }

    return Databse.instance;
  }
}

const obj1 = Databse.getInstance();
const obj2 = Databse.getInstance();

console.log(obj1 === obj2);