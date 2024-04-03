//Importing express module and assigning varaibel
const express = require("express");

//Calling 
const app = express();


// Looking indies the routes folder for access
const homePageRouter = require("./routes/home")

//Looking insides views folder
app.set("views", "./views");

//Using default engine
app.set("view engine", "ejs");

//Used for routing
app.use("/", homePageRouter)

app.listen(3500, () => {
    console.log("Server wroks!!!")
});