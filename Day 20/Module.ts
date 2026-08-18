// 1. Student Class
class Student {
    constructor(
        public name: string,
        public age: number,
        public marks: number
    ) {}

    getInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const talha = new Student("Talha", 22, 90);
console.log(talha.getInfo());


// 2. Shop Class
interface SoldItem {
    name: string;
    price: number;
    quantity?: number;
}

class Shop {
    title: string;
    sold_items: SoldItem[] = [];

    constructor(title: string) {
        this.title = title;
    }

    buy(name: string, price: number, quantity: number = 1): void {
        this.sold_items.push({ name, price, quantity });
    }

    getTotal(): number {
        const total = this.sold_items.reduce(
            (acc, elem) => acc + elem.price * (elem.quantity ?? 1),
            0
        );
        console.log(`Total revenue for ${this.title}: $${total}`);
        return total;
    }
}

// Example usage:
const myShop = new Shop("TechStore");
myShop.buy("Mouse", 25, 2);
myShop.buy("Keyboard", 75);
myShop.getTotal(); // Output: Total revenue for TechStore: $125