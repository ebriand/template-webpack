import dummyTemplate  from './dummy/dummy.html';
import DummyController  from './dummy/dummy.controller.js';

function sectionsRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dummy');

    $stateProvider
        .state('dummy', {
            url: '/dummy',
            templateUrl: dummyTemplate,
            controller: DummyController.name,
            controllerAs: 'dummyCtrl'
        });
}

sectionsRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default sectionsRoutes;
