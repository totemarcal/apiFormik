// importando o mongoose
const mongoose = require('mongoose');
const userFormik = mongoose.model('userFormik');
//list
exports.listUserFormik= async () => {
      const res = await userFormik.find({}, 'name username ');
      return res;
  };
  
  // create
  exports.createUserFormik= async data => {
      const user= new userFormik(data);  
      await user.save();
  };

  // update
  exports.updateUserFormik = async (id, data) => {
    await userFormik.findByIdAndUpdate(id, {
      $set: data
    });
  };

  //delete
  exports.deleteUserFormik = async id => {
    await userFormik.findByIdAndDelete(id);
  };
