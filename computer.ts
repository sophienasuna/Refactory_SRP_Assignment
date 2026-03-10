// Abstractions - These satisfy DIP (Dependency Inversion Principle) and ISP (Interface Segregation Principle)
interface InputDevice {
  input(): string;
}
interface Processor {
  process(data: string): string;
}
interface Memory {
  store(data: string): void;
  retrieve(): string;
}
interface OutputDevice {
  output(data: string): void;
}

// SRP: Hardware
class Keyboard implements InputDevice {
  input(): string {
    return "User typed data";
  }
}

class TouchScreen implements InputDevice {
  input(): string {
    return "Screen Touched";
  }
}

class IntelChip implements Processor {
  process(data: string): string {
    return `Processing: ${data}`;
  }
}

class InternalMemory implements Memory {
  private storage: string = "";

  store(data: string): void {
    this.storage = data;
  }

  retrieve(): string {
    return this.storage;
  }
}

class Monitor implements OutputDevice {
  output(data: string): void {}
}

// Constructor
class Computer {
  constructor(
    private _color: string,
    private _dimensions: string,
    private inputDevice: InputDevice[],
    private processor: Processor,
    private memory: Memory,
    private monitor: OutputDevice,
  ) {}

  // Getter for color
  get color(): string {
    return this._color;
  }

  // Setter for color
  set color(value: string) {
    this._color = value;
  }

  // Getter for dimensions
  get dimensions(): string {
    return this._dimensions;
  }

  // Setter for dimensions
  set dimensions(value: string) {
    this._dimensions = value;
  }

  // Methods
  input(): string[] {
    const data = this.inputDevice.map((device) => device.input());
    return data;
  }

  process(rawData: string): void {
    const processed = this.processor.process(rawData);
    this.memory.store(processed);
  }

  display(): void {
    const data = this.memory.retrieve();
    this.monitor.output(data);
  }
}

// Implementation of Dependency Injection
const myPC = new Computer(
  "Space Gray",
  "14-inch",
  [new Keyboard(), new TouchScreen()],
  new IntelChip(),
  new InternalMemory(),
  new Monitor(),
);

