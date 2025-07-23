"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPal = void 0;
const paymentMethod_1 = require("./src/paymentMethod");
class PayPal extends paymentMethod_1.PaymentMethod {
    constructor(amount, email) {
        super(amount);
        this.email = email;
    }
    validate() {
        return this.email.includes('@');
    }
    prrocess() {
        if (!this.validate()) {
            return "Invalid PayPal email";
        }
        return `Charged ${this.amount} via PayPal account: ${this.email}`;
    }
}
exports.PayPal = PayPal;
