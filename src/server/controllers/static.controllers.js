'use strict';

const publicPath = './public';

module.exports = {
    assets: {
        handler: {
            directory: { path: publicPath }
        }
    },
    index: {
        handler: (request, reply) => {
            reply.file(publicPath + '/index.html');
        }
    }
};
