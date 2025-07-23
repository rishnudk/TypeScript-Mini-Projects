import { PaymentMethod } from "./paymentMethod";

export class PaymentProcessor {
    processPayment(payment: PaymentMethod): void {
        console.log(payment.process())
    }
}