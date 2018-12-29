// Require appropriate packages
const   express     = require("express"),
        fs          = require("fs-sync")
        app         = express(),
        router      = express.Router();

router.get("/", function(req, res){
    res.render("index");
})

router.get("/:post", function(req, res){
    if(fs.exists("views/posts/" + req.params.post + ".ejs")){
        res.render("posts/" + req.params.post);
    }
    else {
        res.send("error");
    }
})

module.exports = router;