const MentorStudentModel = require ('../model/mentor_students');

exports.CreateMentor = async (req, res, next) => {
 const mentordata =  new MentorStudentModel.Mentor({...req.body.Mentor});
 try{
         const response = await mentordata.save();
         res.send(response);
 }catch(err){
     console.log(err);
 }
}

exports.CreateStudent = async (req, res, next) => {
    const Studentdata =  new MentorStudentModel.Student({...req.body.Student});
    try{
            const response = await Studentdata.save();
            res.send(response);
    }catch(err){
        console.log(err);
    }
   }

exports.getMentor = async (req, res, next) => {
    try{
         const mentor = await MentorStudentModel.Mentor.find();
         res.send(mentor);
    }
    catch(err){
        console.log(err);
    }
}

exports.getStudent = async (req, res, next) => {
    try{
         const Studentdata = await MentorStudentModel.Student.find();
         res.send(Studentdata);
    }
    catch(err){
        console.log(err);
    }
}

exports.updateMentor=async(req,res,next)=>{
    try{
           var response=await MentorStudentModel.Mentor.findOneAndUpdate({_id:req.params.mentor_id},{...req.body.Mentor},{runValidators:true,new:true})
           res.send(response);
       }
       catch(e){console.log(e)}
  
}

exports.updateStudent=async(req,res,next)=>{
    try{
           var response=await MentorStudentModel.Student.findOneAndUpdate({_id:req.params.Student_id},{...req.body.Student},{runValidators:true,new:true})
           res.send(response);
       }
       catch(e){console.log(e)}
  
}

exports.getStudents_from_a_mentor = async(req,res,next)=>{
    try{
           var response=await MentorStudentModel.Mentor.aggregate([{
            $lookup: {
                from: "Student",
                localField: "mentor_id",
                foreignField: "mentor_id",
                as: "Students_for_Particular_Mentor",
                pipeline:[
                   {
                       $project:{Student_name:1,Course:1}
                   }
                   ],
              }
           }]).project({mentor_id:1, mentor_name:1 ,Course_Handled:1,No_of_Students:1})
           res.send(response);
       }
       catch(e){console.log(e)}
  
}