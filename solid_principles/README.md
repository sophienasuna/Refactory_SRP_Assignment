## 👥 Groupmates

1. KARUNGI ELIZABETH
2. SOPHIE NASUNA
3. ⁠SHARIFA NAMONO ALI
4. ⁠MUKISA DORCUS
5. NAMIREMBE REDEMPTOR.S
6. Luzze Dennis Kizza
7. Allan Mitanda

💻 SOLID Principles in Practice (Computer System Example)
This document explains how key SOLID principles are applied in a simple computer system built using TypeScript.

📌 Overview
The system is designed using abstractions like:

1. InputDevice
2. Processor
3. Memory
4. OutputDevice

These abstractions help achieve:
✅ Low Coupling
✅ High Cohesion
✅ Flexible and Maintainable Code

🧠 Applied SOLID Principles
1️⃣ SRP — Single Responsibility Principle

Definition:
A class should have only one reason to change, meaning it should have only one job.

How it's applied:

Each class in the system has a single responsibility:
Keyboard → handles user input
TouchScreen → handles touch input
IntelChip → processes data
InternalMemory → stores and retrieves data
Monitor → displays output

Why it matters:
If something breaks (e.g., input), you only fix the input class — not the whole system.

2️⃣ DIP — Dependency Inversion Principle

Definition:
High-level modules should not depend on low-level modules. Both should depend on abstractions.

How it's applied:

The Computer class depends on interfaces, not concrete classes:
constructor(
private \_inputDevice: InputDevice[],
private \_processor: Processor,
private \_memory: Memory,
private \_monitor: OutputDevice,
) {}

Instead of hardcoding:
this.processor = new IntelChip(); ❌

We inject dependencies:
new IntelChip() ✅

Why it matters:

You can replace IntelChip with another processor without changing Computer

Makes testing and scaling easier

3️⃣ ISP — Interface Segregation Principle

Definition:
Clients should not be forced to depend on interfaces they do not use.

How it's applied:

Instead of one large interface, we have smaller, focused ones:

interface InputDevice { input(): string; }
interface Processor { process(data: string): string; }
interface Memory { store(data: string): void; retrieve(): string; }
interface OutputDevice { output(data: string): void; }

Why it matters:

Keyboard doesn’t need to implement output()

Monitor doesn’t need process()

Each class only implements what it needs

4️⃣ OCP — Open/Closed Principle (Bonus Insight)

Definition:
Software should be open for extension but closed for modification.

How it's applied:

You can add new devices without modifying existing code:

class VoiceInput implements InputDevice {
input(): string {
return "Voice command received";
}
}

Then just plug it in:

[new Keyboard(), new TouchScreen(), new VoiceInput()]

Why it matters:

- No need to rewrite Computer
- Easy to extend functionality

🧩 System Flow

Input Phase

computer.input();
→ Collects data from all input devices

Processing Phase

computer.process(data);
→ Processor handles the data

Storage Phase
→ Data is stored in memory

Output Phase

computer.display();
→ Output is shown on the monitor

🏗️ Dependency Injection Example
const myPC = new Computer(
"Space Gray",
"14-inch",
[new Keyboard(), new TouchScreen()],
new IntelChip(),
new InternalMemory(),
new Monitor(),
);

Key Idea:
All components are injected, not created inside the class.

🎯 Key Takeaways
SRP → One class = one job

DIP → Depend on interfaces, not concrete classes

ISP → Keep interfaces small and specific

OCP → Extend without modifying existing code

💡 Simple Analogy:
Think of this system like building a custom PC:

- You can swap the keyboard, CPU, or monitor
- The system still works because everything follows a standard interface

🚀 Getting Started:
Prerequisites:

- Node.js
- TypeScript (npm install -g typescript)
- ts-node (npm install -g ts-node)

Installation:
Bash:

- git clone https://github.com/sophienasuna/Refactory_SRP_Assignment.git
- cd Refactory_SRP_Assigment
- npm install

## 💻 How to Run

You can run the system directly using ts-node:
Bash:

- node computer.ts
- ts-node computer.ts

🧑‍💻 Author
Sophie Nasuna Refactory Academy Student
