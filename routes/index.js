// Require appropriate packages
const   express = require("express"),
        router  = express.Router({mergeParams: true});

//Home page route
router.get("/", function(req, res){
    res.redirect("/blogs");
});

router.get("/about", function(req, res){
    res.render("about");
});

router.get("/*", function(req, res){
    res.send("error");
});

module.exports = router;