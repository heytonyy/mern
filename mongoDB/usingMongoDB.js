// use my_first_db

// 5 new students
db.students.insertOne({name: 'Tony', home_state: 'California', lucky_number: 3, birthday: {month: 12, day: 17, year: 1990}})
db.students.insertOne({name: 'Trevor', home_state: 'California', lucky_number: 7, birthday: {month: 3, day: 19, year: 1993}})
db.students.insertOne({name: 'Sol', home_state: 'California', lucky_number: 1000, birthday: {month: 4, day: 1, year: 2018}})
db.students.insertOne({name: 'Luna', home_state: 'California', lucky_number: 1, birthday: {month: 4, day: 1, year: 2018}})
db.students.insertOne({name: 'Ted', home_state: 'California', lucky_number: 100, birthday: {month: 6, day: 1, year: 2022}})

// find all documents
db.students.find()

// find all documents with home state california
db.students.find({home_state: 'California'})

// find all documents with lucky number > 3
db.students.find({lucky_number: {$gt: 3}})

// find all documents with lucky number <= 3
db.students.find({lucky_number: {$lte: 3}})

// find all documents with 1 < lucky number < 9
db.students.find({lucky_number: {$lt: 9 $and: $gt:1}})

// 
db.ninjas.updateMany({home_state: 'California'}, {$set: {interests: ['coding', 'brunch', 'MongoDB']}})

