'use strict';

const Hapi = require('hapi');
const plugins = require('./config/plugins');
const routes = require('./routes')();

const server = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: 9000
});

server.register(plugins,
    (err) => {
        if (err) throw err;

        server.route(routes);
    }
);

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
