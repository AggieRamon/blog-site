const   mongoose = require("mongoose");

//Create Blog Schema
let blogSchema = new mongoose.Schema({
    author: String,
    title: String,
    body: String,
    dateCreated: {type: Date, Default: Date.now}
})

module.exports = mongoose.model("Blog", blogSchema);