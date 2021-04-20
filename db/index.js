const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/tkh-practice', {useUnifiedTopology: true, useNewUrlParser: true}).then((() => {
    console.log("Connection to MongoDB successful")
})).catch((e => {
    console.error("Connection failed", e.message)
}))


const db = mongoose.connection

module.exports = db;