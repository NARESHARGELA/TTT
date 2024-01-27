const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const portfolioRoutes = require("./routes/portfolioRoute");
const cors = require("cors");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/portfolio", portfolioRoutes);

const Port = process.env.PORT || 5000;
// const path = require('path')

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static(path.join(__dirname,'client/build')))
//     app.get('*',(req,res)=>{
//         res.sendFile(path.join(__dirname,"client/build/index.html"))
//     })
// }

app.listen(Port, () => {
  console.log("Server is Started");
});
