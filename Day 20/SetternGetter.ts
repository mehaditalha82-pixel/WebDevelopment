class User {
    private name: string;
    private _age!: number; // Using definite assignment assertion or setting a default

    constructor(name: string) {
        this.name = name;
    }

    // Setter
    set age(value: number) {
        if (value < 18) {
            throw new Error("Invalid: Age must be 18 or older.");
        }
        this._age = value;
    }

    // Getter
    get age(): number {
        return this._age;
    }
}

const talha = new User("Talha");

// Accessing the setter via the instance
talha.age = 20;

console.log(talha);
console.log(`Age: ${talha.age}`);