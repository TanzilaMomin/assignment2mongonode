const mongoose = require("mongoose");

const fullnameModel = mongoose.model("fullname",{
    fname : {type : String},
    lname : {type : String}
});

module.exports = fullnameModel;