const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());


//ROUTES//

//rutas de login y registrase

app.use("/authentication", require("./routes/pAuth"));

app.listen(3000, () => {
    console.log("server is running on port 3000")
})