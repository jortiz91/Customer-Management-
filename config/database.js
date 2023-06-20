const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URI)
    console.log(`Database Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB

//resources: https://getbootstrap.com/docs/5.3/examples/dashboard//
//https://getbootstrap.com/docs/3.4/css//
//I modified the layout completely and CSS
