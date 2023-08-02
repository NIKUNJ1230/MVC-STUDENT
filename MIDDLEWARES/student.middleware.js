const check_data = (req,res,next) => {

    let {name,number,course} = req.body;
    if (name && number && course) {
        next();
    }
else {
    res.send('Please enter valid details');
}
}
module.exports = {check_data};