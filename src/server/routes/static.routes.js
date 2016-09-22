'use strict';

const controller = require('../controllers/static.controllers');

module.exports = [
    {
        method: 'GET',
        path: '/public/{path*}',
        config: controller.assets
    },
    {
        method: 'GET',
        path: '/',
        config: controller.index
    }
];
