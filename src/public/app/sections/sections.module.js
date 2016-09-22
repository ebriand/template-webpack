import angular from 'angular';
import 'angular-ui-router';

import sectionsRoutes from './sections.routes';
import DummyController from './dummy/dummy.controller';

angular.module('templateApp.sections', ['ui.router'])
    .config(sectionsRoutes)
    .controller('DummyController', DummyController);
