const db = require('../db')
const user = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async() => {
    const users = [
        {name: "Benny", age: 28, status: "active"},
        {name: "Claire", age: 24, status: "active"},
        {name: "Joey", age: 28, status: "pending"},
        {name: "Abe", age: 22, status: "active"},
        {name: "Sunny", age: 27, status: "pending"},
        {name: "Lizzy", age: 23, status: "pending"},
        {name: "Julie", age: 21, status: "active"},
    ]

    await user.insertMany(users)
    console.log("Created users")   
}

const run = async () => {
    await main()
    db.close()
}

run();