const express = require('express');
const router = express.Router();

const Taskmodule = require('../Module/Mentor_Student');

router.post('/create',Taskmodule.CreateMentor);
router.post('/post',Taskmodule.CreateStudent);
router.get('/mentordata',Taskmodule.getMentor);
router.get('/Studentdata',Taskmodule.getStudent);
router.put('/update/:mentor_id',Taskmodule.updateMentor);
router.put('/change/:Student_id',Taskmodule.updateStudent);
router.get('/Studentdataforamentor',Taskmodule.getStudents_from_a_mentor);


module.exports=router;