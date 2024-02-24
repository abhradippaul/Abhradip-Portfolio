require("dotenv").config()
const serverless = require("serverless-http");
const express = require("express");
const { feedbackModel } = require("./feedback.model");
const contactModel = require("./contact.model");
const app = express();
const cors = require("cors")
app.use(cors())
app.use(express.urlencoded({extended :true}))
app.use(express.json())
require("./dbConnection")

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/feedback", async (req, res) => {
  const data = await feedbackModel.find({},{ name: 1, text: 1 ,_id: 0})
  return res.status(200).json(data)
})


app.post("/feedback", async (req, res) => {
  try {
    console.log(req.body)
    const { name, email, text } = req.body
    if (!name || !text) {
      return res.status(400).json({
        ERROR: "Name and text required"
      })
    }
    const data = await feedbackModel.create({
      name,
      email,
      text
    })
    if (!data) {
      return res.status(400).json({
        ERROR: "Data not saved in database"
      })
    }
    return res.status(200).json({
      message: "Data saved"
    })
  } catch (err) {
    console.log("Posting Feedback", err)
  }
})
app.post("/contact", async (req, res) => {
  try {
    console.log(req.body)
    const { name, email, text } = req.body
    if (!name || !text || !email) {
      return res.status(400).json({
        ERROR: "Name and text required"
      })
    }
    const data = await contactModel.create({
      name,
      email,
      text
    })
    if (!data) {
      return res.status(400).json({
        ERROR: "Data not saved in database"
      })
    }
    return res.status(200).json({
      message: "Data saved"
    })
  } catch (err) {
    console.log("Posting Feedback", err)
  }
})

// app.use((req, res, next) => {
//   return res.status(404).json({
//     error: "Not Found",
//   });
// });
// app.listen(80, () => {
//   console.log("Server connected")
// })

module.exports.handler = serverless(app);
