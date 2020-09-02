const { request } = require("../app");

const express = require('express');
const router = express.Router();
const studyController = require('../controllers/studyController.js')

// GET
    router.get('/:id',studyController.get);
    router.post('',studyController.get);

// POST


module.exports = router;