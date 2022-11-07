/*
Given: Object
Goal: return array of the objexts key balues pairs where each key value pari is a 2 items array. 
*/

const obj1 = {
    name: "Pizza",
    calories: 9801,
}
const expected1 = [
    ['name', 'pizza'],
    ['calories', 9801]
]

function objectEntries(object) {
    const objKeys = Object.keys(object)
    const objVals = Object.values(object)
    return [[...objKeys], [...objVals]]
}

console.log(objectEntries(obj1))


/*
Given: table name (str), data (object)
Goal: write the SQL Insert statement to insert that object data into the given table
*/

const table1 = 'users'
const insertData1 = {
    first_name: 'John',
    last_name: 'Doe'
}
const exp1 = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe')"
function sqlInsert(table, data){
    const keyNames = Object.keys(data)
    const valueNames = Object.values(data)
    const keyStr = `(${keyNames})`
    const valueStr = `(${valueNames})`
    return `INSERT INTO ${table} ${keyStr} VALUES ${valueStr};`
}

console.log(sqlInsert(table1, insertData1))