const express = require('express');
const router = express.Router();

const { createStudent, updateStudentDetails, deleteStudentDetail, getStudentDetails } = require('../controller/studentCR');

router.post('/create-student',createStudent);
router.get('/get-student-details',getStudentDetails);
router.patch('/update-student',updateStudentDetails);
router.delete('/delete-student',deleteStudentDetail);

module.exports = router;