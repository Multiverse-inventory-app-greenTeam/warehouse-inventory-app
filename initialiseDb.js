const db = require('./db')
//import models
const Pallet  = require('./models/pallet')
const  Warehouse  = require('./models/warehouse')
const  Box  = require('./models/box')
const Employee = require('./models/employee')

//associate models
async function initialiseDb() {
Warehouse.hasMany(Pallet)

Pallet.belongsTo(Warehouse)
Pallet.hasMany(Box)
Box.belongsTo(Pallet)
Warehouse.hasMany(Employee)
Employee.belongsTo(Warehouse)
await db.sync();
}

module.exports = initialiseDb;






