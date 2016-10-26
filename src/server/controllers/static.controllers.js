const publicPath = './public';

export default {
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
