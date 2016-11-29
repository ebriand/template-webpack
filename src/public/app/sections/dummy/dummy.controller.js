import DummyService from '../../core/dummy/dummy.service.js';

class DummyController {
  constructor(DummyService) {
    DummyService.hello((message) => {
      this.message = message;
    });
  }
}

DummyController.$inject = [DummyService.name];

export default DummyController;
