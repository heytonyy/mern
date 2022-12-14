const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
const pkmnx3 = pokémon.filter( p => p.id % 3 == 0);
console.log(`an array of pokémon objects where the id is evenly divisible by 3`)
console.log(pkmnx3)
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)

const firePkmn = pokémon.filter( p => p.types[0] === 'fire' || p.types[1] === 'fire');
console.log(`an array of pokémon objects that are "fire" type`)
console.log(firePkmn)
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)

const multiTypePkmn = pokémon.filter( p => p.types.length > 1);
console.log(`an array of pokémon objects that have more than one type`)
console.log(multiTypePkmn)
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)

const pkmnNames = pokémon.map( p => p.name);
console.log(`an array with just the names of the pokémon`)
console.log(pkmnNames)
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)

const pkmnAbove99 = pokémon.filter( p => p.id > 99).map( p => p.name)
console.log(`an array with just the names of pokémon with an id greater than 99`)
console.log(pkmnAbove99)
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)

const poisonPkmnNames = pokémon.filter( p => p.types[0] === 'poison' || p.types[1] === 'poison').map( p => p.name);
console.log(`an array with just the names of the pokémon whose only type is poison`)
console.log(poisonPkmnNames)
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)

const type2FlyingPkmn = pokémon.filter( p => p.types.length === 2 && p.types[1] === 'flying').map( p => p.types[0]);
console.log(`an array containing just the first type of all the pokémon whose second type is "flying"`)
console.log(type2FlyingPkmn)
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)

const normalPkmn = pokémon.filter( p => p.types[0] === 'normal' || p.types[1] === 'normal')
console.log(`a count of the number of pokémon that are "normal" type`)
console.log(normalPkmn.length)
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
