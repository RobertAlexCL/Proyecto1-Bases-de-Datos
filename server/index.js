const express = require("express");
const app = express();
const cars = require("cors");


app.use(express.json());
app.use(cors());


//ROUTES//

app.listen(5000, () => {
    console.log("server is running on port 5000")
})