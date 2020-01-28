const mongoose = require('mongoose')

var PrimaryObjectSchema = mongoose.Schema({
    // please put validations here
    title:String,
    url:String,
    reviews:[{
        comment:String,
        rating:Number
    }]
},{timestamps:true})
mongoose.model('PrimaryObject', PrimaryObjectSchema);