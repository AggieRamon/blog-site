// Require appropriate packages
const   express     = require("express"),
        Blog        = require("../models/blog.js"),
        app         = express(),
        router      = express.Router();

router.get("/", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        }
        else{
            res.render("index", {blogs: blogs});
        }
    });
});

router.get("/:id", function(req, res){
    Blog.findById(req.params.id, function(err, blog){
        if(err){
            console.log(err);
        }
        else{
            res.render("blog", {blog: blog});
        }
    });
});

module.exports = router;