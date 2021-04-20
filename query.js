const db = require('./db')
const User = require('./models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const findAll = async () => {
  const users = await User.find()
  console.log("All users:", users)
}

// findAllNames one
// findAllOlderThan25
// active and less then 25

const createUser = async () => {
  const newUser = {name: "Lark", age: 23, status: "pending"}
  await User.insertOne(newUser)
  console.log("User created")
}
const deleteUser = async () => {
  const delUser = {name: "Abe", age: 22, status: "active"}
  await User.deleteOne(delUser)
  console.log("User deleted")
}
const updateUser = async () => {
  const updatedUser = {$set: {name: "Joseph", age:32, status:"pending"}}
  User.updateOne({name: "Joey"}, updatedUser)
  console.log("User updated")
}

const findOnlyNames = async () => {
  const onlyNames = {name:1}
  User.find({}, onlyNames)
}

const findGreaterThan25 = async () => {
  const over25Users = ({age:{$gt:25}})
  User.find(over25Users)
}

const findActiveAndLessThan25 = async () => {
  const activeNUnder25Users = ({ status: "active", age: { $lt: 25 } })
  User.find(activeNUnder25Users)
}

const run = async () => {
  await findAll()
  await createUser()
  await deleteUser()
  await updateUser()
  await findOnlyNames()
  await findGreaterThan25()
  await findActiveAndLessThan25()
  process.exit()  
}
run()