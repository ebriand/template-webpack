import angular from 'angular';

import DummyService from './dummy/dummy.service.js';

angular.module('templateApp.core', [])
    .service('DummyService', DummyService);
