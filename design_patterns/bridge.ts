interface Device {
  turnOn(): void;
}

class TV implements Device {
  turnOn(): void {
    console.log("TV is ON");
  }
}

class Radio implements Device {
  turnOn(): void {
    console.log("Radio is ON");
  }
}

class RemoteControl {
  constructor(private device: Device) {}

  pressPower() {
    this.device.turnOn();
  }
}

// Usage
const tv = new TV();
const remote = new RemoteControl(tv);

remote.pressPower();