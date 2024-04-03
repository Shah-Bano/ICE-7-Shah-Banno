//Using a function to load the website page

function displayHomePage(req, res){
    res.render("home.ejs");
}


//Calling the function
module.exports = {
    displayHomePage,
}