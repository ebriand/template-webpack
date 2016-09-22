'use strict';

const _ = require('lodash');
const staticRoutes = require('./static.routes');
const dummyRoutes = require('./dummy.routes');

module.exports = function() {
    const routers = [staticRoutes, dummyRoutes];
    return _(routers).flatten().value();
};
