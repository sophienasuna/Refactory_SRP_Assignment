## 👥 Groupmates

| Sophie Nasuna |
| Luzze Dennis Kizza |
| Sharifa Namono Ali |
| Namirembe Redemptor |
| Karungi Elizabeth |

# SOLID Principles: Single Responsibility Principle (SRP)

## 📌 Project Overview

This project demonstrates **SRP** by deconstructing a monolithic `Computer` class into distinct, specialized components. Each class has a single, well-defined responsibility.

## 🛠️ Class Breakdown

1. **Keyboard**: Responsible solely for capturing input. It does not know how the data is processed or where it is stored.
2. **IntelChip**: Responsible for data transformation. It does not care where the input came from.
3. **InternalMemory**: Responsible for data state. It focuses only on storing and retrieving strings.
4. **Monitor**: Responsible for output. Its only job is to display information to the user.
5. **Computer (The Controller)**: Its single responsibility is to orchestrate the flow of data between the other components.

## 🚀 The Benefit of this Approach

By adhering to SRP, our code is:

- **Maintainable**: We can update the `Monitor` logic without risking bugs in the `IntelChip`.
- **Testable**: We can test the `InternalMemory` class in isolation.
- **Reusable**: The `IntelChip` class could be used in other devices (like a Tablet or Calculator) without modification.

## 💻 How to Run

```bash
node computer.ts
```
