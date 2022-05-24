const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReqString = {
    type: String,
    required: true
}

const ReqNumber = {
    type: Number,
    required: true
}

const MentorSchema = new Schema ({
    "mentor_id":ReqNumber,
    "mentor_name":ReqString,
    "Email":ReqString,
    "PhoneNumber":ReqNumber,
    "Course_Handled":ReqString,
    "No_of_Students":[String]

})

const StudentSchema = new Schema({
    "Student_id":ReqNumber,
    "Student_name":ReqString,
    "Email":ReqString,
    "PhoneNumber":ReqNumber,
    "Course":ReqString,
    "mentor_id":ReqNumber
})

const Mentor = mongoose.model('Mentor',MentorSchema);
const Student = mongoose.model('Student',StudentSchema);

module.exports = {
    Mentor,Student
}