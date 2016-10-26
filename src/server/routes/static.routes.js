import controller from '../controllers/static.controllers';

export default [
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
