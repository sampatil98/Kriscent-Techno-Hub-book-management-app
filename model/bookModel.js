const mongoose=require("mongoose");

const bookSchema=mongoose.Schema({
    "title":{type:String,require:true},
    "author":{type:String,require:true},
    "coverpage":{type:String,require:true},
    "year":{type:Number,require:true}
});

const BooksModel=mongoose.model("bookData",bookSchema);

module.exports={BooksModel};