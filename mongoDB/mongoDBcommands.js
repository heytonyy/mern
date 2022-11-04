// ~~~~~~~~~~~~~~~~~~~~ CREATE ~~~~~~~~~~~~~~~~~~~~
// Pattern:
db.COLLECTION_NAME.insert({YOUR_JSON_DOCUMENT})  
 
// Example:
db.ninjas.insert({name: "Trey", belt: "black", status: "awesome"})
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~ READ ~~~~~~~~~~~~~~~~~~~~
// ----------------- (READ ONE) -----------------
//
// Pattern: 
db.COLLECTION_NAME.find({YOUR_QUERY_DOCUMENT})
// Example:
db.ninjas.find({name: "Trey"})

// ----------------- (READ ALL) -----------------
// (can use blank obj or nothing as an argument)
// Examples:
db.ninjas.find({})
db.ninjas.find()

// ----------------- (PRETTY) -----------------
// like pprint in python
// Example:
db.ninjas.find().pretty()
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~ UPDATE ~~~~~~~~~~~~~~~~~~~~
// 
// Pattern:
db.COLLECTION_NAME.update({QUERY}, {FIELDS_TO_UPDATE}, {OPTIONS})  
// Note: the options document is optional

// Example:
db.ninjas.update({name: "Trey"}, {$set: {location: "Mountain View"}})
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// ~~~~~~~~~~~~~~~~~~~~ DELETE ~~~~~~~~~~~~~~~~~~~~
// Pattern:
db.COLLECTION_NAME.remove({YOUR_QUERY_DOCUMENT}, BOOLEAN)

// Example
db.ninjas.remove({belt: "yellow"})
// this query would have the same effect as the one above.
db.ninjas.remove({belt: "yellow"}, false)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
