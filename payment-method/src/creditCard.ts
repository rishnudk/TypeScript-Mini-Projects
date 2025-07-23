import { PaymentMethod } from "./paymentMethod";

export class CreditCard extends PaymentMethod {
    private cardNumber: string;

    constructor(amount: number, cardNumber:string) {
        super(amount);
        this.cardNumber = cardNumber;
    }

    validate(): boolean {
        return this.cardNumber.length === 16;
    }
    process(): string {
        if(!this.validate()) {
            return "Invalid Credit Card"
        }
        return `Charged ${this.amount} to Credit Card ending in ${this.cardNumber.slice(-4)}`
    }
}