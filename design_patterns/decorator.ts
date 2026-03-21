// 1. The Interface (Component)
interface Coffee {
  cost(): number;
}

// 2. The Base Ingredient (Concrete Component)
class BasicCoffee implements Coffee {
  cost(): number {
    return 2;
  }
}

// 3. The Abstract Decorator
abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost();
  }
}

// 4. Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return super.cost() + 1;
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return super.cost() + 0.5;
  }
}

// --- Execution ---
let myCoffee: Coffee = new BasicCoffee(); // $2.0
myCoffee = new MilkDecorator(myCoffee); // $3.0
myCoffee = new SugarDecorator(myCoffee); // $3.5

console.log(`Total cost: $${myCoffee.cost()}`);