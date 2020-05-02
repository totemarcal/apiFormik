// importando o mongoose
const mongoose = require('mongoose');
const userFormik = mongoose.model('userFormik');

exports.listUserFormik= async () => {
      const res = await userFormik.find({}, 'name username -_id');
      return res;
  };
  
  // create
  exports.createUserFormik= async data => {
      const user= new userFormik(data);  
      await user.save();
  };
