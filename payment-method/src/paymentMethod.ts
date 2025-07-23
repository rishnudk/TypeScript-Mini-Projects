

export abstract class PaymentMethod {
    constructor(protected amount:number) {}
        abstract validate() : Boolean;
        abstract process(): string
    
}