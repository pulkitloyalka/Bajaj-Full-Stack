// filepath: d:\Bajaj_Pulkit\array-processor-api\src\routes\arrayRoutes.js
const express = require('express');
const router = express.Router();
const ArrayController = require('../controllers/arrayController');
const controller = new ArrayController();

router.post('/bfhl', controller.processArray.bind(controller));

module.exports = router;