// Require appropriate packages
const   express     = require("express"),
        indexRoutes = require("./routes/index"),
        blogRoutes  = require("./routes/blog"),
        app         = express(),
        bodyParser  = express.urlencoded({extended: true});

app.set("view engine", "ejs");
app.use(bodyParser);
app.use(express.static(__dirname + "/public"));

app.use("/blogs", blogRoutes);
app.use(indexRoutes);


app.listen(3000, "localhost", function(){
    console.log("Server Start Up");
})