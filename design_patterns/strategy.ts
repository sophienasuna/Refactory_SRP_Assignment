interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log("Paid " + amount + " using credit card");
  }
}

class CashPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log("Paid " + amount + " using cash");
  }
}

class PaymentContext {

  constructor(private strategy: PaymentStrategy) {}

  executePayment(amount: number) {
    this.strategy.pay(amount);
  }
}

const payment1 = new PaymentContext(new CreditCardPayment());
payment1.executePayment(100);

const payment2 = new PaymentContext(new CashPayment());
payment2.executePayment(50);