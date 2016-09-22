'use strict';

const controller = require('../controllers/dummy.controllers');

module.exports = [
    {
        method: 'GET',
        path: '/api/hello',
        config: controller.hello
    }
];
