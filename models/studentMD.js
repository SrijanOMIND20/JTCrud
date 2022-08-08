const mongoose= require('mongoose');

const studentModel = new mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    dateOfBirth:{
        type:String,
        required:true
    },
    Percentage:{
        type: Number,
        required:true
    },
    profilePicture:{
        type:String,
    }
});

module.exports = mongoose.model("student",studentModel);