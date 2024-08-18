export class Product {
    productId: number;
    productCode: string;
    productName: string;
    price: number;

    constructor();
    constructor(pid: number, pcode: string, pname: string, prc: number);

    constructor(pid?: number, pcode?: string, pname?: string, prc?: number) {
        
            this.price = prc ?? 0;
            this.productCode = pcode ?? "";
            this.productName = pname ?? "";
            this.productId = pid ?? 0;

        
    }
}
