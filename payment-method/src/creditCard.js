"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCard = void 0;
const paymentMethod_1 = require("./paymentMethod");
class CreditCard extends paymentMethod_1.PaymentMethod {
    constructor(amount, cardNumber) {
        super(amount);
        this.cardNumber = cardNumber;
    }
    validate() {
        return this.cardNumber.length === 16;
    }
    process() {
        if (!this.validate()) {
            return "Invalid Credit Card";
        }
        return `Charged ${this.amount} to Credit Card ending in ${this.cardNumber.slice(-4)}`;
    }
}
exports.CreditCard = CreditCard;
