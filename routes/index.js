'use strict';

const express = require('express');
const router = express.Router();

router.get('/', require('./welcome'));
router.get('/login', require('./login'));
router.get('/user', require('./user'));
router.all('/tunnel', require('./tunnel'));
router.get('/read', require('./read'));
router.get('/test', require('./test'));

module.exports = router;
