import controller from '../controllers/dummy.controllers';

export default [
    {
        method: 'GET',
        path: '/api/hello',
        config: controller.hello
    }
];
