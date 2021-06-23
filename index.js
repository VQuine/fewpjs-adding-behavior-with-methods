class Cat {
    // C O N S T R U C T O R allows for usage of ARGUMENTS with 'new'
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    // I N S T A N C E   METHOD
    speak() {
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }

    speak() {
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    //  C O N D I T I O N A L   OUTPUT
    speak() {
        // == make the datatypes the same - compare
        if (this.sex == 'male') {
            return `It's me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`
        }
    }
}