const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URL).then(()=> {
    console.log("Connected to the server")
}).catch(() => {
    console.log("Database error")
})