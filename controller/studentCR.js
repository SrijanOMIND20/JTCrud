const studentModel = require("../models/studentMD");


exports.createStudent = (req,res,next) => {
    const { data } = req.body;
    console.log(data);
    const studentData = new studentModel(data);
    studentData.save((err,data) =>{
        if(err||!data){
           return res.status(400).json({status:"failed",error:err});
        }
        return res.status(201).json({status:"Success",data:data});
    })
};

exports.getStudentDetails = (req,res) => {
    studentModel.find({}).exec((err,data)=>{
        if(err||!data){
            return res.status(400).json({status:"Failed",error:err});
        }
        return res.status(200).json({status:"Success",data:data});
    })
}

exports.updateStudentDetails = async (req,res) => {
    const { id }=req.query;
    // console.log(id);
    const data = req.body;
    await studentModel.findByIdAndUpdate(id,{"$set":data},{upsert:true})
        return res.status(200).json({message:"Success!"});
}

exports.deleteStudentDetail = async (req,res) => {
    const { id } = req.query;
    await studentModel.deleteOne({"_id":id});
            return res.status(200).json({message:"Deleted!"});
}