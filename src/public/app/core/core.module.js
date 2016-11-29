import angular from 'angular';

import DummyService from './dummy/dummy.service.js';

const coreModuleName = 'templateApp.core';

angular.module(coreModuleName, [])
  .service(DummyService.name, DummyService);

export default coreModuleName;
