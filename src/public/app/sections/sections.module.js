import angular from 'angular';
import 'angular-ui-router';

import sectionsRoutes from './sections.routes';
import DummyController from './dummy/dummy.controller';

const sectionsModuleName = 'templateApp.sections';

angular.module(sectionsModuleName, ['ui.router'])
    .config(sectionsRoutes)
    .controller(DummyController.name, DummyController);

export default sectionsModuleName;
