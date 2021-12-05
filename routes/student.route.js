const {studentController} = require('../controllers');
const express = require("express");
const router = express.Router();

router.get('/', studentController.getAll);
router.get('/:id', studentController.getById);
router.put('/', studentController.updateInfo);

module.exports = router;