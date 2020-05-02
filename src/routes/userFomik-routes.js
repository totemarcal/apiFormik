
const express = require('express');
const router = express.Router();
const userFormikController = require('../controllers/userFormik-controller');
const { check } = require('express-validator');


router.get('/', userFormikController.listUserFormik);
router.post('/', [
    check('name').isLength({ min: 7 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
    check('username').isLength({ min: 20, max: 280 }).withMessage("A menção precisa ter no mínimo 20 caracteres e no máximo 280.")
],userFormikController.createUserFormik);

module.exports = router;