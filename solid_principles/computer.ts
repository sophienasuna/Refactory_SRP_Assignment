// Abstractions - DIP (Dependency Inversion Principle) and ISP (Interface Segregation Principle)
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
    private _inputDevice: InputDevice[],
    private _processor: Processor,
    private _memory: Memory,
    private _monitor: OutputDevice,
  ) {}

  // Getter and Setter for color
  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  // Getter and Setter for dimensions
  get dimensions(): string {
    return this._dimensions;
  }

  set dimensions(value: string) {
    this._dimensions = value;
  }

  // Getter and Setter Input Devices
get inputDevice(): InputDevice[] {
  return this._inputDevice;
}

set inputDevice(value: InputDevice[]) {
  this._inputDevice = value;
}

// Getter and Setter Processor
get processor(): Processor {
  return this._processor;
}

set processor(value: Processor) {
  this._processor = value;
}

// Getter and Setter Memory
get memory(): Memory {
  return this._memory;
}

set memory(value: Memory) {
  this._memory = value;
}

// Getter and Setter Monitor
get monitor(): OutputDevice {
  return this._monitor;
}

set monitor(value: OutputDevice) {
  this._monitor = value;
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

