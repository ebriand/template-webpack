import dummyTemplate  from './dummy/dummy.html';

function sectionsRoutes($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /versions
    $urlRouterProvider.otherwise('/dummy');
    //
    // Now set up the states
    $stateProvider
        .state('dummy', {
            url: '/dummy',
            templateUrl: dummyTemplate,
            controller: 'DummyController',
            controllerAs: 'dummyCtrl'
        });
}

sectionsRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default sectionsRoutes;
