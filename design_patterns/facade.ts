class AuthService {
  async login(credentials: { username: string; password: string }) {
    return { id: 1, email: "user@example.com", address: "123 Main St" };
  }
}

class PaymentService {
  async charge(user: any, amount: number) {
    console.log(`Charged $${amount} to user ${user.id}`);
  }
}

class InventoryService {
  async reserve(cart: any) {
    console.log(`Reserved items: ${cart.items.length}`);
  }
}

class NotificationService {
  async sendConfirmation(email: string) {
    console.log(`Confirmation sent to ${email}`);
  }
}

class ShippingService {
  async createLabel(address: string) {
    console.log(`Shipping label created for ${address}`);
  }
}

// Define Data Objects
interface Credentials {
  username: string;
  password: string;
}

interface CartItem {
  id: number;
  price: number;
}

interface Cart {
  items: CartItem[];
  total: number;
}

// Facade Class
class OrderFacade {
  constructor(
    private auth: AuthService,
    private payment: PaymentService,
    private inventory: InventoryService,
    private notif: NotificationService,
    private shipping: ShippingService,
  ) {}

  async placeOrder(credentials: Credentials, cart: Cart) {
    const user = await this.auth.login(credentials);
    await this.inventory.reserve(cart);
    await this.payment.charge(user, cart.total);
    await this.shipping.createLabel(user.address);
    await this.notif.sendConfirmation(user.email);
  }
}

// Client only sees one method
const services = {
  auth: new AuthService(),
  payment: new PaymentService(),
  inventory: new InventoryService(),
  notif: new NotificationService(),
  shipping: new ShippingService(),
};

const facade = new OrderFacade(
  services.auth,
  services.payment,
  services.inventory,
  services.notif,
  services.shipping,
);

const credentials: Credentials = { username: "john", password: "pass123" };
const cart: Cart = {
  items: [
    { id: 1, price: 50 },
    { id: 2, price: 75 },
  ],
  total: 125,
};

