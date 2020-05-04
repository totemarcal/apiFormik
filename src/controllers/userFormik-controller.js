const repository = require('../repositories/userFormik-repository');
const { validationResult } = require('express-validator');


// list
exports.listUserFormik= async (req, res) => {
  try {
    const data = await repository.listUserFormik();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar userFormik.'});
  }
};

// create
exports.createUserFormik= async (req, res) => {
  try {
    const {errors} = validationResult(req);

    if(errors.length > 0) {
      return res.status(400).send({message: errors})
    }
    
    await repository.createUserFormik({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password
    });

    res.status(201).send({message: 'userFormik cadastrada com sucesso!'});
  } catch (e) {
    
    res.status(500).send({message: 'Falha ao cadastrar userFormik.'});
  }
};

//update
exports.updateUserFormik = async (req, res) => {
  try {
    const {errors} = validationResult(req);
    
    if(errors.length > 0) {
      return res.status(400).send({message: errors})
    }

    await repository.updateUserFormik(req.params.id, req.body);
    res.status(200).send({
      message: 'Usuário atualizado com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: 'Falha ao atualizar a usuário.'});
  }
};

// delete
exports.deleteUserFormik = async (req, res) => {
  try {
    await repository.deleteUserFormik(req.params.id);
    res.status(200).send({
      message: 'Usuário removido com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: 'Falha ao remover o usuário.'});
  }
};