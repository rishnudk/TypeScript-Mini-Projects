import { CreditCard } from "./creditCard";
import { PayPal } from "./payPal";
import { PaymentProcessor } from "./paymentProcessor";

const cc = new CreditCard(1500, "1234567890123456");
const paypal = new PayPal(999, "user@example.com")

const processor = new PaymentProcessor()

processor.processPayment(cc)
processor.processPayment(paypal)
