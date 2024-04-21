const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const typecactus = require("./routes/typecactus");
const disease = require("./routes/disease");
const wiki = require('./routes/wiki');
const cors = require("cors");


// เชื่อมต่อ MongoDB
mongoose
  .connect(
    "mongodb+srv://projectcactus:1234@projectcactus.opyp5p8.mongodb.net/"
  )
  .then(() => console.log("เชื่อม MongoDB เสร็จล๊า!"))
  .catch((err) => console.error(err));

app.use(cors());
// app.use((req, res, next) => {
//   res.header(Access - Control - Allow - Origin, "*");
//   res.header(
//     Access - Control - Allow - Header,
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(express.json());
app.use("/api/typecactus", typecactus);
app.use("/api/dbdisease", disease);
app.use('/api/dbwiki', wiki);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
