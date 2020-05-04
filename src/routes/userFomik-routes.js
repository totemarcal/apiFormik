
const express = require('express');
const router = express.Router();
const userFormikController = require('../controllers/userFormik-controller');
const { check } = require('express-validator');


router.get('/', userFormikController.listUserFormik);
router.post('/', [
    check('name').isLength({ min: 7 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
    check('username').isLength({ min: 8, max: 280 }).withMessage("O usuário precisa ter no mínimo 8 caracteres e no máximo 280.")
],userFormikController.createUserFormik);

router.put('/:id', [
    check('name').isLength({ min: 7 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
    check('username').isLength({ min: 8, max: 280 }).withMessage("O usuário precisa ter no mínimo 8 caracteres e no máximo 280.")
], userFormikController.updateUserFormik);

router.delete('/:id', userFormikController.deleteUserFormik);

module.exports = router;