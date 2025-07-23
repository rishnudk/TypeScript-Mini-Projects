# 💳 Online Payment System (TypeScript + OOP)

This is a simple TypeScript project demonstrating **Object-Oriented Programming** concepts like:
- Abstraction
- Inheritance
- Polymorphism
- Encapsulation

## 📦 Features
- Process payments via different methods:
  - Credit Card
  - PayPal
- Polymorphic `PaymentProcessor` handles all payment types.

## 🛠 Project Structure
src/
├── creditCard.ts
├── payPal.ts
├── paymentMethod.ts
├── paymentProcessor.ts
└── main.ts



## 🚀 How to Run

```bash
# Install dependencies
npm install

# Compile TypeScript to JavaScript
npx tsc

# Run the app
node dist/main.js


Example Output

Charged ₹1500 to Credit Card ending in 3456
Charged ₹999 via PayPal account: user@example.com

