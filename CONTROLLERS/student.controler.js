const student = require('../MODELS/students.schema');


const student_add = async (req, res) => {
    try{
        await student.create(req.body);
        res.send("student added successfully")
    }
    catch(err){
        res,send(error.message);
    }
};

module.exports = student_add;