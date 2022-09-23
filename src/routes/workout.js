'use strict';

const express = require('express');
const router = express.Router();

router.get('/workout');
router.get('/workout/:id');
router.post('/workout');
router.put('/workout/:id');
router.delete('workout/:id');

module.exports = router;