// Abstractions - These satisfy DIP (Dependency Inversion Principle) and ISP (Interface Segregation Principle)
interface InputDevice { input(): string; }
interface Processor { process(data: string): string; }
interface Memory { store(data: string): void; retrieve(): string; }
interface OutputDevice { output(data: string): void; }

/* SRP: This class shows how data enters the system. */
class Keyboard {
  input(): string {
    return "User typed data";
  }
}

// This class handles the logic/processing without concern for input or output sources 
class IntelChip {
  process(data: string): string {
    return `Processing: ${data}`;
  }
}

// Manages the state of the system by storing and retrieving information 
class InternalMemory {
  private storage: string = "";

  store(data: string): void {
    this.storage = data;
    console.log("Data stored in memory");
  }

  retrieve(): string {
    return this.storage;
  }
}

// This class handles the final interface to the user 
class Monitor {
  output(data: string): void {
    console.log("Monitor Output:", data);
  }
}

// Its single responsibility is coordinating the flow between hardware components 
class Computer {
  constructor(
    public color: string,
    public dimensions: string,
    // REFACTOR: Changed types to Interfaces to satisfy OCP and DI
    private keyboard: InputDevice,
    private processor: Processor,
    private memory: Memory,
    private monitor: OutputDevice,
  ) {}

  // Methods 
  handleUserInput(): string {
    const data = this.keyboard.input();
    console.log("Step 1: Input received");
    return data;
  }

  processAndStore(rawData: string): void {
    const processed = this.processor.process(rawData);
    this.memory.store(processed);
    console.log("Step 2: Data processed and stored");
  }

  displaySystemMemory(): void {
    const savedData = this.memory.retrieve();
    this.monitor.output(savedData);
    console.log("Step 3: Memory displayed on monitor");
  }
}

// --- 4. USAGE (Implementation of Dependency Injection) ---
const myPC = new Computer(
  "Space Gray", 
  "14-inch", 
  new Keyboard(), 
  new IntelChip(), 
  new InternalMemory(), 
  new Monitor()
);

myPC.handleUserInput(); // Example call