// IMPORTANT DEPENDANCYS
const express = require('express')
const cors = require('cors')
const { faker } = require("@faker-js/faker")

// INSTATIATE EXPRESS SERVER
const app = express()
const PORT = 8000

// SET UP MIDDLEWARE -- what is this?
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

class User {
    constructor(_id, firstName, lastName, phoneNum, email, pw){
        this._id = _id
        this.firstName = firstName
        this.lastName = lastName
        this.phoneNum = phoneNum
        this.email = email
        this.pw = pw
    }
    printInfo(){
        console.log(`ID: ${this._id}\nFirst Name: ${this.firstName}\nLast Name: ${this.lastName}\nPhone #: ${this.phoneNum}\nEmail: ${this.pw}\n`)
    }
}
class Company {
    constructor(_id, name, address){
        this._id = _id
        this.name = name
        this.address = address
    }
    printInfo(){
        console.log(`ID: ${this._id}\nCompany Name: ${this.name}\nAddress: ${this.address}\n`)
    }
}

//ENDPOINTS
app.get('/api/user/new', (req, res) => {
    const id = faker.datatype.uuid()
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const phone = faker.phone.phoneNumber()
    const email = faker.internet.email(firstName, lastName, 'email.com')
    const pw = faker.internet.password()

    const newUser = new User(id, firstName, lastName, phone, email, pw)

    console.log(`REQUEST A NEW USER`)
    res.json(newUser)
})

app.get('/api/companies/new', (req, res) => {
    const id = faker.datatype.uuid()
    const companyName = faker.company.companyName()
    const address = {
        'street': faker.address.streetAddress(),
        'city': faker.address.city(),
        'state': faker.address.state(),
        'zipcode': faker.address.zipCode(),
        'country': faker.address.country()
    }

    const userCompany = new Company(id, companyName, address)

    console.log(`REQUEST A NEW COMPANY`)
    res.json(userCompany)
})

app.get('/api/user/company', (req, res) => {
    const user_id = faker.datatype.uuid()
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const phone = faker.phone.number()
    const email = faker.internet.email(firstName, lastName, 'email.com')
    const pw = faker.internet.password()
    const newUser = new User(user_id, firstName, lastName, phone, email, pw)

    const company_id = faker.datatype.uuid()
    const companyName = faker.company.name()
    const address = {
        'street': faker.address.streetAddress(),
        'city': faker.address.city(),
        'state': faker.address.state(),
        'zipcode': faker.address.zipCode(),
        'country': faker.address.country()
    }
    const userCompany = new Company(company_id, companyName, address)

    const newUserCompany = {
        'user': newUser,
        'company': userCompany
    }

    console.log(`REQUEST A NEW USER &COMPANY`)
    res.json(newUserCompany)
})

// RUN EXPRESS SERVER
app.listen(PORT, () => console.log(`STARTING SERVER ON PORT: ${PORT}`))

/*
HOW TO USE:
    faker.datatype.uuid()
    faker.internet.userName()
    faker.internet.email()
*/