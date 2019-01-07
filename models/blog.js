const   mongoose = require("mongoose");

//Create Blog Schema
let blogSchema = new mongoose.Schema({
    author: String,
    title: String,
    body: String,
    image: String,
    created: {type: Date, default: Date.now}
})

module.exports = mongoose.model("Blog", blogSchema);