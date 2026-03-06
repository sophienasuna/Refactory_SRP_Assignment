## 👥 Groupmates

| Sophie Nasuna |
| Luzze Dennis Kizza |
| Sharifa Namono Ali |
| Namirembe Redemptor |
| Karungi Elizabeth |

# SOLID Principles: Single Responsibility Principle (SRP)

## 📌 Project Overview

This project demonstrates **SRP** by deconstructing a monolithic `Computer` class into distinct, specialized components. Each class has a single, well-defined responsibility.

🏗️ Architecture & SRP Breakdown
Each component in this system has a single, dedicated responsibility:

Component: Responsibility (SRP):
Keyboard Input: Captures raw data from the user.
IntelChip Processing: Logic and data transformation.
InternalMemory Persistence: Temporary data storage and retrieval.
Monitor Output: Displaying the final processed information.
Computer Orchestration: Coordinating the communication between hardware.

🛠️ Design Patterns Used:

1. CompositionInstead of inheriting features, the Computer class is composed of hardware parts. It "has-a" keyboard, "has-a" chip, etc.
2. Dependency Injection (DI)The hardware components are injected into the Computer via the constructor.
   Benefit: This allows us to swap a Keyboard for a MockKeyboard during testing without changing the Computer code.

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
