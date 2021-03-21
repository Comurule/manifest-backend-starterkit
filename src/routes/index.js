const express = require('express');
const router = express.Router();

const publicRoutes = require('./public');

router.get('/', (req, res) => { res.sendStatus(200) });

router.use(publicRoutes);

module.exports = router;