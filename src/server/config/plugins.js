'use strict';

module.exports = [
    {
        register: require('inert')
    }, 
    {
        register: require('good'),
        options: {
            ops: {
                interval: 1000
            },
            reporters: {
                console: [{
                    module: 'good-squeeze',
                    name: 'Squeeze',
                    args: [{
                        log: '*',
                        response: '*'
                    }]
                }, 
                {
                    module: 'good-console'
                }, 'stdout']
            }
        }
    }
];
