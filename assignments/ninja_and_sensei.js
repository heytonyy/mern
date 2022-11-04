class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`Hello, my name is ${this.name}!\n`)
    }
    showStats(){
        console.log(`Show Stats:\n\tName: ${this.name}\n\tStrength: ${this.strength}\n\tSpeed: ${this.speed}\n\tHealth: ${this.health}\n`)
    }
    drinkSnake(){
        this.health += 10;
        console.log('Drinking da sake... +10 HP\n')
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name)
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdom(){
        super.drinkSnake()
        console.log('What one programmer can do in one month, two programmers can do in two months.\n')
    }
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// ninja output
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSnake();
ninja1.showStats();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// sensei output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
