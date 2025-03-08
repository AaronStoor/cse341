const express = require('express');
const { getData } = require('../controllers/dataController');

const router = express.Router();

const setRoutes = () => {
    router.get('/data', getData);
    return router;
};

module.exports = setRoutes;