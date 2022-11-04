class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resil) {
        super(name, cost);
        this.power = power;
        this.resil = resil;
    }
    attack(target){
        target.resil -= this.power;
    }
    showStats(){
        console.log(`${this.constructor.name} card: ${this.name}\nPower: ${this.power}\nResil: ${this.resil}`)
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, mag){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }
    play(target){
        if (target instanceof Unit){
            // is this correct?
            (this.stat === 'resil') ? target.resil += this.mag : target.power += this.mag
        } else {
            throw new Error('Target must be a unit!');
        }
    }
}

console.log('~~~~~~~~~~~~~~~~~~TURN 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
const redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4)
const hardAlgorithm = new Effect('Hard Algorithm', 2, "increase target's resil by 3", 'resil', 3)
hardAlgorithm.play(redBeltNinja)
redBeltNinja.showStats()
console.log('~~~~~~~~~~~~~~~~~~TURN 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
const blackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4)
const unhandledPromiseRejection = new Effect('Unhandled Promise Rejection', 1, "reduce target's resil by 2", 'resil', -2)
unhandledPromiseRejection.play(redBeltNinja)
redBeltNinja.showStats()
blackBeltNinja.showStats()
console.log('~~~~~~~~~~~~~~~~~~TURN 3~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
const pairProgramming = new Effect('Pair Programming', 3, "increase target's power by 2", 'power', 2)
redBeltNinja.attack(blackBeltNinja)
redBeltNinja.showStats()
blackBeltNinja.showStats()
console.log('~~~~~~~~~~~~~~~~~~~END~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')



