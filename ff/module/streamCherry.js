var mongoose = require("mongoose");

var StreamCherrySchema = mongoose.Schema({
    key       : String,
    url       : String,
    imgUrl    : String,
    date      : Date
});

module.exports = mongoose.model('fuliba',StreamCherrySchema);