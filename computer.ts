/**
 * SRP: Responsibility - Data Acquisition.
 * This class is solely concerned with how data enters the system.
 */
class Keyboard {
  input(): string {
    return "User typed data";
  }
}

/**
 * SRP: Responsibility - Data Transformation.
 * This class handles the logic/processing without concern for input or output sources.
 */
class IntelChip {
  process(data: string): string {
    return `Processing: ${data}`;
  }
}

/**
 * SRP: Responsibility - Data Persistence.
 * Manages the state of the system by storing and retrieving information.
 */
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

/**
 * SRP: Responsibility - Data Presentation.
 * This class handles the final interface to the user.
 */
class Monitor {
  output(data: string): void {
    console.log("Monitor Output:", data);
  }
}

/**
 * The Controller.
 * This class demonstrates 'Composition' and 'Dependency Injection'.
 * Its single responsibility is coordinating the flow between hardware components.
 */
class Computer {
  constructor(
    public color: string,
    public dimensions: string,
    private keyboard: Keyboard,
    private intelChip: IntelChip,
    private internalMemory: InternalMemory,
    private monitor: Monitor,
  ) {}

  // Methods are decoupled to allow granular control of the hardware lifecycle
  handleUserInput(): string {
    const data = this.keyboard.input();
    console.log("Step 1: Input received");
    return data;
  }

  processAndStore(rawData: string): void {
    const processed = this.intelChip.process(rawData);
    this.internalMemory.store(processed);
    console.log("Step 2: Data processed and stored");
  }

  displaySystemMemory(): void {
    const savedData = this.internalMemory.retrieve();
    this.monitor.output(savedData);
    console.log("Step 3: Memory displayed on monitor");
  }
}