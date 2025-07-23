
import { PaymentMethod } from "./paymentMethod";

export class PayPal extends PaymentMethod {
    private email: string;

    constructor(amount: number, email: string) {
        super(amount)
        this.email = email
    }

    validate(): boolean {
        return this.email.includes('@');
    }

    process(): string {
        if (!this.validate()) {
            return "Invalid PayPal email"
        }
        return `Charged ${this.amount} via PayPal account: ${this.email}`
    }
}