//Importing the express module
const express = require("express");

//Acessing the controllers folder for the file 
const homePageController = require("../controllers/home")


//Making a router instance
const router = express.Router();

//Using rotuing
router.get("/home", homePageController.displayHomePage);

module.exports = router;